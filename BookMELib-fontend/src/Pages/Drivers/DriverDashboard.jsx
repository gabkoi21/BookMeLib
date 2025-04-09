import { subDays, subHours, subMinutes } from "date-fns";
import Icon from "@mdi/react";
import { mdiShopping, mdiCart, mdiCurrencyUsd } from "@mdi/js"; // Import MDI icons

const now = new Date();

const DriverManagementContainer = () => (
  <div className="flex">
    <aside className="md:w-[20%] lg:w-[23%] h-screen bg-gray-100" />
    <main className="md:w-[98%] w-full mx-3 px-3 mt-20">
      <Page />
    </main>
  </div>
);

const Page = () => {
  const customers = [
    {
      id: "a105ac46530704806ca58ede",
      amountSpent: 684.45,
      avatar: "/assets/avatars/avatar-fabiano-jorioz.jpg",
      createdAt: subDays(subHours(subMinutes(now, 7), 3), 2).getTime(),
      isOnboarded: true,
      name: "Fabiano Jorioz",
      orders: 2,
    },
    {
      id: "126ed71fc9cbfabc601c56c5",
      amountSpent: 0,
      avatar: "/assets/avatars/avatar-meggie-heinonen.jpg",
      createdAt: subDays(subHours(subMinutes(now, 7), 3), 2).getTime(),
      isOnboarded: false,
      name: "Meggie Heinonen",
      orders: 0,
    },
  ];

  return (
    <div className="flex-grow py-8">
      <div className="max-w-screen-xl mx-auto p-3">
        <div className="space-y-6">
          <h1 className="text-2xl font-semibold">Driver Reports </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 whitespace-nowrap ">
            <OverviewSummary
              icon={
                <Icon path={mdiShopping} size={0.9} className="text-white" />
              }
              label="Total Pickups "
              value="5610"
            />
            <OverviewSummary
              icon={<Icon path={mdiCart} size={0.9} className="text-white" />}
              label="Pending Pickup Requests"
              value="23"
            />
            <OverviewSummary
              icon={
                <Icon path={mdiCurrencyUsd} size={0.9} className="text-white" />
              }
              label="Transactions"
              value="1942"
            />
          </div>
          <OverviewLatestCustomers customers={customers} />
        </div>
      </div>
    </div>
  );
};

const OverviewSummary = ({ icon, label, value }) => (
  <div className="p-6 bg-white shadow-md rounded-lg flex items-center space-x-4">
    <div className="bg-green-900 p-4 rounded-full">{icon}</div>
    <div>
      <p className="text-lg font-semibold">{label}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  </div>
);

const OverviewLatestCustomers = ({ customers }) => (
  <div className="bg-white shadow-md p-6 rounded-lg">
    <h2 className="text-xl font-semibold mb-4">Latest Customers</h2>
    <ul className="space-y-4">
      {customers.map((customer) => (
        <li key={customer.id} className="flex items-center space-x-4">
          <img
            src={customer.avatar}
            alt={customer.name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="font-semibold">{customer.name}</p>
            <p className="text-sm text-gray-500">Orders: {customer.orders}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default DriverManagementContainer;
