import {
  CompanyBalanceSheet,
  CompanyCashFlow,
  CompanyCompData,
  CompanyCompDataV2,
  CompanyIncomeStatement,
  CompanyKeyMetrics,
  CompanyProfile,
  CompanySearch,
  CompanyTenK,
} from "./company";
// import axios from "axios";
import axios, { AxiosError, isAxiosError } from "axios";

interface SearchResponse {
  data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
  try {
    const data = await axios.get<SearchResponse>(
      `https://financialmodelingprep.com/stable/search-symbol?query=${query}&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    return data;
  } catch (error: AxiosError) {
    if (isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error has occured";
    }
  }
};

export const getKeyMetrics = async (query: string) => {
  try {
    const data = await axios.get<CompanyKeyMetrics[]>(
      `https://financialmodelingprep.com/stable/key-metrics-ttm?symbol=${query}&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    return data;
  } catch (error: any) {
    console.log("error message from API: ", error.message);
  }
};

export const getCompanyProfile = async (query: string) => {
  try {
    const data = await axios.get<CompanyProfile[]>(
      `https://financialmodelingprep.com/stable/profile?symbol=${query}&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    return data;
  } catch (error: any) {
    console.log("error message from API: ", error.message);
  }
};

export const getIncomeStatement = async (query: string) => {
  try {
    const data = await axios.get<CompanyIncomeStatement[]>(
      `https://financialmodelingprep.com/stable/income-statement?symbol=${query}&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    return data;
  } catch (error: any) {
    console.log("error message from API: ", error.message);
  }
};

export const getBalanceSheet = async (query: string) => {
  try {
    const data = await axios.get<CompanyBalanceSheet[]>(
      `https://financialmodelingprep.com/stable/balance-sheet-statement?symbol=${query}&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    return data;
  } catch (error: any) {
    console.log("error message from API: ", error.message);
  }
};

export const getCashFlow = async (query: string) => {
  try {
    const data = await axios.get<CompanyCashFlow[]>(
      `https://financialmodelingprep.com/stable/cash-flow-statement?symbol=${query}&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    return data;
  } catch (error: any) {
    console.log("error message from API: ", error.message);
  }
};

export const getCompData = async (query: string) => {
  try {
    const data = await axios.get<CompanyCompDataV2[]>(
      `https://financialmodelingprep.com/stable/stock-peers?symbol=${query}&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    return data;
  } catch (error: any) {
    console.log("error message from API: ", error.message);
  }
};
