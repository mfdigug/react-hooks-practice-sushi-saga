import { useState } from "react";

function Sushi({ sushi, setPlates, setMonies, monies }) {
  
  const { name, img_url, price } = sushi;
  const [isEaten, setIsEaten] = useState(false);

  function handleSushiClick() {
    if (monies-price > 0) {
      setIsEaten(true);
      setPlates((plates) => [...plates, sushi]);
      setMonies((monies) => monies - price);
    } else {
    alert("Not enough monies!");
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleSushiClick}>
        {isEaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
