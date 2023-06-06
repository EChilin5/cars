import React from "react";
import InventoryCatalog from "../Components/InventoryComponents/InventoryCatalog";
import InventoryFilter from "../Components/InventoryComponents/InventoryFilter";
import "./InventoryPage.css";

const InventoryPage = () => {
  return (
    <div>
      <div className="inventory-container">
        <div className="inventory-section-filter">
          <InventoryFilter />
        </div>
        <div className="inventory-section-content">
          <InventoryCatalog />
          <InventoryCatalog />
          <InventoryCatalog />
        </div>
      </div>
    </div>
  );
};

export default InventoryPage;
