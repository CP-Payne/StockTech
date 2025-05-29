import React, { SyntheticEvent } from "react";
import CardPortfolio from "../CardPortfolio/CardPortfolio";
import { PortfolioGet } from "../../../Models/Portfolio";

interface Props {
  portfolioValues: PortfolioGet[];
  onPortfolioDelete: (symbol: string) => void;
}

const ListPortfolio = ({ portfolioValues, onPortfolioDelete }: Props) => {
  if (!portfolioValues || portfolioValues.length === 0) {
    return null; // Search page handles the message
  }
  return (
    <div className="space-y-3">
      {portfolioValues.map((portfolioValue) => {
        return (
          <CardPortfolio
            key={portfolioValue.id}
            portfolioValue={portfolioValue}
            onPortfolioDelete={onPortfolioDelete}
          />
        );
      })}
    </div>
  );
};

export default ListPortfolio;
