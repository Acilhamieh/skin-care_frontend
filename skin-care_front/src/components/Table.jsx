export default function Table({ columns, data, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-700 bg-white border">
        <thead className="bg-gray-100 text-xs uppercase text-gray-600">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-3">{col.header}</th>
            ))}
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length + 1} className="text-center p-4 text-gray-500">
                No data available.
              </td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 border-b">
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-2">
                    {col.render ? col.render(item) : item[col.key]}
                  </td>
                ))}
                <td className="px-4 py-2 flex gap-2">
                  <button onClick={() => onEdit(item)} className="text-blue-600 hover:underline">
                    Edit
                  </button>
                  <button onClick={() => onDelete(item.id)} className="text-red-600 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
