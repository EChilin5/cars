import React from "react";
import Carousel from "react-bootstrap/Carousel";
import tacomaImage from "../../Images/toyotatacoma.PNG";
import camryImage from "../../Images/camry.png";
import rav4Image from "../../Images/rav4.jpg";

const PhotoGallery = () => {
  let carImages = [tacomaImage, camryImage, rav4Image];
  let carsGalery = [
    {
      id: 0,
      name: "Tacoma",
      image: { tacomaImage },
    },
    {
      id: 1,
      name: "Camry",
      image: { camryImage },
    },
    {
      id: 2,
      name: "rav4",
      image: { rav4Image },
    },
  ];
  return (
    <Carousel>
      {carsGalery.map((car) => {
        console.log(car);
        return (
          <Carousel.Item key={car.id}>
            <img src={carImages[car.id]} alt={car.name} />
            <Carousel.Caption>{car.name}</Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default PhotoGallery;
