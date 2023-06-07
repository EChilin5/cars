import React from "react";
import crown from "../Images/toyota_crown.PNG";
// cars\src\Images\toyota_crown.PNG
export const ItemDetailPage = () => {
  return (
    <div>
      <div className="top-heading">
        <div> {`<`} All Vehicles</div>
        <div>VIN JTDAAAAF2P3007275</div>
        <div>TOTAL MSRP* $41,354</div>
        <div>View Total MSRP Details</div>
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
        Vehicle shown for illustrative purposes only/
      </div>
    </div>
  );
};
