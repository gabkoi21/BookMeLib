import { useState } from "react";
import GlobalSearchBar from "../../common/globalSearchBar";
import GlobalButton from "../../common/globalButton";
import GlobalFilter from "../../common/globalFilter";
import DataTable from "../../../components/common/DataTable";
import { columns } from "./BusinessColumns";
import BusinessRow from "./BusinessRow";
import { businessData } from "../../../data/BusinesseData";
import ActiveStatusNavigation from "../../common/StatusNavigation";

const SearchBusiness = () => {
  const [activeTab, setActiveTab] = useState("All Business");

  return (
    <>
      <div className="flex items-center justify-between mt-5">
        <div>
          <ActiveStatusNavigation
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
        <div className="flex items-center gap-2">
          <GlobalFilter />
          <GlobalButton text="Add Business" />
        </div>
      </div>
      <GlobalSearchBar placeholder="Search Business" />
      <BusinessTable activeTab={activeTab} />
    </>
  );
};

const BusinessTable = ({ activeTab }) => {
  return (
    <div className="mt-5">
      {activeTab === "All Business" && (
        <DataTable
          columns={columns}
          data={businessData}
          renderRow={(item, index) => (
            <BusinessRow key={index} business={item} />
          )}
        />
      )}
      {activeTab === "Pending Approved" && <p>Pending approval businesses</p>}
      {activeTab === "Active" && <p>Active businesses</p>}
      {activeTab === "Suspend" && <p>Suspended businesses</p>}
    </div>
  );
};

export default SearchBusiness;
