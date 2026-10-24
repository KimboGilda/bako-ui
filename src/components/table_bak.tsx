const CLASS_COL =
  "px-3 py-2 text-center text-xs font-semibold text-gray-600 bg-gray-100 border border-gray-200";

const CLASS_ROW =
  "px-3 py-2 text-sm text-gray-700 border border-gray-200 hover:bg-slate-50 transition-colors";

export interface TableBakProps {
  columns: string[];
  rows: string[];
}

export default function TableBak({ columns, rows }: TableBakProps) {
  return (
    <table className="w-[500px] border-collapse border border-black">
      <thead>
        <tr>
          {columns.map((c) => (
            <th key={c} className={CLASS_COL} scope="col">
              {c}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {rows.map((r) => (
            <th className={CLASS_ROW} scope="row">
              {r}
            </th>
          ))}
        </tr>
      </tbody>
    </table>
  );
}
