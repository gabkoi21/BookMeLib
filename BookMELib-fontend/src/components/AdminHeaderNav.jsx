// External Dependencies
import { useState } from "react";
import MobileNav from "./MobileNav";
import Icon from "@mdi/react";
import { mdiMenu, mdiClose, mdiAccountCircle } from "@mdi/js";
import { Button } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";

import useAuthStore from "../stores/authStore";

const AdminHeaderNav = ({ children }) => {
  // State for managing dropdowns and mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [dropNav, setDropNav] = useState(false);

  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  // Handle logout action
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // Toggle handlers for dropdowns and mobile menu
  function toggledrowpdown() {
    setDropNav((prev) => !prev);
  }

  const toggleMenu = () => {
    if (isMenuOpen) {
      setClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setClosing(false);
      }, 300);
    } else {
      setIsMenuOpen(true);
    }
  };

  return (
    <header>
      {/* Main Navigation Bar */}
      <nav className="fixed top-0 left-1/6 right-0 z-50 flex w-[100%] md:w-[82%] lg:w-[80%] lg:flex-wrap lg:py-1 bg-teal-500">
        <div className="flex w-full flex-wrap items-center justify-between md:px-3">
          <div className="flex justify-between w-full items-center">
            {/* Left Side - Branding */}
            <div>
              <a className="text-2xl text-white font-semibold" href="#">
                Admin Dashboard
              </a>
            </div>

            {/* Right Side - Profile and Mobile Menu Toggle */}
            <div className="relative flex items-center">
              {/* Profile Icon */}
              <div className="relative">
                <div className="flex items-center gap-1">
                  {children}
                  <Button
                    onClick={toggledrowpdown}
                    className="p-0 border-none hover:bg-transparent focus:ring-0"
                    aria-label="User Menu"
                  >
                    <Icon path={mdiAccountCircle} size={1.5} />
                  </Button>
                </div>
                {/* Dropdown */}
                {dropNav && (
                  <div className="absolute right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg w-40">
                    <ul className="text-black">
                      <li className="px-4 py-2 text-sm font-semibold text-black">
                        <p className="whitespace-normal font-bold text-base">
                          Admin account
                        </p>
                        <hr />
                      </li>

                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-black">
                        <Link to="/Admindashboard/adminprofile">Profile</Link>
                      </li>

                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-black">
                        <a href="#">Settings</a>
                      </li>

                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-black">
                        <button onClick={handleLogout}>
                          <a href="#">Logout</a>
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Mobile Menu Toggle */}
              <div onClick={toggleMenu} className="cursor-pointer md:hidden">
                <Icon
                  path={isMenuOpen ? mdiClose : mdiMenu}
                  size={1}
                  className="mr-2 text-white"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Conditional Rendering of MobileNav */}
        {isMenuOpen && (
          <div className={`w-full bg-nav ${closing ? "closing" : ""}`}>
            <MobileNav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>
        )}
      </nav>
    </header>
  );
};

export default AdminHeaderNav;
