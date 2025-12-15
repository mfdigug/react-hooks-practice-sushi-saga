import { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushis, setSushis] = useState([]);
  const [plates, setPlates] = useState([]);
  const [monies, setMonies] = useState(100);


  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(data => setSushis(data))
}, [])

  return (
    <div className="app">
      <SushiContainer sushis={sushis} setPlates={setPlates} monies={monies} setMonies={setMonies}/>
      <Table plates={plates} monies={monies}/>
    </div>
  );
}

export default App;
