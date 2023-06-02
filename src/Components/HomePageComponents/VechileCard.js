import React from "react";
import tacomaImage from "../../Images/toyotatacoma.PNG";
import Button from "react-bootstrap/esm/Button";
import "./VechileCard.css";

const VechileCard = () => {
  return (
    <div className="vechile-card-layout">
      <div>
        <img src={tacomaImage} alt="vehicle" />
      </div>
      <div className="card-content">
        <div className="vechile-car-type">2023 | Hybrid Available</div>
        <div className="vechile-car-model">
          <h3>HighLander</h3>
        </div>
        <div className="vechile-car-desc">Go above and beyond the ordinary</div>
        <div className="vechile-content-data">
          <div className="vechile-content-data-item">
            {" "}
            $36,620 <br /> starting msrp
          </div>
          <div className="vechile-content-data-item">
            22/29 <br /> est mpg*
          </div>
        </div>
        <div className="">
          <Button>Explore</Button>
          <Button>Build</Button>
        </div>
      </div>
    </div>
  );
};

export default VechileCard;
