import {
  mdiAccountGroup,
  mdiCalendarCheck,
  mdiDomain,
  mdiCalendarClock,
} from "@mdi/js";
import Icon from "@mdi/react";
import TableBottomNavigation from "@/components/common/TableBottomNivigation";
import ComponentAriaChart from "@/components/BusinessAdmin/BusinessDashboard/AppointmentLineChart";
import ComponentServices from "@/components/BusinessAdmin/BusinessDashboard/ServiceDonutChart";

// Root container for the admin dashboard
// It contains the sidebar and the main content area
const AdmindasboardhContainer = () => (
  <div className="flex">
    <aside className="md:w-[20%] lg:w-[23%] h-screen bg-gray-100 dark:bg-gray-800" />
    <main className="md:w-[98%] w-full mx-3 px-3 mt-14">
      <AdminDashboard />
    </main>
  </div>
);

// This component is used to render the admin dashboard
// It displays a data table with business information
const AdminDashboard = () => {
  return (
    <>
      <DashboardHeader />
      <ExampleDashboard />
      <TableBottomNavigation />
    </>
  );
};

export default AdmindasboardhContainer;

const stats = [
  {
    label: "Users",
    value: "350",
    icon: mdiAccountGroup,
    color: "#F59E0B",
  },
  {
    label: "Total Appointments",
    value: "500",
    icon: mdiCalendarCheck,
    color: "#3B82F6",
  },
  {
    label: "Total Business",
    value: "300",
    icon: mdiDomain,
    color: "#10B981",
  },
  {
    label: "Upcoming Appointments",
    value: "15",
    icon: mdiCalendarClock,
    color: "#3B82F6",
  },
];

const DashboardHeader = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-md transition hover:shadow-lg"
        >
          <div
            className="p-3 rounded-full"
            style={{ backgroundColor: `${stat.color}1A` }}
          >
            <Icon path={stat.icon} size={1.5} color={stat.color} />
          </div>

          <div className="space-y-1">
            <p className="text-sm text-gray-500">{stat.label}</p>
            <h2 className="text-2xl font-bold text-gray-800">{stat.value}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

const ExampleDashboard = () => {
  return (
    <div className="p-2 space-y-6 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-4">Appointments This Week</h3>
          <ComponentAriaChart />
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-4">Visitors Overview</h3>
          <ComponentServices />
        </div>
      </div>
    </div>
  );
};
