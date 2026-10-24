import "./App.css";
import TableBak from "./components/table_bak.tsx";

function App() {
  return (
    <>
      <TableBak
        columns={["A", "B", "C", "D"]}
        rows={["Nikos", "Danai", "Nefeli", "Cookie"]}
      />
    </>
  );
}

export default App;
