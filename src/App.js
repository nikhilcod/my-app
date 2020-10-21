import React from "react";
import "./App.css";
// import data from "./functional/data";
// import Table from "./functional/table";
import data from "./class/data";
import Table from "./class/table";

function App() {
  return (
    <div className="App">
      <Table data={data} />
    </div>
  );
}

export default App;
