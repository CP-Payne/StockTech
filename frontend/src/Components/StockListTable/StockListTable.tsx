import React, { SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";

type Props = {
  config: any;
  data: any;
  onPortfolioCreate: (e: SyntheticEvent) => void;
};
const StockListTable = ({ config, data, onPortfolioCreate }: Props) => {
  const renderedRows = data.map((company: any) => {
    return (
      <tr key={company.cik}>
        {config.map((val: any) => {
          return <td className="p-3">{val.render(company)}</td>;
        })}

        {/* Add button to view info and button to add to portfolio */}
        <td className="p-3">
          <Link
            to={`/company/${company.symbol}/company-profile`}
            className="p-2 px-8 text-white bg-darkBlue rounded-lg hover:opacity-70 focus:outline-none"
          >
            Info
          </Link>
        </td>

        <td className="p-3">
          <AddPortfolio
            onPortfolioCreate={onPortfolioCreate}
            symbol={company.symbol}
          />
        </td>
      </tr>
    );
  });
  const renderedHeaders = config.map((config: any) => {
    return (
      <th
        className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        key={config.label}
      >
        {config.label}
      </th>
    );
  });
  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
      <table className="min-w-full divide-y divide-gray-200 m-5">
        <thead className="bg-gray-50">{renderedHeaders}</thead>
        <tbody>{renderedRows}</tbody>
      </table>
    </div>
  );
};

export default StockListTable;
