import React from "react";
import crown from "../../Images/toyota_crown.PNG";
import "./ItemDetailTop.css";

const ItemDetailTop = () => {
  return (
    <div className="top-content">
      <div className="top-heading">
        <div className="top-heading-item"> {`<`} All Vehicles </div>
        <div className="top-heading-item">VIN JTDAAAAF2P3007275</div>
        <div className="top-heading-item">TOTAL MSRP* $41,354</div>
        <div className="car-content-confirmation">View Total MSRP Details</div>
      </div>
      <div className="top-heading-sub">
        Vehicle may be in transit. Contact dealer to confirm availability date.
      </div>
      <div className="vehicle-name">
        <h1>2023 Toyota Crown XLE</h1>
      </div>
      <div className="vehicle-name-sub">
        <h2>Contact Dealer for Price</h2>
      </div>
      <div className="vehicle-image">
        <img src={crown} alt="toyota crown" />
        <div className="vehicle-image-desc">
          Vehicle shown for illustrative purposes only
        </div>
      </div>
      <div className="vehicle-price">$41,354 SmarthPath Price</div>
      <div className="vehicle-paint">
        <span class="dot"></span>
        Exterior Magentic Gray Metallic
      </div>
      <div className="vehicle-paint">
        <span class="dot"></span>
        <span className="interior-content">Interior Black Fabric</span>
      </div>
      <div className="general-info">
        2.5-liter 4 Cylinder Hybrid/184 horserpower ECVT with AWD
      </div>
      <div className="general-info">
        50 State Emmisions, All Weather Floor... <br />
        <span class="car-content-detials">View All Vehicle Details</span>
      </div>
    </div>
  );
};

export default ItemDetailTop;
