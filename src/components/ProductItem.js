import React from "react";

function ProductItem({ image, name, price }) {
  return (
    <div className="productItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> €{price} </p>
    </div>
  );
}

export default ProductItem;