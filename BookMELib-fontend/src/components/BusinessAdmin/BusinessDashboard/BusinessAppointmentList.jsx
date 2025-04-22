import Icon from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";
import { Calendar } from "@/components/ui/calendar";
import React, { useState } from "react";
import { Appointmentcolumns } from "@/components/BusinessAdmin/BusinessDashboard/BusinessAppointmentColumns";
import DataTable from "@/components/common/DataTable";
import BusinessAppointmentActiveStatusNavigation from "@/components/BusinessAdmin/BusinessDashboard/BusinessAppointmentActiveStatusNavigation";
import GlobalFilter from "@/components/common/globalFilter";
import { AppointmentData } from "@/data/AppointmentData";
import AppointmentRow from "@/components/BusinessAdmin/BusinessDashboard/BusinessAppointmentRow";
import GlobalSearchBar from "@/components/common/globalSearchBar";
import TableBottomNavigation from "@/components/common/TableBottomNivigation";

const ApppintmentContainer = () => {
  const [activeTab, setActiveTab] = useState("allappointment");
  return (
    <>
      <div className="flex mt-10">
        <BusinessAppointmentActiveStatusNavigation
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <GlobalFilter />
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
      <AppointmentTable activeTab={activeTab} />
    </>
  );
};

const AppointmentTable = ({ activeTab }) => {
  const [activeRowId, setActiveRowId] = useState(null);

  const hasData = activeTab === "allappointment" && AppointmentData?.length > 0;

  const toggleRow = (id) => {
    setActiveRowId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="mt-5">
      {activeTab === "allappointment" && (
        <>
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
          {hasData && <ExtendedBottomComponent />}
        </>
      )}
      {activeTab === "calendarview" && <CalendarData />}
    </div>
  );
};

// export default AppointmentTable;
const BusinessCategory = ({ value, onChange, active }) => {
  return (
    <div className="flex flex-col gap-2 mt-5 w-full md:w-[30%] lg:w-[20%]">
      <select
        id="category"
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-lg py-2.5 text-sm focus:outline-none focus:ring-0 focus:border-gray-300 active:outline-none active:ring-0 active:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
      >
        <option value="">All Status</option>
        <option value="business">Comfirmed</option>
        <option value="individual">Pending</option>
      </select>
    </div>
  );
};

export default ApppintmentContainer;

const CalendarData = () => {
  const [date, setDate] = React.useState(new Date());

  return (
    <div className=" mb-10">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border w-full"
      />
    </div>
  );
};

const ExtendedBottomComponent = () => {
  return (
    <>
      <TableBottomNavigation>
        <div className="flex justify-between items-center mt-8 ml-1 mb-10">
          <div>
            <p className="text-md text-gray-500">
              Showing <span className="font-bold text-gray-600">1-5</span> of{" "}
              <span className="font-bold text-gray-600">2,853</span>{" "}
              appointments
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
    </>
  );
};
