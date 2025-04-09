import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiViewDashboard } from "@mdi/js";
import AdminHeaderNav from "../components/AdminHeaderNav";
import { NAV_ITEMS } from "../components/Admin/AdminRoutesComponent/NavItems";
import SidebarNavLink from "../components/Admin/AdminRoutesComponent/SidebarNavLink";
import SidebarBusinessDropdown from "../components/Admin/AdminRoutesComponent/SidebarNavSection";
import SidebarNavDropdown from "../components/Admin/AdminRoutesComponent/SidebarSubMenu.jsx";

export const AdminNav = () => {
  // State to track dropdown open state for Business nav
  const [showBusinessDropdown, setShowBusinessDropdown] = useState(false);

  return (
    <header>
      <AdminHeaderNav />
      {/* Main Navigation Sidebar */}
      <nav className="fixed top-0 left-0 right-2 h-full w-[20%] bg-gray-100 overflow-y-auto z-10">
        <div className="lg:mt-2 ml-4 mb-5 flex items-center space-x-2">
          <Icon className="mt-4" path={mdiViewDashboard} size={1} />
          <h3 className="text-2xl mt-3 font-semibold">BookingAdmin</h3>
        </div>
        <hr className="mb-4" />
        {/* Navigation Links */}

        <div className="block w-full px-3">
          <ul className="list-style-none me-auto flex flex-col ps-0 lg:mt-1 font-roboto whitespace-nowrap">
            {NAV_ITEMS.map((item) => (
              <li key={item.to} className="mb-4 ps-2 lg:mb-8 lg:pe-1 lg:ps-0">
                {item.subItems ? (
                  <>
                    <div>
                      {/* Render SidebarNavDropdown for items with subItems */}
                      <SidebarNavDropdown
                        item={item}
                        onClick={() =>
                          setShowBusinessDropdown(!showBusinessDropdown)
                        }
                      />
                    </div>
                    {/* Render dropdown items if the parent item has subItems */}
                    {showBusinessDropdown && (
                      <SidebarBusinessDropdown
                        parentTo={item.to}
                        subItems={item.subItems}
                      />
                    )}
                  </>
                ) : (
                  // Render regular NavLink for non-dropdown items
                  <SidebarNavLink
                    to={item.to}
                    icon={item.icon}
                    label={item.label}
                    ariaLabel={item.ariaLabel}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
