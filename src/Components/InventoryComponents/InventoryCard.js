import React from "react";
import tacomaImage from "../../Images/toyotatacoma.PNG";
import "./InventoryCard.css";

const InventoryCard = (props) => {
  let car = props.carData;
  return (
    <div className="inventory-card-container">
      <div className="inventory-card-photo">
        <img src={car.image} alt="toyota" />
      </div>
      <div>{car.price} as shown*</div>
      <div>
        <h2>{car.name}</h2>
      </div>
      <div className="inventory-card-content">
        <div className="inventory-car-item">
          <div>{car.price}</div>
          <div>Starting MSRP</div>
        </div>
        <div className="inventory-car-item">
          <div>{car.mpg}</div>
          <div>MPG*/MPGe*</div>
        </div>
      </div>
    </div>
  );
};

export default InventoryCard;
