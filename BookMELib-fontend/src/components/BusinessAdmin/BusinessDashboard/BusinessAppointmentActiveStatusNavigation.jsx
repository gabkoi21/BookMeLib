import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BusinessAppointmentActiveStatusNavigation = ({
  activeTab,
  setActiveTab,
}) => {
  return (
    <>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="bg-gray-100 py-6 px-4 rounded-lg">
          <TabsTrigger value="allappointment">All Appointment</TabsTrigger>
          <TabsTrigger value="calendarview">Calendar View</TabsTrigger>
          {/* <TabsTrigger value="admins">Camcelled</TabsTrigger> */}
        </TabsList>
      </Tabs>
    </>
  );
};

export default BusinessAppointmentActiveStatusNavigation;
