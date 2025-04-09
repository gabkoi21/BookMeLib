// Description: A reusable data table component that accepts columns and data as props and renders a table with the provided data.
// It also allows for custom rendering of rows through a renderRow prop.

const DataTable = ({ columns, data, renderRow }) => {
  return (
    <div className="relative overflow-x-auto rounded-lg mt-5">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400  border-gray-200 dark:border-gray-700">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="px-6 py-4">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800">
          {data.map((item, idx) => renderRow(item, idx))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
