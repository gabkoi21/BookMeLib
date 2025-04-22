import React, { useState } from "react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";
import Icon from "@mdi/react";
import { Appointmentcolumns } from "@/components/Admin/Dashboard/AppointmentColumns";
import AppointmentRow from "@/components/Admin/Dashboard/AppointmentRow";
import DataTable from "@/components/common/DataTable";
import AppointmentActiveStatusNavigation from "@/components/common/AppointmentStatusNavigation";
import GlobalFilter from "@/components/common/globalFilter";
import GlobalSearchBar from "@/components/common/globalSearchBar";
import TableBottomNavigation from "@/components/common/TableBottomNivigation";
import { AppointmentData } from "@/data/AppointmentData";

const ApppintmentContainer = () => (
  <div className="flex">
    <aside className="md:w-[20%] lg:w-[23%] h-screen" />
    <main className="md:w-[98%] w-full mx-3 px-3 mt-20">
      <Appointments />
    </main>
  </div>
);

export default ApppintmentContainer;

const Appointments = () => {
  const [activeTab, setActiveTab] = useState("allappointment");

  return (
    <div>
      {/* Top Filter Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <AppointmentActiveStatusNavigation
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <GlobalFilter />
      </div>

      {/* Search & Category Section */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full">
          <GlobalSearchBar>
            <input
              placeholder="Search Business"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md w-full pl-10 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </GlobalSearchBar>
        </div>
        <BusinessCategory />
      </div>

      {/* Table */}
      <AppointmentTable activeTab={activeTab} />
    </div>
  );
};

const AppointmentTable = ({ activeTab }) => {
  const hasData = activeTab === "allappointment" && AppointmentData?.length > 0;
  const [activeRowId, setActiveRowId] = useState(null);

  const toggleRow = (id) => {
    setActiveRowId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <div className="mt-5">
        {activeTab === "allappointment" && (
          <DataTable
            columns={Appointmentcolumns}
            data={AppointmentData}
            renderRow={(item, index) => (
              <AppointmentRow
                key={item.id || index}
                appointment={item}
                isOpen={activeRowId === item.id}
                onToggle={() => toggleRow(item.id)}
              />
            )}
          />
        )}

        {activeTab === "completed" && <p>customer information</p>}
        {activeTab === "cancelled" && <p>Tbusinessowners</p>}
        {activeTab === "admins" && <p>Suspended businesses</p>}
      </div>

      {hasData && <ExtendedBottomComponent />}
    </>
  );
};

// This is the categoryG
const BusinessCategory = ({ value, onChange }) => {
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

const ExtendedBottomComponent = () => {
  return (
    <TableBottomNavigation>
      <div className="flex justify-between items-center mt-8 ml-1 mb-10">
        <div>
          <p className="text-md text-gray-500">
            Showing <span className="font-bold text-gray-600">1-5</span> of{" "}
            <span className="font-bold text-gray-600">2,853</span> appointments
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 border border-gray-300 px-3 py-1 rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
            <Icon path={mdiChevronLeft} size={0.9} />
            Previous
          </button>

          <button className="flex items-center gap-1 border border-gray-300 px-3 py-1 rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
            Next
            <Icon path={mdiChevronRight} size={0.9} />
          </button>
        </div>
      </div>
    </TableBottomNavigation>
  );
};
