import React from "react";
// import tacomaImage from "../Images/toyotatacoma.PNG";
// import Image from "react-bootstrap/Image";
import "./HomePage.css";
import PhotoGallery from "../Components/HomePageComponents/PhotoGallery";
import VechileCard from "../Components/HomePageComponents/VechileCard";
import FillJustNav from "../Components/HomePageComponents/FillJustNav";
import Button from "react-bootstrap/esm/Button";
import ShoppingTools from "../Components/HomePageComponents/ShoppingTools";

const HomePage = () => {
  let vehiclesType = ["trucks", "sedans", "suv"];
  let url = "http://localhost:3000/inventory";

  const openNewWindow = () => {
    window.open(url, "_self");
  };

  return (
    <div>
      <div className="home-gallery">
        <PhotoGallery />
      </div>

      <div className="explore-all-vehicles">
        {/* <DropDownBtn content={vehiclesType} /> */}
        <h3>Explore All Vehicles</h3>
        <FillJustNav />
        <div className="explore-all-vechiles-section">
          <div className="explore-all-vechiles-section-item">
            {" "}
            <VechileCard />
          </div>
          <div className="explore-all-vechiles-section-item">
            {" "}
            <VechileCard />
          </div>
          <div className="explore-all-vec-btn">
            <Button>Explore all Vehicles</Button>
            <Button onClick={() => openNewWindow()}>Search Inventory</Button>
          </div>
        </div>
      </div>
      <h1>Shopping Tools</h1>
      <div>
        <ShoppingTools />
      </div>
    </div>
  );
};

export default HomePage;
