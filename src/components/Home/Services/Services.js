import React from "react";
import engine from "../../../image/Services/engine.png";
import motorbike from "../../../image/Services/motorbike.png";
import washing from "../../../image/Services/washing.png";
import Service from "../service/Service";
import './Services.css'

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Engine Repair",
      description:
        "Our all services is supper.This service is Engine recover, if your bike engine not popper working then doing engine servicing . We are repair the engine efficiently.",
      price: 4500,
      img: engine,
    },
    {
      id: 2,
      name: "Motorcycle repair",
      description:
        "Our all services is supper.This service is Engine recover, if your bike engine not popper working then doing engine servicing . We are repair the engine efficiently.",
      price: 4500,
      img: motorbike,
    },
    {
      id: 3,
      name: "Bike washing",
      description:
        "Our all services is supper.This service is Engine recover, if your bike engine not popper working then doing engine servicing . We are repair the engine efficiently.",
      price: 4500,
      img:washing,
    },
  ];
  return (
    <div>
      <h1 className="text-primary mt-3 text-center">Our services</h1>
     <div className='service-container'>
     {
          services.map(service=><Service key={service.id} service={service}></Service>)
      }
     </div>
    </div>
  );
};

export default Services;
