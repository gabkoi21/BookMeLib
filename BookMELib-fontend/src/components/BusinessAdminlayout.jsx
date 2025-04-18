import { Outlet } from "react-router-dom";
import BusinessAdminNav from "../routes/BusinessAdminRoutes";

const BusinessAdminLayout = () => {
  return (
    <div>
      <BusinessAdminNav />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default BusinessAdminLayout;
