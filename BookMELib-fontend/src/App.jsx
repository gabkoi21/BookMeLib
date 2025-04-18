import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import React from "react";
import Login from "./components/Login";

// This is for the Admin Routes
import AdminLayout from "./components/AdminLayout";
import Admindashboard from "./Pages/Admin/AdminDashBoard";
import BusinessManagement from "./Pages/Admin/business";
import AllBusiness from "./Pages/Admin/AllBusiness";
import Appointments from "./Pages/Admin/Appointment";
import Settings from "./Pages/Admin/setting";
import UserManagement from "./Pages/Admin/UserManagement";
import AdminProfile from "./Pages/Admin/AdminProfile";

// These are the pages for the for Business Admin
import BusinessAdminLayout from "./components/BusinessAdminlayout";
import Dashboard from "./Pages/BusinessAdmin/Dashboard";
import Appointment from "./Pages/BusinessAdmin/Appointment";
import AssignedPickup from "./Pages/BusinessAdmin/Stafff";

// These are the pages for the user end
import UserLayout from "./components/UserLayout";
import MyRequest from "./Pages/User/MyRequest";
import Notification from "./Pages/User/Notification";
import Profile from "./Pages/User/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />

        {/* Admin Routes */}
        <Route path="Admindashboard" element={<AdminLayout />}>
          <Route index element={<Navigate to="Admindashboard" />} />
          {/* This is the navigation for the  drop down naivgation for the business */}
          <Route path="business" element={<Outlet />}>
            <Route index element={<BusinessManagement />} />
            <Route index element={<Navigate to="allbusiness" />} />
            <Route path="allbusiness" element={<AllBusiness />} />
          </Route>

          <Route path="Admindashboard" element={<Admindashboard />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="settings" element={<Settings />} />
          <Route path="user" element={<UserManagement />} />
          <Route path="adminprofile" element={<AdminProfile />} />
        </Route>

        {/* This is the the nested routes for the  Busnesss Admin  board */}
        <Route path="Driversboard" element={<BusinessAdminLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="assignedpickup" element={<AssignedPickup />} />
        </Route>

        {/* This is the the nested routes for the  User  board */}
        <Route path="Userdashboard" element={<UserLayout />}>
          <Route index element={<Navigate to="requests" />} />
          <Route path="requests" element={<MyRequest />} />
          <Route path="notification" element={<Notification />} />
          <Route path="userprofile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
