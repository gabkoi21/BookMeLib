import {
  mdiViewDashboard,
  mdiAccountGroup,
  mdiCalendarCheck,
  mdiCog,
} from "@mdi/js";

// Navigation configuration with dropdown for Business Management
export const NAV_ITEMS = [
  {
    to: "dashboard",
    label: "Dashboard",
    icon: mdiViewDashboard,
    ariaLabel: "Dashboard",
  },

  {
    to: "appointment",
    label: "Appointments",
    icon: mdiCalendarCheck,
    ariaLabel: "Appointments",
  },

  // {
  //   to: "user",
  //   label: "Staff Management",
  //   icon: mdiAccountGroup,
  //   ariaLabel: "User Management",
  // },
  {
    to: "settings",
    label: "Settings",
    icon: mdiCog,
    ariaLabel: "Settings",
  },
];
