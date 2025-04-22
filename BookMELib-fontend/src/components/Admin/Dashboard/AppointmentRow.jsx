import React from "react";
import Icon from "@mdi/react";
import { mdiDotsVertical } from "@mdi/js";

const statusColor = {
  Active: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Inactive: "bg-red-100 text-red-700",
};

const AppointmentRow = ({ appointment, isOpen, onToggle, hideTopBorder }) => {
  const {
    customer,
    service,
    ["data&Time"]: dateTime,
    status,
    Business,
  } = appointment;

  return (
    <tr
      className={`hover:bg-gray-50 dark:hover:bg-gray-700 relative ${
        hideTopBorder ? "" : "border-t"
      } border-b`}
    >
      <td className="px-4 py-4 font-medium text-gray-900 dark:text-white">
        {customer}
      </td>
      <td className="px-4 py-4">{Business}</td>
      <td className="px-4 py-4">{service}</td>
      <td className="px-4 py-4">{dateTime || "No Date/Time Provided"}</td>
      <td className="px-4 py-4">
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            statusColor[status] || "bg-gray-200 text-gray-700"
          }`}
        >
          {status}
        </span>
      </td>
      <td className="px-4 py-2 text-right relative">
        <div className="relative inline-block">
          <Icon
            path={mdiDotsVertical}
            size={0.9}
            className="cursor-pointer"
            onClick={onToggle}
          />
          {isOpen && <RowUpdate />}
        </div>
      </td>
    </tr>
  );
};

const RowUpdate = () => (
  <div className="absolute right-10 mt-2 w-64 bg-white rounded-xl shadow-xl z-10 border border-gray-200">
    <div className="px-4 py-3 border-b border-gray-200">
      <p className="text-sm font-semibold text-gray-600">Manage Appointment</p>
      <p className="text-xs text-gray-400 mt-1">
        Choose an action to update this booking.
      </p>
    </div>
    <div className="flex flex-col text-sm">
      <button
        className="px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
        title="Change the date or time of this appointment"
      >
        📅 Reschedule
      </button>
      <button
        className="px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
        title="Mark this appointment as completed, confirmed, or pending"
      >
        🔄 Update Status
      </button>
      <button
        className="px-4 py-2 text-red-600 hover:bg-red-50 w-full text-left"
        title="Permanently cancel this appointment"
      >
        ❌ Cancel Appointment
      </button>
    </div>
  </div>
);

export default AppointmentRow;
