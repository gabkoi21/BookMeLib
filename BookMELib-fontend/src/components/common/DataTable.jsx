const DataTable = ({ columns, data, renderRow }) => {
  return (
    <div className="overflow-x-auto mt-5 rounded-lg border border-gray-200 dark:border-gray-700">
      <table className="w-full  text-sm text-left text-gray-700 dark:text-gray-300 border-collapse">
        <thead className="bg-gray-100 dark:bg-gray-800 text-xs uppercase ">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-3">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900">
          {data.map((item, idx) => renderRow(item, idx))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
