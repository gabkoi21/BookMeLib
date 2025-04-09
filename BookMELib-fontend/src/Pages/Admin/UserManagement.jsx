import { useState } from "react";

import Icon from "@mdi/react";
import { mdiDotsVertical } from "@mdi/js";

const UserManagement = () => (
  <div className="flex">
    <aside className="md:w-[16%] h-screen"></aside>
    <main className="md:w-[84%] w-full mx-3 px-3 mt-20">
      <UserManagementwork />
    </main>
  </div>
);

const UserManagementwork = () => {
  return (
    <div className="flex flex-col  ml-20  ">
      <h1>This is for the user Management </h1>
    </div>
  );
};

export default UserManagement;
