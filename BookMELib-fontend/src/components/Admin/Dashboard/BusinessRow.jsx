//  This component is used to render a single row in the business table
//  It displays the business name, owner, status, registered date, appointments, and an action icon
import Icon from "@mdi/react";
import { mdiDotsVertical } from "@mdi/js";

const statusColor = {
  Active: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Inactive: "bg-red-100 text-red-700",
};

const BusinessRow = ({ business }) => {
  const { businessName, owner, status, registered, appointments } = business;

  return (
    <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
        {businessName}
      </td>
      <td className="px-6 py-4">{owner}</td>
      <td className="px-6 py-4">
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            statusColor[status] || "bg-gray-200 text-gray-700"
          }`}
        >
          {status}
        </span>
      </td>
      <td className="px-6 py-4">{registered}</td>
      <td className="px-6 py-4">{appointments}</td>
      <td className="px-6 py-4 text-right">
        <Icon path={mdiDotsVertical} size={0.9} className="cursor-pointer" />
      </td>
    </tr>
  );
};

export default BusinessRow;
