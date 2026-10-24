import "./App.css";
import { TableBak, ButtonBak } from "../src";

function App() {
  return (
    <>
      <div className="flex flex-col gap-4 min-h-screen justify-center items-center">
        <TableBak
          columns={["A", "B", "C", "D"]}
          rows={["Nikos", "Danai", "Nefeli", "Cookie"]}
        />
        <ButtonBak
          onClick={() => alert("clicked")}
          variant={"primary"}
          size={"md"}
          children={"New"}
        />
      </div>
    </>
  );
}

export default App;
