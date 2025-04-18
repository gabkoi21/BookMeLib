import React from "react";

const AppointmentCard = ({ name, service, time, status }) => {
  return (
    <div className="p-4 border rounded-md shadow-sm">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">{service}</p>
      <p className="text-sm text-gray-400">{time}</p>
      <span
        className={`text-sm font-medium ${
          status === "Confirmed" ? "text-green-500" : "text-yellow-500"
        }`}
      >
        {status}
      </span>
    </div>
  );
};

export default AppointmentCard;
