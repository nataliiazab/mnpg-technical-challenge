import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";

const App = () => {
  const url = "https://moonpig.github.io/tech-test-frontend/search.json";
  const [data, setData] = useState([]);
  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="App">
      <h1>fetch API</h1>
      {console.log(data)}
      <p>Number Of Products: {data.NumberOfProducts}</p>
      {data.Products &&
        data.Products.map((product) => (
          <Card
            key={product.ProductId} // Use a unique key for each product
            title={product.Title}
            price={product.Price.Value}
            description={product.Description}
            imageUrl={product.ProductImage.Link.Href}
          />
        ))}
    </div>
  );
};

export default App;
