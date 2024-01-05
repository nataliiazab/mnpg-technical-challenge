import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./assets/styles/App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const searchCardsURL =
    "https://moonpig.github.io/tech-test-frontend/search.json";
  const [data, setData] = useState([]);
  const fetchInfo = () => {
    return fetch(searchCardsURL)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
      </BrowserRouter>

      <div className="cards-container">
        <h1>
          {" "}
          At Moonpig we've got greetings cards for every single occasion.{" "}
        </h1>
        <div className="cards">
          {data.Products &&
            data.Products.map((product) => (
              <div className="card-container" key={product.ProductId}>
                <Card
                  title={product.Title}
                  price={product.Price}
                  description={product.Description}
                  imageUrl={product.ProductImage.Link.Href}
                  id={product.MoonpigProductNo}
                />
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
