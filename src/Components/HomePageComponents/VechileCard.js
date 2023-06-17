import React from "react";
import tacomaImage from "../../Images/toyotatacoma.PNG";
import Button from "react-bootstrap/esm/Button";
import "./VechileCard.css";

const VechileCard = (props) => {
  let car = props.vehicleInformation;
  const openCarDetail = () => {
    let urlTestItem = `http://localhost:3000/inventory/detail/${car.id}`;
    let urlItem = `https://cars-r-us-80902.web.app/inventory/detail/${car.id}`;

    window.open(urlItem, "_self");
  };

  return (
    <div className="vechile-card-layout" onClick={() => openCarDetail()}>
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
            <div> {car.price} </div>
            <div>starting msrp</div>
          </div>
          <div className="vechile-content-data-item">
            <div>{car.mpg}</div>
            <div>est mpg*</div>
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
