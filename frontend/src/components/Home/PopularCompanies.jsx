import React from "react";
import { FaMicrosoft, FaApple } from "react-icons/fa";
import { SiGoogle, SiAdobe } from "react-icons/si";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "Hyderabad, Andra Pradesh",
      openPositions: 10,
      icon: <FaMicrosoft />,
    },
    {
      id: 2,
      title: "Google",
      location: "Bangaluru, Karnataka",
      openPositions: 5,
      icon: <SiGoogle />,
    },
    {
      id: 3,
      title: "Apple",
      location: "Bangaluru, Karnataka",
      openPositions: 20,
      icon: <SiAdobe />,
    },
  ];
  return (
    <div className="companies">
      <div className="container">
        <h3>TOP COMPANIES</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                <button>Open Positions {element.openPositions}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
