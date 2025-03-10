import React, { useEffect, useState } from "react";
import { CompanyCompData, CompanyCompDataV2 } from "../../company";
import { getCompData } from "../../api";
import CompFinderItem from "./CompFinderItem/CompFinderItem";

type Props = {
  ticker: string;
};

const CompFinder = ({ ticker }: Props) => {
  const [companyData, setCompanyData] = useState<CompanyCompDataV2[]>();
  useEffect(() => {
    const getComps = async () => {
      const values = await getCompData(ticker);
      setCompanyData(values?.data);
    };
    getComps();
  }, [ticker]);
  return (
    <div className="inline-flex rounded-md shadow-sm m-4">
      {companyData?.map((company) => {
        return <CompFinderItem ticker={company.symbol} />;
      })}
    </div>
  );
};

export default CompFinder;
