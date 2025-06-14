// Main Container Component
const BusinessContainer = () => (
  <div className="flex">
    <aside className="md:w-[20%] lg:w-[23%] h-screen" />
    <main className="md:w-[98%] w-full mx-3 px-3 mt-14">
      <Business />
    </main>
  </div>
);

export default BusinessContainer;

const Business = () => {
  return (
    <div className="flex flex-col  ml-20 mt-10">
      <h1 className="text-xl font-semibold">Business Management</h1>
      <p className="text-gray-500">
        You can manage your business settings here.
      </p>
    </div>
  );
};
