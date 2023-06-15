import React from "react";

const dataInfo = () => {
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
        "https://toyotaassets.scene7.com/is/image/toyota/CRW_MY23_0004_V002?fmt=jpeg&fit=crop&qlt=90&wid=500",
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
        "https://toyotaassets.scene7.com/is/image/toyota/PRP_MY23_0016_V001_desktop?fmt=jpeg&fit=crop&qlt=90&wid=500",
    },
    {
      id: 4,
      name: "Highlander",
      year: 2023,
      type: "electrified",
      hybrid: true,
      description: "Go above and beyond the ordinary",
      price: "$36,620",
      mpg: "22/29",
      image:
        "https://toyotaassets.scene7.com/is/image/toyota/HLD_MY23_0003_V001_desktop-1?fmt=jpeg&fit=crop&qlt=90&wid=500",
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
  ];

  return (
    <div>
      {carInfo.map((cars) => {
        console.log(cars);
        return <div key={cars.id}> {cars.name}</div>;
      })}
    </div>
  );
};

export default dataInfo;
