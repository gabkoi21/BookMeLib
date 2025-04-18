import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import TableBottomNavigation from "@/components/common/TableBottomNivigation";
// import { useState } from "react";

const UserActiveStatusNavigation = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="bg-gray-100 py-6 px-4 rounded-lg">
          <TabsTrigger value="alluser">All User</TabsTrigger>
          <TabsTrigger value="customer">Customers</TabsTrigger>
          <TabsTrigger value="businessowners">Business Owners</TabsTrigger>
          <TabsTrigger value="admins">Admins</TabsTrigger>
        </TabsList>
      </Tabs>
      {/* <TableBottomNavigation /> */}
    </>
  );
};

export default UserActiveStatusNavigation;
