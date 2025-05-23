import Icon from "@mdi/react";
import {
  mdiFileEdit,
  mdiAccountOff,
  mdiAccountCheck,
  mdiTrashCanOutline,
} from "@mdi/js";

const statusColor = {
  Active: "bg-green-100 text-green-700",
  // Pending: "bg-yellow-100 text-yellow-700",
  Inactive: "bg-red-100 text-red-700",
};

const AppointmentRow = ({ appointment, services }) => {
  const {
    user: { first_name, last_name } = {},
    date_time,
    status,
    service_id,
  } = appointment || {};

  // 🔍 Find service name from the list
  const serviceName =
    services.find((service) => service.id === service_id)?.name ||
    "Service Not Found";

  return (
    <tr className="bonprder-b hover:bg-gray-50 dark:hover:bg-gray-700 relative">
      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
        {`${first_name || ""} ${last_name || ""}`}
      </td>
      <td className="px-6 py-4 capitalize">{serviceName}</td>
      <td className="px-6 py-4">{new Date(date_time).toLocaleString()}</td>
      <td className="px-6 py-4">
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            statusColor[status] || "bg-gray-200 text-gray-700"
          }`}
        >
          {status}
        </span>
      </td>
      <td className="px-6 py-4">
        <AppointmentAction />
      </td>
    </tr>
  );
};

export default AppointmentRow;

const AppointmentAction = () => {
  return (
    <div className="flex justify-end items-center space-x-2">
      {/* Edit Button */}
      <button
        className="text-gray-600 hover:text-blue-600 p-1"
        onClick={() => {
          console.log("Edit clicked for", id);
        }}
      >
        <Icon path={mdiFileEdit} size={0.9} />
      </button>

      {/* Suspend / Activate Button */}
      {status === "Active" ? (
        <button className="text-gray-600 hover:text-yellow-600 p-1">
          <Icon path={mdiAccountOff} size={0.9} />
        </button>
      ) : (
        <button
          className="text-gray-600 hover:text-green-600 p-1"
          onClick={() => {
            console.log("Activate clicked for", id);
          }}
        >
          <Icon path={mdiAccountCheck} size={0.9} />
        </button>
      )}

      {/* Delete Button */}
      <button
        className="hover:text-red-600 text-red-500 p-1"
        onClick={() => setIsOpen(true)}
      >
        <Icon path={mdiTrashCanOutline} size={0.9} />
      </button>
    </div>
  );
};
