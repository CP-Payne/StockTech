import React, { SyntheticEvent } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";

// interface Props {
//   onPortfolioDelete: (e: SyntheticEvent) => void;
//   portfolioValue: string;
// }

interface Props {
  onPortfolioDelete: (symbol: string) => void;
  portfolioSymbol: string;
}

const DeletePortfolio = ({ onPortfolioDelete, portfolioSymbol }: Props) => {
  const handleDelete = () => {
    onPortfolioDelete(portfolioSymbol);
  };
  return (
    <button
      onClick={handleDelete}
      type="button"
      className="p-2 text-red-500 hover:text-red-700 hover:bg-red-100 rounded-full transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
      aria-label={`Remove ${portfolioSymbol} from portfolio`}
    >
      <XMarkIcon className="h-5 w-5" />
    </button>
  );
  // return (
  //   <div>
  //     <form onSubmit={onPortfolioDelete}>
  //       <input hidden={true} value={portfolioValue} />
  //       <button className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500">
  //         X
  //       </button>
  //     </form>
  //   </div>
  // );
};

export default DeletePortfolio;
