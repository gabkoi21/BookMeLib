const ActiveStatusNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = ["All Business", "Pending Approved", "Active", "Suspend"];

  return (
    <div className="flex items-center bg-gray-100 text-black rounded-lg py-1 px-2 gap-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-1 rounded font-medium transition duration-200 ${
            activeTab === tab
              ? "bg-white text-black"
              : "bg-transparent text-gray-600"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default ActiveStatusNavigation;
