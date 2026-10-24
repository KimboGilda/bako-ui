import "./App.css";
import TableBak from "./components/table_bak.tsx";
import ButtonBak from "./components/button_bak.tsx";

function App() {
  return (
    <>
      <div className="flex flex-col gap-4 min-h-screen justify-center items-center">
        <TableBak
          columns={["A", "B", "C", "D"]}
          rows={["Nikos", "Danai", "Nefeli", "Cookie"]}
        />
        <ButtonBak variant={"primary"} size={"md"} children={"New"} />
      </div>
    </>
  );
}

export default App;
