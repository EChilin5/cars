import React from "react";
import "./InventoryCatalog.css";
import InventoryCard from "./InventoryCard";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const InventoryCatalog = (props) => {
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

  const searchCar = () => {};

  return (
    <div className="catalog-container">
      <FloatingLabel
        controlId="floatingInput"
        label="Search By Maker"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="car maker" />
      </FloatingLabel>
      <div className="catalog-item">
        {carInfo.map((car) => {
          return (
            <div className="catalog-item">
              <InventoryCard carData={car} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InventoryCatalog;

{
  /* 
      <div className="catalog-item">
        <InventoryCard />
      </div>
      <div className="catalog-item">
        <InventoryCard />
      </div>
      <div className="catalog-item">
        <InventoryCard />
      </div> */
}
