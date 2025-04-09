import React, { useState } from "react";
import GlobalSearchBar from "../../components/common/globalSearchBar";
import GlobalButton from "../../components/common/globalButton";
import DataTable from "../../components/common/DataTable";
import { columns } from "../../components/Admin/Dashboard/BusinessColumns";
import BusinessRow from "../../components/Admin/Dashboard/BusinessRow";
import { businessData } from "../../data/BusinesseData";
import ActiveStatusNavigation from "../../components/common/StatusNavigation";

import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";

const AllBusinessContainer = () => (
  <div className="flex">
    <aside className="md:w-[20%] lg:w-[23%] h-screen bg-gray-100 dark:bg-gray-800" />
    <main className="md:w-[98%] w-full mx-3 px-3 mt-28">
      <AllBusiness />
    </main>
  </div>
);

const AllBusiness = () => {
  const [activeTab, setActiveTab] = useState("All Business");
  return (
    <>
      <div className="flex  gap-4 justify-between items-center mb-4">
        <div>
          <ActiveStatusNavigation
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
        <div className="flex gap-4">
          <GlobalButton text=" + Add Business" />
        </div>
      </div>
      <GlobalSearchBar />
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

export default AllBusinessContainer;
