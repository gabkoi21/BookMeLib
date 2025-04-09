import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import React from "react";
import Login from "./components/Login";
import AdminLayout from "./components/AdminLayout";
import Admindashboard from "./Pages/Admin/AdminDashBoard";
import BusinessManagement from "./Pages/Admin/business";
import AllBusiness from "./Pages/Admin/AllBusiness";
import Appointments from "./Pages/Admin/Appointment";
import Settings from "./Pages/Admin/setting";
import UserManagement from "./Pages/Admin/UserManagement";
import AdminProfile from "./Pages/Admin/AdminProfile";

// These are the pages for the user end
import UserLayout from "./components/UserLayout";
import MyRequest from "./Pages/User/MyRequest";
import Notification from "./Pages/User/Notification";
import Profile from "./Pages/User/Profile";

// These are the pages for the Driver
import DriversLayout from "./components/DriverLayout";
import Dashboard from "./Pages/Drivers/DriverDashboard";
import Notifications from "./Pages/Drivers/Notifications";
import AssignedPickup from "./Pages/Drivers/AssignedPickup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />

        {/* Admin Routes */}
        <Route path="Admindashboard" element={<AdminLayout />}>
          <Route path="business" element={<Outlet />}>
            <Route index element={<BusinessManagement />} />
            <Route path="allbusiness" element={<AllBusiness />} />
          </Route>
          <Route path="Admindashboard" element={<Admindashboard />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="settings" element={<Settings />} />
          <Route path="user" element={<UserManagement />} />
          <Route path="adminprofile" element={<AdminProfile />} />
        </Route>

        {/* This is the the nested routes for the  User  board */}
        <Route path="Userdashboard" element={<UserLayout />}>
          <Route index element={<Navigate to="requests" />} />
          <Route path="requests" element={<MyRequest />} />
          <Route path="notification" element={<Notification />} />
          <Route path="userprofile" element={<Profile />} />
        </Route>

        {/* This is the the nested routes for the  Driver  board */}
        <Route path="Driversboard" element={<DriversLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="notification" element={<Notifications />} />
          <Route path="assignedpickup" element={<AssignedPickup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
