import React, { useState, useEffect } from "react";
import "../assets/styles/Card.css";

const Card = ({ title, price, description, imageUrl, id }) => {
  const viewCardURL = `https://moonpig.github.io/tech-test-frontend/product/${id}.json`;
  const [data, setData] = useState([]);
  const fetchInfo = () => {
    return fetch(viewCardURL)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  };
  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <div className="card-component-container">
      <div className="card-title-container">
        <p className="card-title">{title}</p>
      </div>
      {/* <p className="card-description">Description: {description}</p> */}
      <div className="card-image-container">
        <img className="card-image" src={imageUrl} alt={title} />
      </div>
      <div className="card-price-and-button-container">
        <p className="card-price">
          Price: {price.Value}
          {price.Currency}
        </p>
        <button className="card-button" onClick={() => console.log(data.Name)}>
          More Info
        </button>
      </div>
    </div>
  );
};

export default Card;
