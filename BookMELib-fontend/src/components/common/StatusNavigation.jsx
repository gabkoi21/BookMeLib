import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import TableBottomNavigation from "@/components/common/TableBottomNivigation";
import { useState } from "react";

const ActiveStatusNavigation = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="bg-gray-100 py-6 px-4 rounded-lg">
          <TabsTrigger value="allbusiness">All Business</TabsTrigger>
          <TabsTrigger value="pendingapproved">Pending Approved</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="suspend">Suspend</TabsTrigger>
        </TabsList>
      </Tabs>
      {/* <TableBottomNavigation /> */}
    </>
  );
};

export default ActiveStatusNavigation;
