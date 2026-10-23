import "./App.css";
import TableBak from "./components/table_bak.tsx";

function App() {
  return (
    <>
      <TableBak columns={["A", "B", "C"]} rows={["Nikos", "Danai", "Nefeli"]} />
    </>
  );
}

export default App;
