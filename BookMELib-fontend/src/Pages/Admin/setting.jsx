import { useState } from "react";
// import { AdminNav } from "../../Routes/AdminRoutes";
import { drivers, task, customers } from "../../data/TaskManagementData";

import Icon from "@mdi/react";
import { mdiDotsVertical } from "@mdi/js";

const SettingContainer = () => (
  <div className="flex">
    <aside className="md:w-[16%] h-screen">{/* <AdminNav /> */}</aside>
    <main className="md:w-[84%] w-full mx-3 px-3 mt-20">
      <Settings />
    </main>
  </div>
);

export default SettingContainer;

const Settings = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Settings</h1>
      <div className="flex flex-col  ml-20 mt-10">
        <h1 className="text-xl font-semibold">This is for the settings</h1>
        <p className="text-gray-500">
          You can manage your account settings here.
        </p>
      </div>
    </div>
  );
};
