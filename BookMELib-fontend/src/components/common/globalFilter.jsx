import Icon from "@mdi/react";
import { mdiFilterOutline } from "@mdi/js";

const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
  return (
    <>
      <button className="flex items-center gap-2 px-6 py-1 bg-white border rounded text-black capitalize transition">
        <Icon path={mdiFilterOutline} size={0.8} />
        <span className="font-semibold">Filter</span>
      </button>
    </>
  );
};
export default GlobalFilter;
