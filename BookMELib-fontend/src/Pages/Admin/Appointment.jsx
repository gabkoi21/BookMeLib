import { useState } from "react";
import Icon from "@mdi/react";
import { notifications } from "../../data/Notification";
import { mdiCheck, mdiClose, mdiSend, mdiBell } from "@mdi/js";
import React from "react";

// Mock notification data

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
  return (
    <div>
      <h1 className="text-2xl font-semibold">Appointments</h1>
      <div className="flex flex-col  ml-20 mt-10">
        <h1 className="text-xl font-semibold">This is for the appointments</h1>
        <p className="text-gray-500">
          You can manage your account settings here.
        </p>
      </div>
    </div>
  );
};
