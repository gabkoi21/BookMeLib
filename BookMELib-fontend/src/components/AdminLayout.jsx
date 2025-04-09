import { Outlet } from "react-router-dom";
import { AdminNav } from "../routes/AdminRoutes";
import React from "react";

function AdminLayout() {
  return (
    <div>
      <AdminNav />

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
