import {
  mdiViewDashboard,
  mdiOfficeBuilding,
  mdiAccountGroup,
  mdiCalendarCheck,
  mdiCog,
} from "@mdi/js";

// Navigation configuration with dropdown for Business Management
export const NAV_ITEMS = [
  {
    to: "Admindashboard",
    label: "Dashboard",
    icon: mdiViewDashboard,
    ariaLabel: "Dashboard",
  },
  {
    to: "business",
    label: "Business Management",
    icon: mdiOfficeBuilding,
    ariaLabel: "Business Management",
    subItems: [
      {
        to: "allbusiness",
        label: "All Business",
        ariaLabel: "All Business",
      },
      {
        to: "active",
        label: "Active Businesses",
        ariaLabel: "Active Businesses",
      },
      // Add more sub-items as needed...
    ],
  },
  {
    to: "user",
    label: "User Management",
    icon: mdiAccountGroup,
    ariaLabel: "User Management",
  },
  {
    to: "appointments",
    label: "Appointments",
    icon: mdiCalendarCheck,
    ariaLabel: "Appointments",
  },
  {
    to: "settings",
    label: "Settings",
    icon: mdiCog,
    ariaLabel: "Settings",
  },
];
