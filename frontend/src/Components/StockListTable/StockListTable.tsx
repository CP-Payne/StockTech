import React, { SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";
import { CompanySearch } from "../../company";

type TableColumnConfig = {
  label: string;
  render: (company: CompanySearch) => React.ReactNode;
  className?: string;
  thClassName?: string;
  tdClassname?: string;
};

interface Props {
  config: TableColumnConfig[];
  data: CompanySearch[];
  onPortfolioCreate: (symbol: string) => void;
}

const StockListTable: React.FC<Props> = ({
  config,
  data,
  onPortfolioCreate,
}) => {
  const renderedHeaders = config.map((column): React.ReactNode => {
    return (
      <th
        className={`px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap ${
          column.thClassName || ""
        }`}
        key={column.label}
        scope="col"
      >
        {column.label}
      </th>
    );
  });
  const renderedRows = data.map((company): React.ReactNode => {
    return (
      <tr
        key={company.symbol}
        className="bg-white hover:bg-gray-50 transition-colors duration-150"
      >
        {config.map((column): React.ReactNode => {
          return (
            <td
              key={`${company.symbol}-${column.label}`}
              className={`px-4 py-3 text-sm text-gray-700 whitespace-nowrap ${
                column.tdClassname || ""
              }`}
            >
              {column.render(company)}
            </td>
          );
        })}

        {/* Actions column */}
        <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap text-right">
          <div className="flex items-center justify-end space-x-2">
            <Link
              to={`/company/${company.symbol}/company-profile`}
              className="px-3 py-1.5 text-xs font-medium text-white bg-darkBlue rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkBlue transition-colors duration-150"
            >
              Info
            </Link>
            <AddPortfolio
              onPortfolioCreate={onPortfolioCreate}
              symbol={company.symbol}
            />
          </div>
        </td>
      </tr>
    );
  });

  return (
    <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            {renderedHeaders}
            <th
              scope="col"
              className="px-4 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {renderedRows.length > 0 ? (
            renderedRows
          ) : (
            <tr>
              <td
                colSpan={config.length + 1}
                className="px-4 py-10 text-center text-gray-500"
              >
                No companies match your search
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StockListTable;
