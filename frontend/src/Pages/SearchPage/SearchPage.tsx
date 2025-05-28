import React, { SyntheticEvent, useEffect, useState } from "react";
import { searchCompanies } from "../../api";
import { CompanySearch } from "../../company";
import ListPortfolio from "../../Components/Portfolio/ListPortfolio/ListPortfolio";
import CardList from "../../Components/CardList/CardList";
import { PortfolioGet } from "../../Models/Portfolio";
import {
  portfolioAddAPI,
  portfolioDeleteAPI,
  portfolioGetAPI,
} from "../../Services/PortfolioService";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";
import Spinner from "../../Components/Spinner/Spinner";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [currentSearchTerm, setCurrentSearchTerm] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<PortfolioGet[] | null>(
    []
  );
  const [searchResult, setSearchResult] = useState<CompanySearch[] | null>(
    null
  );
  const [serverError, setServerError] = useState<string | null>(null);

  const [isLoadingSearch, setIsLoadingSearch] = useState<boolean>(false);
  const [isLoadingPortfolio, setIsLoadingPortfolio] = useState<boolean>(false);

  useEffect(() => {
    getPortfolio();
  }, []);

  // Handle search query from url
  useEffect(() => {
    const queryFromUrl = searchParams.get("q");

    if (queryFromUrl) {
      setCurrentSearchTerm(queryFromUrl);
      performSearch(queryFromUrl);
    } else {
      setSearchResult([]);
      setCurrentSearchTerm("");
      setServerError(null);
    }
  }, [searchParams]);

  const performSearch = async (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setSearchResult(null);
      setCurrentSearchTerm("");
      return;
    }

    setIsLoadingSearch(true);
    setServerError(null);
    setSearchResult(null);

    try {
      const result = await searchCompanies(searchTerm.trim());

      if (typeof result === "string") {
        setServerError(result);
      } else if (result && Array.isArray(result.data)) {
        setSearchResult(result.data);
      } else {
        setServerError("Unexpected search result format.");
      }
    } catch (error: any) {
      console.error("Search error:", error);
      setServerError(error.message || "Failed to fetch search results.");
      toast.error("Search failed!");
    } finally {
      setIsLoadingSearch(false);
    }
  };

  const getPortfolio = () => {
    setIsLoadingPortfolio(true);
    setServerError(null);
    portfolioGetAPI()
      .then((res) => {
        if (res?.data) {
          setPortfolioValues(res?.data);
        } else {
          setPortfolioValues([]);
        }
      })
      .catch((e) => {
        toast.warning("Could not get portfolio values!");
        setPortfolioValues([]);
      })
      .finally(() => {
        setIsLoadingPortfolio(false);
      });
  };

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    portfolioAddAPI(e.target[0].value)
      .then((res) => {
        if (res?.status === 204) {
          toast.success("Stock added to portfolio!");
          getPortfolio();
        }
      })
      .catch((e) => {
        toast.warning("Could not create portfolio item!");
      });
  };

  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    portfolioDeleteAPI(e.target[0].value)
      .then((res) => {
        if (res?.status === 200) {
          toast.success("Stock deleted from portfolio!");
          getPortfolio();
        }
      })
      .catch((e) => {
        toast.warning("Could not delete stock from portfolio!");
      });
  };

  const renderMessage = (message: string) => (
    <div className="text-center py-10 text-gray-500 text-lg">
      <p>{message}</p>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {serverError && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md text-center">
          <p>Error: {serverError}</p>
        </div>
      )}

      {/* Column container */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* left column */}
        <div className="w-full md:w-2/3 lg:w-3/4 bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-3">
            {currentSearchTerm
              ? `Search Results for "${currentSearchTerm}"`
              : "Search for Companies"}
          </h1>

          {isLoadingSearch ? (
            <Spinner />
          ) : searchResult && searchResult.length > 0 ? (
            <CardList
              searchResults={searchResult}
              onPortfolioCreate={onPortfolioCreate}
            />
          ) : currentSearchTerm &&
            !isLoadingSearch &&
            (!searchResult || searchResult.length === 0) ? (
            renderMessage(`No results found for "${currentSearchTerm}".`)
          ) : !currentSearchTerm && !isLoadingSearch ? (
            renderMessage(
              "Enter a search term in the naivation bar above to find companies."
            )
          ) : null}
        </div>

        {/* Right column */}
        <div className="w-full md:w-1/3 lg:w-1/4 bg-gray-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-3">
            My Portfolio
          </h2>
          {isLoadingPortfolio ? (
            <Spinner />
          ) : portfolioValues && portfolioValues.length > 0 ? (
            <ListPortfolio
              portfolioValues={portfolioValues}
              onPortfolioDelete={onPortfolioDelete}
            />
          ) : (
            renderMessage(
              "Your poftfolio is empty. Add stocks from search results."
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
