// components/AdminComponent/SidebarNavDropdown.jsx
import React, { useState } from "react";
import { mdiChevronDown, mdiChevronUp } from "@mdi/js";
import Icon from "@mdi/react";
import BusinessSidebarDropdown from "./BusinessSideBarNavDropdown";

const SidebarNavDropdown = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="flex items-center p-0 cursor-pointer lg:px-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={item.ariaLabel}
      >
        <Icon
          path={item.icon}
          size={0.8}
          title={item.label}
          className="mr-2 inline-block"
        />
        <span>{item.label}</span>
        <Icon
          path={isOpen ? mdiChevronUp : mdiChevronDown}
          size={0.8}
          className="ml-2"
        />
      </div>

      {isOpen && (
        <BusinessSidebarDropdown parentTo={item.to} subItems={item.subItems} />
      )}
    </>
  );
};

export default SidebarNavDropdown;
