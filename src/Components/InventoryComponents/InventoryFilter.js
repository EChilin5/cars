import React, { useState } from "react";
import "./InventoryFilter.css";

const InventoryFilter = () => {
  const [displayFilter, setFilterDisplay] = useState(false);
  const [displayYear, setDisplayYear] = useState(false);
  const [displayMile, setDisplayMile] = useState(false);
  const [displayPrice, setPriceMile] = useState(false);

  const filterDisplay = () => {
    setFilterDisplay(!displayFilter);
  };

  const yearDisplay = () => {
    setDisplayYear(!displayYear);
  };
  const mileDisplay = () => {
    setDisplayMile(!displayMile);
  };

  const priceDisplay = () => {
    setPriceMile(!displayPrice);
  };

  return (
    <div>
      <div className="filter-container">
        <div className="filter-item">
          <div className="filter-heading" onClick={() => filterDisplay()}>
            <div className="filter-heading-item">Filter</div>
            <div id="expand-content" className="filter-heading-item">
              {displayFilter ? (
                <div className="menu">
                  <div className="menu-line-close"></div>
                  <div className="menu-line-close"></div>
                  <div className="menu-line-close"></div>
                </div>
              ) : (
                <div className="menu">
                  <div className="menu-line"></div>
                  <div className="menu-line"></div>
                  <div className="menu-line"></div>
                </div>
              )}
            </div>
          </div>
          {displayFilter ? (
            <div>
              <div className="filter-heading" onClick={() => yearDisplay()}>
                <div className="filter-heading-item">Year</div>
                <div id="expand-content" className="filter-heading-item">
                  {displayYear ? "-" : "+"}
                </div>
              </div>
              {displayYear ? (
                <div className="fitler-sub-container">
                  <div className="filter-sub-item">
                    <div>Start Year</div>
                    <div>Choice</div>
                  </div>
                  <div className="filter-sub-item">
                    <div>End Year</div>
                    <div>Choice</div>
                  </div>
                </div>
              ) : null}

              <div className="filter-heading" onClick={() => mileDisplay()}>
                <div className="filter-heading-item">Mileage</div>
                <div id="expand-content" className="filter-heading-item">
                  {displayMile ? "-" : "+"}
                </div>
              </div>
              {displayMile ? (
                <div className="fitler-sub-container">
                  <div className="filter-sub-item">
                    <div>Start Mile</div>
                    <div>Choice</div>
                  </div>
                  <div className="filter-sub-item">
                    <div>End Mile</div>
                    <div>Choice</div>
                  </div>
                </div>
              ) : null}

              <div className="filter-heading" onClick={() => priceDisplay()}>
                <div className="filter-heading-item">Price</div>
                <div id="expand-content" className="filter-heading-item">
                  {displayPrice ? "-" : "+"}
                </div>
              </div>
              {displayPrice ? (
                <div className="fitler-sub-container">
                  <div className="filter-sub-item">
                    <div>Start Price</div>
                    <div>Choice</div>
                  </div>
                  <div className="filter-sub-item">
                    <div>End Price</div>
                    <div>Choice</div>
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default InventoryFilter;
