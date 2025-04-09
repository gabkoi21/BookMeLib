import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

const GlobalSearchBar = () => {
  return (
    <div className="mt-5 relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon path={mdiMagnify} size={0.8} className="text-gray-500" />
      </div>
      <input
        placeholder="Search business"
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md block w-full pl-10 py-2.5 dark:bg-white dark:border-gray-600 dark:text-white focus:outline-none focus:ring-0"
      />
    </div>
  );
};

export default GlobalSearchBar;
