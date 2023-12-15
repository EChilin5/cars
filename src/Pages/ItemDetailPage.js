import React from "react";
import Finance from "../Components/ItemDetailComponent/Finance";
import ItemDetailTop from "../Components/ItemDetailComponent/ItemDetailTop";
import { useParams } from "react-router-dom";

// cars\src\Images\toyota_crown.PNG
export const ItemDetailPage = () => {
  let { id } = useParams();

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
        "https://github.com/EChilin5/cars/blob/master/src/carphotos/toyota_crown.PNG?raw=true",
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
        "https://github.com/EChilin5/cars/blob/master/src/carphotos/toyota_prius.PNG?raw=true",
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
        "https://github.com/EChilin5/cars/blob/master/src/carphotos/toyota_tacoma.PNG?raw=true",
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
        "https://github.com/EChilin5/cars/blob/master/src/carphotos/toyota_tundra.PNG?raw=true",
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
        "https://github.com/EChilin5/cars/blob/master/src/carphotos/toyota_highlanderhybrid.PNG?raw=true",
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
        "https://github.com/EChilin5/cars/blob/master/src/carphotos/toyota_bz4x.PNG?raw=true",
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
        "https://github.com/EChilin5/cars/blob/master/src/carphotos/toyota_highlander.PNG?raw=true",
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
        "https://github.com/EChilin5/cars/blob/master/src/carphotos/toyota_bz4x.PNG?raw=true",
    },
  ];

  return (
    <div>
      <ItemDetailTop carDetail={carInfo[id]} />
      <hr />
      <Finance />
    </div>
  );
};
