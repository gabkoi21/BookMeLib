import dayjs from "dayjs";
import Icon from "@mdi/react";
import {
  mdiSquareEditOutline,
  mdiAccountOff,
  mdiTrashCanOutline,
} from "@mdi/js";

import BusinessAction from "./BusinessAction";

const statusColor = {
  Active: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Inactive: "bg-red-100 text-red-700",
};

const BusinessRow = ({ business, appointments }) => {
  const { id, name, status, timestamp, users = [] } = business || {};
  const admin = users.find((user) => user.user_type === "business_admin");

  // Filter appointments for the current business
  const appointmentCount =
    appointments?.filter((apt) => apt.business_id === id).length || 0;

  return (
    <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
      <td className="px-4 py-2 font-medium text-gray-900 dark:text-white">
        {name || "N/A"}
      </td>
      <td className="px-4 py-2">
        {admin ? `${admin.first_name} ${admin.last_name}` : "N/A"}
      </td>
      <td className="px-4 py-4">
        {timestamp ? dayjs(timestamp).format("MMM DD, YYYY") : "N/A"}
      </td>
      <td className="px-14 py-2">{appointmentCount}</td>
      <td className="px-4 py-2">
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            statusColor[status] || "bg-gray-200 text-gray-700"
          }`}
        >
          {status || "Unknown"}
        </span>
      </td>{" "}
      <td className=" py-2">
        <BusinessAction business={business} />
      </td>
    </tr>
  );
};

export default BusinessRow;
