import { useState } from "react";
import AppointmentCard from "@/components/AppointmentCard";

const RecntAppointments = () => {
  const [tab, setTab] = useState("Upcoming");

  const appointments = [
    {
      name: "John Smith",
      service: "Haircut",
      time: "Today, 10:00 AM",
      status: "Confirmed",
    },
    {
      name: "Sarah Johnson",
      service: "Hair Coloring",
      time: "Today, 11:30 AM",
      status: "Confirmed",
    },
    {
      name: "Michael Brown",
      service: "Beard Trim",
      time: "Today, 1:00 PM",
      status: "Pending",
    },
    {
      name: "Emily Davis",
      service: "Manicure",
      time: "Today, 2:30 PM",
      status: "Confirmed",
    },
    {
      name: "Robert Wilson",
      service: "Facial",
      time: "Today, 4:00 PM",
      status: "Pending",
    },
  ];

  return (
    <div className="p-6 w-[97%] mx-auto border mb-10 rounded-md">
      <h2 className="text-2xl font-semibold mb-1">Recent Appointments</h2>
      <p className="text-sm text-gray-500 mb-4">
        Manage your upcoming and recent appointments
      </p>

      <div className="flex space-x-2 mb-6">
        {["Upcoming", "Recent"].map((label) => (
          <button
            key={label}
            onClick={() => setTab(label)}
            className={`px-4 py-1 rounded-md text-sm font-medium ${
              tab === label
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {appointments.map((item, idx) => (
          <AppointmentCard key={idx} {...item} />
        ))}
      </div>

      <div className="text-center mt-6 border py-2 rounded ">
        <button className="text-sm font-semibold text-black hover:underline">
          View all appointments
        </button>
        <span className="ml-2">↗</span>
      </div>
    </div>
  );
};

export default RecntAppointments;
