type ColumnProp = {
  key: string;
  header: string;
};

type DataTableProps = {
  data: Record<string, any>[];
  columns: ColumnProp[];
};

export default function DataTable({ data, columns }: DataTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          {columns.map(column => (
            <tr className="bg-gray-100" key={column.key}>
              <th className="border p-2">{column.header}</th>
            </tr>
          ))}
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
