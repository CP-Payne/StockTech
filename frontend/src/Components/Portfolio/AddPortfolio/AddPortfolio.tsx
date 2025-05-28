import { PlusIcon } from "@heroicons/react/20/solid";
import React, { SyntheticEvent } from "react";

interface Props {
  onPortfolioCreate: (symbol: string) => void;
  symbol: string;
}

const AddPortfolio = ({ onPortfolioCreate, symbol }: Props) => {
  const handleAdd = () => {
    onPortfolioCreate(symbol);
  };
  return (
    <div className="flex flex-col items-center justify-end  space-x-2 space-y-2 md:flex-row md:space-y-0">
      <button
        type="button"
        onClick={handleAdd}
        className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-lightGreen rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-150"
        aria-label={`Add ${symbol} to portfolio`}
      >
        <PlusIcon className="h-4 w-4 mr-1 hidden sm:inline" />
        Add
      </button>
    </div>
  );
};

export default AddPortfolio;
