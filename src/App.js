import "./App.css";
import Graph from "./Components/Graph";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8080/api/data")
      .then((response) => response.json())
      .then((result) => setData(result));
  }, []);
  return <Graph data={data} />;
}

export default App;
