// Description: This component renders a single row in the user table of the admin dashboard.
// It displays the user's name, email, role, joined date, status, and an action icon.
// It also applies different styles based on the user's status.

import Icon from "@mdi/react";
import { mdiDotsVertical } from "@mdi/js";

const statusColor = {
  Active: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Inactive: "bg-red-100 text-red-700",
};

const UserRow = ({ user }) => {
  const { name, email, role, joined, status, business } = user;

  return (
    <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
      <td className="px-4 py-2 font-medium text-gray-900 dark:text-white">
        {name}
      </td>
      <td className="px-4 py-4">{email}</td>
      <td className="px-4 py-4">{business}</td>
      <td className="px-4 py-4 whitespace-nowrap">{role}</td>
      <td className="px-4 py-2 whitespace-nowrap">{joined}</td>
      <td className="px-4 py-2">
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            statusColor[status] || "bg-gray-200 text-gray-700"
          }`}
        >
          {status}
        </span>
      </td>
      <td className="px-4 py-2 text-right">
        <Icon path={mdiDotsVertical} size={0.9} className="cursor-pointer" />
      </td>
    </tr>
  );
};

export default UserRow;
