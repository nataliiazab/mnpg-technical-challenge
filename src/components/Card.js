import React, { useState, useEffect } from "react";
import "../assets/styles/Card.css";
import { Link } from "react-router-dom";

const Card = ({ title, price, imageUrl, id }) => {
  return (
    <div className="card-component-container">
      <div className="card-title-container">
        <p className="card-title">{title}</p>
      </div>
      <div className="card-image-container">
        <img className="card-image" src={imageUrl} alt={title} />
      </div>
      <div className="card-price-and-button-container">
        <p className="card-price">
          Price: {price.Value}
          {price.Currency}
        </p>
        <button className="card-button" onClick={() => console.log(id)}>
          {" "}
          <Link to={`/card/${id}`}>More Info</Link>
        </button>
      </div>
    </div>
  );
};

export default Card;
