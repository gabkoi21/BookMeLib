import Icon from "@mdi/react";
import { mdiCalendarCheck, mdiAccountPlus, mdiCheckCircle } from "@mdi/js";

import ComponentAriaChart from "@/components/BusinessAdmin/BusinessDashboard/AppointmentLineChart";
import ComponentServices from "@/components/BusinessAdmin/BusinessDashboard/ServiceDonutChart";
import RecntAppointments from "@/components/BusinessAdmin/BusinessDashboard/RecntAppointment";

const BusinessAdminContainer = () => {
  return (
    <div className="flex">
      <aside className="md:w-[20%] lg:w-[23%] h-screen " />
      <main className="md:w-[98%] w-full mx-3 px-4 mt-20">
        <Dashboard />
        <RecntAppointments />
        <Copyright />
      </main>
    </div>
  );
};

const stats = [
  {
    label: "Total Appointments",
    value: "300",
    icon: mdiCalendarCheck,
    color: "#3B82F6",
  },
  {
    label: "New Clients",
    value: "300",
    icon: mdiAccountPlus,
    color: "#10B981",
  },
  {
    label: "Active Appointments",
    value: "450",
    icon: mdiCalendarCheck,
    color: "#F59E0B",
  },
  {
    label: "Completed Appointments",
    value: "950",
    icon: mdiCheckCircle,
    color: "#4CAF50",
  },
];

const Dashboard = () => {
  return (
    <div className="p-2 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-4">Appointment Trends</h3>
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

const Copyright = () => (
  <div className="ml-5">
    <span style={{ fontSize: "14px", color: "#666", fontWeight: "lighter" }}>
      © 2025 Appointmentguy
    </span>
  </div>
);

export default BusinessAdminContainer;
