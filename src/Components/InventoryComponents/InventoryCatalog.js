import React from "react";
import InventoryCard from "./InventoryCard";
import "./InventoryCatalog.css";

const InventoryCatalog = () => {
  return (
    <div className="catalog-container">
      <div className="catalog-item">
        <InventoryCard />
      </div>
      <div className="catalog-item">
        <InventoryCard />
      </div>
      <div className="catalog-item">
        <InventoryCard />
      </div>
    </div>
  );
};

export default InventoryCatalog;
