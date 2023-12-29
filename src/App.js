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
          <div key={product.ProductId}>
            <Card
              title={product.Title}
              price={product.Price}
              description={product.Description}
              imageUrl={product.ProductImage.Link.Href}
            />
          </div>
        ))}
    </div>
  );
};

export default App;
