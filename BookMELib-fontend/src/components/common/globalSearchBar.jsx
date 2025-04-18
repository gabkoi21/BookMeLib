import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

const GlobalSearchBar = ({ children }) => {
  return (
    <div className="mt-5 relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon path={mdiMagnify} size={0.8} className="text-gray-500" />
      </div>
      {children}
    </div>
  );
};

export default GlobalSearchBar;
