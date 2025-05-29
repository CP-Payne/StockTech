import { JSX, SyntheticEvent } from "react";
import Card from "../Card/Card";
import { CompanySearch } from "../../company";
import { v4 as uuidv4 } from "uuid";
import StockListTable from "../StockListTable/StockListTable";

interface Props {
  searchResults: CompanySearch[];
  onPortfolioCreate: (symbol: string) => void;
}

type TableColumnConfig = {
  label: string;
  render: (company: CompanySearch) => React.ReactNode;
  thClassName?: string;
  tdClassName?: string;
};

const configs: TableColumnConfig[] = [
  {
    label: "Symbol",
    render: (company: CompanySearch) => company.symbol,
    thClassName: "w-1/6",
    tdClassName: "font-medium text-darkBlue",
  },
  {
    label: "Company Name",
    render: (company: CompanySearch) => company.name,
    thClassName: "w-2/6",
  },
  {
    label: "Exchange",
    render: (company: CompanySearch) =>
      `${company.exchangeFullName} (${company.exchange})`,
    thClassName: "w-2/6",
  },
];

const CardList: React.FC<Props> = ({ searchResults, onPortfolioCreate }) => {
  if (!searchResults || searchResults.length === 0) {
    // This case is handled by search page
    return null;
  }
  return (
    <StockListTable
      config={configs}
      data={searchResults}
      onPortfolioCreate={onPortfolioCreate}
    />
  );
};

export default CardList;
