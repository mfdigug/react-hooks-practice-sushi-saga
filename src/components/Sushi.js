import React from "react";

function Sushi({ sushi }) {
  
  const { id, name, img_url, price } = sushi;

  function handleSushiClick(id) {
    console.log("Sushi clicked:", id);
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={() => {handleSushiClick(id)}}>
        {/* Tell me if this sushi has been eaten! */}
        {false ? null : (
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
