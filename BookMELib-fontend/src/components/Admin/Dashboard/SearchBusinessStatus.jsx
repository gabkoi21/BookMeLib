import { useState } from "react";
import GlobalSearchBar from "../../common/globalSearchBar";
import GlobalButton from "../../common/globalButton";
import GlobalFilter from "../../common/globalFilter";
import DataTable from "../../../components/common/DataTable";
import { columns } from "./BusinessColumns";
import BusinessRow from "./BusinessRow";
import { businessData } from "../../../data/BusinesseData";
import ActiveStatusNavigation from "../../common/StatusNavigation";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";

const SearchBusiness = () => {
  const [activeTab, setActiveTab] = useState("allbusiness");

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
          <GlobalButton>
            <span className="flex items-center gap-2">
              <Icon path={mdiPlus} size={1} />
              Add Business
            </span>
          </GlobalButton>
        </div>
      </div>
      <GlobalSearchBar>
        <div>
          <input
            placeholder="Search Business "
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md block w-full pl-10 py-2.5 dark:bg-white dark:border-gray-600 dark:text-white focus:outline-none focus:ring-0"
          />
        </div>
      </GlobalSearchBar>
      <BusinessTable activeTab={activeTab} />
    </>
  );
};

const BusinessTable = ({ activeTab }) => {
  return (
    <div className="mt-5">
      {activeTab === "allbusiness" && (
        <DataTable
          columns={columns}
          data={businessData}
          renderRow={(item, index) => (
            <BusinessRow key={index} business={item} />
          )}
        />
      )}
      {activeTab === "pendingapproved" && <p>Pending approval businesses</p>}
      {activeTab === "Active" && <p>Active businesses</p>}
      {activeTab === "suspend" && <p>Suspended businesses</p>}
    </div>
  );
};

export default SearchBusiness;
