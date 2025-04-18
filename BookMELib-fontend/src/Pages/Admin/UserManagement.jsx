import { useState } from "react";
import UserRow from "@/components/Admin/Dashboard/UsersRow";
import { Usercolumns } from "@/components/Admin/Dashboard/UserColumns";
import UserActiveStatusNavigation from "@/components/common/UserStatusNavigation";
import DataTable from "@/components/common/DataTable";
import { User } from "@/data/UserData";
import GlobalFilter from "@/components/common/globalFilter";
import GlobalSearchBar from "@/components/common/globalSearchBar";
import Icon from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";
import TableBottomNavigation from "@/components/common/TableBottomNivigation";

const UserManagement = () => (
  <div className="flex">
    <aside className="md:w-[20%] lg:w-[23%] h-screen bg-gray-100 dark:bg-gray-800" />
    <main className="md:w-[98%] w-full mx-3 px-3 mt-20">
      <UserManagementwork />
    </main>
  </div>
);

const UserManagementwork = () => {
  const [activeTab, setActiveTab] = useState("alluser");

  return (
    <>
      <div className="flex items-center justify-between mt-5">
        <UserActiveStatusNavigation
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <GlobalFilter />
      </div>

      <div className="flex gap-4">
        <div className="w-full">
          <GlobalSearchBar>
            <div>
              <input
                placeholder="Search User"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md block w-full pl-10 py-2.5 dark:bg-white dark:border-gray-600 dark:text-white focus:outline-none focus:ring-0"
              />
            </div>
          </GlobalSearchBar>
        </div>
        <UserStatus />
      </div>
      <UserTable activeTab={activeTab} />
    </>
  );
};

const UserTable = ({ activeTab }) => {
  const hasData = activeTab === "alluser" && User?.length > 0;
  return (
    <>
      <div className="mt-5">
        {activeTab === "alluser" && (
          <DataTable
            columns={Usercolumns}
            data={User}
            renderRow={(item, index) => <UserRow key={index} user={item} />}
          />
        )}
        {activeTab === "customer" && <p>customer information</p>}
        {activeTab === "businessowners" && <p>Tbusinessowners</p>}
        {activeTab === "admins" && <p>Suspended businesses</p>}
      </div>
      {hasData && <ExtendedBottomComponent />}
    </>
  );
};

export default UserManagement;

const UserStatus = ({ value, onChange, active }) => {
  return (
    <div className="flex flex-col gap-2 mt-5 w-full md:w-[30%] lg:w-[20%]">
      <select
        id="category"
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-lg py-2.5 text-sm focus:outline-none focus:ring-0 focus:border-gray-300 active:outline-none active:ring-0 active:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
      >
        <option value="">All Status</option>
        <option value="business">Active</option>
        <option value="individual">Inactive</option>
        <option value="individual">Suspended</option>
      </select>
    </div>
  );
};

const ExtendedBottomComponent = () => {
  return (
    <>
      <TableBottomNavigation>
        <>
          <div className="flex justify-between items-center mt-8 ml-1 mb-10">
            <div>
              <p className="text-md text-gray-500">
                Showing <span className="font-bold text-gray-600">1-5</span> of{" "}
                <span className="font-bold text-gray-600">2,853</span> users
              </p>
            </div>

            <div className="flex gap-4">
              <button className=" border px-2.5 py-0.5 rounded-md">
                <Icon path={mdiChevronLeft} size={1} />
              </button>
              <button className=" border px-2.5 py-0.5 rounded-md">1</button>
              <button className=" border px-2.5 py-0.5 rounded-md">2</button>
              <button className=" border px-2.5 py-0.5 rounded-md">3</button>
              <button className=" border px-2.5 py-0.5 rounded-md">
                {<Icon path={mdiChevronRight} size={1} />}
              </button>
            </div>
          </div>
        </>
      </TableBottomNavigation>
    </>
  );
};
