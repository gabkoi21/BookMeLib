import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiCrown, mdiBellOutline } from "@mdi/js";
import AdminHeaderNav from "../components/AdminHeaderNav";
import SidebarNavLink from "../components/Admin/AdminRoutes/SidebarNavLink";
import SidebarBusinessDropdown from "../components/Admin/AdminRoutes/BusinessSideBarNavDropdown";
import SidebarNavDropdown from "../components/Admin/AdminRoutes/SidebarSubMenu.jsx";
import { NAV_ITEMS } from "../components/BusinessAdmin/BusinessRoutes/BusinessNavItems";
import { Link } from "react-router";

const BusinessAdminNav = () => {
  // State to track dropdown open state for Business nav
  const [showBusinessDropdown, setShowBusinessDropdown] = useState(false);

  return (
    <header>
      <AdminHeaderNav>
        <div className="relative">
          <Icon path={mdiBellOutline} size={1} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            5
          </span>
        </div>
      </AdminHeaderNav>
      <nav className="fixed top-0 left-0 right-2 h-full w-[20%] bg-gray-100 overflow-y-auto z-10">
        <div className="lg:mt-2 ml-4 mb-5 flex items-center space-x-2">
          <Link to={"dashboard"} className="flex gap-2">
            <Icon className="mt-4" path={mdiCrown} size={1} />
            <h3 className="text-2xl mt-3 font-semibold">Elite Salon</h3>
          </Link>
        </div>

        <hr className="mb-4" />

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

export default BusinessAdminNav;
