import React, { useState, useEffect } from "react";
import "../assets/styles/App.css";

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
    <div className="card-container">
      <p>Title: {title}</p>
      <p>
        Price: {price.Value}
        {price.Currency}
      </p>
      <p>Description: {description}</p>
      <img src={imageUrl} alt={title} />
      <button onClick={() => console.log(data.Name)}>More Info</button>
    </div>
  );
};

export default Card;
