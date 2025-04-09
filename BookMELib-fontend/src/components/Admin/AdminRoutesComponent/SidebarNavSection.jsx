// components/AdminComponent/SidebarDropdown.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const SidebarBusinessDropdown = ({ parentTo, subItems }) => {
  return (
    <ul className="mt-2 ml-6">
      {subItems.map((subItem) => (
        <li key={subItem.to} className="mb-2">
          <NavLink
            to={`${parentTo}/${subItem.to}`}
            className={({ isActive }) =>
              `block p-1 pl-3 ${
                isActive
                  ? "text-green-950 bg-gray-200 border-l-4 border-green-500"
                  : "text-black"
              }`
            }
            aria-label={subItem.ariaLabel}
          >
            {subItem.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default SidebarBusinessDropdown;
