import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import React from "react";
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";
import ProtectedRoute from "./components/ProtectedRoutes";

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
        <Route path="register" element={<Register />} />

        {/* Admin Routes */}
        <Route
          path="Admindashboard"
          element={
            <ProtectedRoute allowedTypes={["super_admin"]}>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="Admindashboard" />} />
          <Route path="business" element={<Outlet />}>
            <Route index element={<Navigate to="allbusiness" />} />
            <Route path="allbusiness" element={<AllBusiness />} />
          </Route>
          <Route path="Admindashboard" element={<Admindashboard />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="settings" element={<Settings />} />
          <Route path="user" element={<UserManagement />} />
          <Route path="adminprofile" element={<AdminProfile />} />
        </Route>

        <Route
          path="bussinessadminboard"
          element={
            <ProtectedRoute allowedTypes={["business_admin"]}>
              <BusinessAdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="appointment" element={<Appointment />} />
        </Route>

        <Route
          path="userdashboard"
          element={
            <ProtectedRoute allowedTypes={["customer"]}>
              <UserLayout />
            </ProtectedRoute>
          }
        >
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
