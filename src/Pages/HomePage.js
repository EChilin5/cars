import React, { useState } from "react";
// import tacomaImage from "../Images/toyotatacoma.PNG";
// import Image from "react-bootstrap/Image";
import "./HomePage.css";
import PhotoGallery from "../Components/HomePageComponents/PhotoGallery";
import VechileCard from "../Components/HomePageComponents/VechileCard";
import FillJustNav from "../Components/HomePageComponents/FillJustNav";
import Button from "react-bootstrap/esm/Button";
import ShoppingTools from "../Components/HomePageComponents/ShoppingTools";

const HomePage = () => {
  let url = "https://cars-r-us-80902.web.app/inventory";

  const [VehicleID, setVehicleID] = useState(0);
  let vehiclesType = ["trucks", "sedans", "suv"];
  const carInfo = [
    {
      id: 0,
      name: "Toyota Crown",
      type: "car-minivan",
      year: 2023,
      hybrid: true,
      description: "Innovation dialed up",
      price: "$39,950",
      mpg: "42/41",
      image:
        "https://toyotaassets.scene7.com/is/image/toyota/CRW_MY23_0004_V002?fmt=jpeg&fit=crop&qlt=90&wid=500",
    },
    {
      id: 1,
      name: "Prius Prime",
      type: "car-minivan",
      year: 2023,
      hybrid: true,
      description: "Taking thrilling drives farther with a plug in advantage",
      price: "$32,350",
      mpg: "48/114",
      image:
        "https://toyotaassets.scene7.com/is/image/toyota/PRP_MY23_0016_V001_desktop?fmt=jpeg&fit=crop&qlt=90&wid=500",
    },
    {
      id: 2,
      name: "Tacoma",
      year: 2023,
      type: "trucks",
      hybrid: false,
      description: "Built to take on trails and terrain. And everything else.",
      price: "$28,250",
      mpg: "18/22",
      image:
        "https://toyotaassets.scene7.com/is/image/toyota/Tacoma_23?fmt=jpeg&fit=crop&qlt=90&wid=500",
    },
    {
      id: 3,
      name: "Tundra",
      year: 2023,
      type: "trucks",
      hybrid: true,
      description: "Built to work. Born to play",
      price: "$38,965",
      mpg: "18/24",
      image:
        "https://toyotaassets.scene7.com/is/image/toyota/TUN_MY22_0002_V002_desktop?fmt=jpeg&fit=crop&qlt=90&wid=500",
    },
    {
      id: 4,
      name: "Highlander Hybrid",
      year: 2023,
      type: "electrified",
      hybrid: true,
      description: "Designed to go the extra miles",
      price: "$40,620",
      mpg: "36/35",
      image:
        "https://toyotaassets.scene7.com/is/image/toyota/HLH_MY23_0002_V001_desktop-2?fmt=jpeg&fit=crop&qlt=90&wid=500",
    },
    {
      id: 5,
      name: "bZ4X",
      year: 2023,
      type: "electrified",
      hybrid: true,
      description: "Refreshingly intuitive.Remarkably designed",
      price: "$42,050",
      mpg: "252",
      image:
        "https://toyotaassets.scene7.com/is/image/toyota/BZ4_MY23_0035_V001-2?fmt=jpeg&fit=crop&qlt=90&wid=500",
    },
    {
      id: 6,
      name: "Highlander",
      year: 2023,
      type: "crossovers-suvs",
      hybrid: true,
      description: "Go above and beyond the ordinary",
      price: "$36,620",
      mpg: "22/29",
      image:
        "https://toyotaassets.scene7.com/is/image/toyota/HLD_MY23_0003_V001_desktop-1?fmt=jpeg&fit=crop&qlt=90&wid=500",
    },
    {
      id: 7,
      name: "bZ4X",
      year: 2023,
      type: "crossovers-suvs",
      hybrid: true,
      description: "Refreshingly intuitive.Remarkably designed",
      price: "$42,050",
      mpg: "252",
      image:
        "https://toyotaassets.scene7.com/is/image/toyota/BZ4_MY23_0035_V001-2?fmt=jpeg&fit=crop&qlt=90&wid=500",
    },
  ];

  const vehicleType = (id) => {
    console.log(`id chosen is ${id}`);
    setVehicleID(id);
  };

  const openNewWindow = () => {
    window.open(url, "_self");
  };

  const displayVehicle = () => {
    let carTypes = ["car-minivan", "trucks", "crossovers-suvs", "electrified"];
    let filterCars = carInfo.filter((car) => car.type === carTypes[VehicleID]);
    console.log(filterCars.length);
    return filterCars.map((car) => {
      return (
        <div key={car.id} className="explore-all-vechiles-section-item">
          {" "}
          <VechileCard vehicleInformation={car} />
        </div>
      );
    });
  };

  return (
    <div>
      <div className="home-gallery">
        <PhotoGallery />
      </div>

      <div className="explore-all-vehicles">
        {/* <DropDownBtn content={vehiclesType} /> */}
        <h3>Explore All Vehicles</h3>
        <FillJustNav selectedFilter={vehicleType} />
        <div className="explore-all-vechiles-section">
          {displayVehicle()}
          <div className="explore-all-vec-btn">
            <Button onClick={() => openNewWindow()}>Search Inventory</Button>
          </div>
        </div>
      </div>
      <div className="home-shopping-title">
        <h1>Shopping Tools</h1>
      </div>

      <div>
        <ShoppingTools />
      </div>
    </div>
  );
};

export default HomePage;
