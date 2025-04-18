import ApppintmentContainer from "../../components/BusinessAdmin/BusinessDashboard/BusinessAppointmentList";
import Icon from "@mdi/react";
import {
  mdiCalendarMonth,
  mdiCheckCircle,
  mdiCancel,
  mdiCalendarPlus,
} from "@mdi/js";

const BusinessAppointmentContainer = () => (
  <div className="flex">
    <aside className="md:w-[20%] lg:w-[23%] h-screen bg-gray-100" />
    <main className="md:w-[98%] w-full mx-3 px-4 mt-20">
      <AppointmentInforHeader />
      <DashboardOverview />
      <ApppintmentContainer />
    </main>
  </div>
);

// --- Header Section ---
const AppointmentInforHeader = () => {
  return (
    <div className="space-y-2 relative">
      <h1 className="text-2xl font-bold">Appointments Overview</h1>
      <div className="flex justify-between items-center relative">
        <h4 className="text-gray-700">
          Manage and monitor all appointments across the platform.
        </h4>
      </div>
    </div>
  );
};

// --- Dashboard Stats Section ---
const stats = [
  {
    label: "Today Appointments",
    value: "1.2k",
    change: "+5%",
    icon: mdiCalendarPlus,
    color: "#3B82F6",
  },
  {
    label: "Completed Today",
    value: "300",
    change: "+10%",
    icon: mdiCheckCircle,
    color: "#10B981",
  },

  {
    label: "Cancellations Today",
    value: "15",
    change: "+1%",
    icon: mdiCancel,
    color: "#EF4444",
  },
  {
    label: "Upcoming (7 days)",
    value: "12",
    change: "-2%",
    icon: mdiCalendarMonth,
    color: "#F59E0B",
  },
];

const DashboardOverview = () => {
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

export default BusinessAppointmentContainer;
