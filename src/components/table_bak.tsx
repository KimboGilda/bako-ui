const CLASS_COL = "font-sans border border-black p-3";
const CLASS_ROW = "font-sans border border-black p-2 hover:bg-blue-200";

interface TableBakProps {
  columns: string[];
  rows: string[];
}

export default function TableBak({ columns, rows }: TableBakProps) {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <table className="w-[500px] border-collapse border border-black">
        <thead>
          <tr>
            {columns.map((c) => (
              <th className={CLASS_COL} scope="col">
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
    </div>
  );
}
