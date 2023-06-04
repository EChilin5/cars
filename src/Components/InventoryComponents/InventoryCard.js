import React from "react";
import tacomaImage from "../../Images/toyotatacoma.PNG";
import "./InventoryCard.css";

const InventoryCard = () => {
  return (
    <div className="inventory-card-container">
      <div className="inventory-card-photo">
        <img src={tacomaImage} alt="toyota" />
      </div>
      <div>$52,320 as shown*</div>
      <div>
        <h2>Toyota Crown</h2>
      </div>
      <div className="inventory-card-content">
        <div className="inventory-car-item">
          <div>$39,950</div>
          <div>Starting MSRP</div>
        </div>
        <div className="inventory-car-item">
          <div>42/41</div>
          <div>MPG*/MPGe*</div>
        </div>
      </div>
    </div>
  );
};

export default InventoryCard;
