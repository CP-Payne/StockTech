import React, { SyntheticEvent } from "react";
import DeletePortfolio from "../DeletePortfolio/DeletePortfolio";
import { Link } from "react-router-dom";
import { PortfolioGet } from "../../../Models/Portfolio";

interface Props {
  portfolioValue: PortfolioGet;
  onPortfolioDelete: (symbol: string) => void;
}

const CardPortfolio = ({ portfolioValue, onPortfolioDelete }: Props) => {
  return (
    <div className="flex items-center justify-between p-4 mb-3 bg-white rounded-md shadow hover:shadow-md transition-shadow duration-200 border border-gray-200">
      <div className="flex-grow">
        <Link
          to={`/company/${portfolioValue.symbol}/company-profile`}
          className="text-lg font-semibold text-darkBlue hover:underline hover:text-lightBlue transition-colors"
        >
          {portfolioValue.symbol}
        </Link>
        <p className="text-sm text-gray-600">{portfolioValue.companyName}</p>
        {/* Add more details below */}
      </div>
      <div className="ml-4 flex-shrink-0">
        <DeletePortfolio
          portfolioSymbol={portfolioValue.symbol}
          onPortfolioDelete={onPortfolioDelete}
        />
      </div>
    </div>
  );
};

export default CardPortfolio;
