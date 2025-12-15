import { useState } from "react";

function Sushi({ sushi }) {
  
  const { name, img_url, price } = sushi;

  const [isEaten, setIsEaten] = useState(false);

  function handleSushiClick() {
    setIsEaten(true);
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
