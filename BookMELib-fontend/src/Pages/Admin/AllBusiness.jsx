import React, { useState } from "react";
import GlobalSearchBar from "../../components/common/globalSearchBar";
import DataTable from "../../components/common/DataTable";
import { columns } from "../../components/Admin/Dashboard/BusinessColumns";
import BusinessRow from "../../components/Admin/Dashboard/BusinessRow";
import { businessData } from "../../data/BusinesseData";
import ActiveStatusNavigation from "../../components/common/StatusNavigation";
import GlobalFilter from "@/components/common/globalFilter";
import TableBottomNavigation from "@/components/common/TableBottomNivigation";
import Icon from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";

const AllBusinessContainer = () => (
  <div className="flex">
    <aside className="md:w-[20%] lg:w-[23%] h-screen bg-gray-100 dark:bg-gray-800" />
    <main className="md:w-[98%] w-full mx-3 px-3 mt-20">
      <AllBusiness />
    </main>
  </div>
);

const AllBusiness = () => {
  const [activeTab, setActiveTab] = useState("allbusiness");

  return (
    <>
      <div className="flex gap-4 justify-between items-center mb-4">
        <div>
          <ActiveStatusNavigation
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
        <div className="flex gap-4">
          <GlobalFilter />
        </div>
      </div>
      <div className="flex gap-4 mb-4">
        <div className="w-full">
          <GlobalSearchBar>
            <div>
              <input
                placeholder="Search  Business"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md block w-full pl-10 py-2.5 dark:bg-white dark:border-gray-600 dark:text-white focus:outline-none focus:ring-0"
              />
            </div>
          </GlobalSearchBar>
        </div>
        <BusinessCategory />
      </div>

      <BusinessTable activeTab={activeTab} />
    </>
  );
};

const BusinessTable = ({ activeTab }) => {
  const hasData = activeTab === "allbusiness" && businessData?.length > 0;

  return (
    <div className="mt-5">
      {/* All Businesses Table */}
      {activeTab === "allbusiness" && (
        <>
          <DataTable
            columns={columns}
            data={businessData}
            renderRow={(item, index) => (
              <BusinessRow key={index} business={item} />
            )}
          />

          {hasData && (
            <TableBottomNavigation>
              <div className="flex justify-between items-center mt-5 ml-1">
                <p className="text-md text-gray-500">
                  Showing <span className="font-bold text-gray-600">1-5</span>{" "}
                  of <span className="font-bold text-gray-600">100</span>{" "}
                  businesses
                </p>

                <div className="flex gap-4">
                  <button className="border px-2.5 py-0.5 rounded-md">
                    <Icon path={mdiChevronLeft} size={1} />
                  </button>
                  <button className="border px-2.5 py-0.5 rounded-md">1</button>
                  <button className="border px-2.5 py-0.5 rounded-md">2</button>
                  <button className="border px-2.5 py-0.5 rounded-md">3</button>
                  <button className="border px-2.5 py-0.5 rounded-md">
                    <Icon path={mdiChevronRight} size={1} />
                  </button>
                </div>
              </div>
            </TableBottomNavigation>
          )}
        </>
      )}

      {/* Other Tab Views */}
      {activeTab === "pendingapproved" && <p>Pending approval businesses</p>}
      {activeTab === "Active" && <p>Active businesses</p>}
      {activeTab === "suspend" && <p>Suspended businesses</p>}
    </div>
  );
};

const BusinessCategory = ({ value, onChange, active }) => {
  return (
    <div className="flex flex-col gap-2 mt-5 w-full md:w-[30%] lg:w-[20%]">
      <select
        id="category"
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-lg py-2.5 text-sm focus:outline-none focus:ring-0 focus:border-gray-300 active:outline-none active:ring-0 active:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
      >
        <option value="">All Category</option>
        <option value="business">Beauty & Wellness</option>
        <option value="individual">Health & Medical</option>
        <option value="individual">Fitness</option>
        <option value="individual">Professional Services</option>
      </select>
    </div>
  );
};

export default AllBusinessContainer;
