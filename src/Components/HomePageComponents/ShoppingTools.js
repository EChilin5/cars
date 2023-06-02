import React from "react";
import price from "../../Images/build_price.PNG";
import dealer from "../../Images/find_dealer.PNG";
import inventory from "../../Images/search_inventory.PNG";
import money from "../../Images/manage_money.PNG";
//import tacomaImage from "../../Images/toyotatacoma.PNG";
import "./ShoppingTools.css";

const ShoppingTools = () => {
  return (
    <div>
      <div className="shopping-tools-container">
        <div className="shopping-tools-item">
          <img src={price} alt="price" />
          <br />
          Build Price
        </div>
        <div className="shopping-tools-item">
          <img src={dealer} alt="" />
          <br />
          Find Dealer
        </div>
        <div className="shopping-tools-item">
          <img src={inventory} alt="" />
          <br />
          Search Inventory
        </div>
        <div className="shopping-tools-item">
          <img src={money} alt="" />
          <br />
          Money
        </div>
      </div>
    </div>
  );
};

export default ShoppingTools;
