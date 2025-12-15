import { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, setPlates, monies, setMonies }) {
  const [i, setI] = useState(0);
  
  function onHandleMoreSushiClick() {
    setI(i + 4)
  }

  return (
    <div className="belt">
      {sushis.slice(i, i+4).map((sushi) => {
        return (
        <Sushi key={sushi.id} sushi={sushi} setPlates={setPlates} monies={monies} setMonies={setMonies} />  
        )
      })}
      <MoreButton onHandleMoreSushiClick={onHandleMoreSushiClick}/>
    </div>
  );
}

export default SushiContainer;
