import React from "react";
import tacomaImage from "../../Images/toyotatacoma.PNG";
import Button from "react-bootstrap/esm/Button";
import "./VechileCard.css";

const VechileCard = (props) => {
  let car = props.vehicleInformation;
  return (
    <div className="vechile-card-layout">
      <div>
        <img src={car.image} alt="vehicle" />
      </div>
      <div className="card-content">
        <div className="vechile-car-type">{car.year} | Hybrid Available</div>
        <div className="vechile-car-model">
          <h3>{car.name}</h3>
        </div>
        <div className="vechile-car-desc">{car.description}</div>
        <div className="vechile-content-data">
          <div className="vechile-content-data-item">
            {" "}
            {car.price} <br /> starting msrp
          </div>
          <div className="vechile-content-data-item">
            {car.mpg} <br /> est mpg*
          </div>
        </div>
        <div className="vehicle-options-btn">
          <Button>Explore</Button>
          <Button>Build</Button>
        </div>
      </div>
    </div>
  );
};

export default VechileCard;
