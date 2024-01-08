import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
import "../assets/styles/CardDetails.css";
import { useMediaQuery } from "react-responsive";



const CardDetails = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [sliderIndex, setSliderIndex] = useState(1);
  const [selectedQuantityPerSize, setSelectedQuantityPerSize] = useState(
    () => ({})
  );

  useEffect(() => {
    const fetchCardDetails = async () => {
      const viewCardURL = `https://moonpig.github.io/tech-test-frontend/product/${id}.json`;

      try {
        const response = await fetch(viewCardURL);
        const cardDetails = await response.json();
        setData(cardDetails);
      } catch (error) {
        console.error("Error fetching card details:", error);
      }
    };

    fetchCardDetails();
  }, [id]);

  let cardWidth;
  let cardHeight;

  if (data && data.DesignFeatureTags[0] === "Portrait") {
    cardWidth = isDesktop ? 400 : 200;
    cardHeight = isDesktop ? 600 : 300;
  } else {
    cardHeight = isDesktop ? 400 : 200;
    cardWidth = isDesktop ? 600 : 300;
  }

  function cleanText(textWithHTML) {
    const doc = new DOMParser().parseFromString(textWithHTML, "text/html");
    return doc.body.textContent || "";
  }

  function incrementQuantity(sizeName) {
    setSelectedQuantityPerSize((previousQantity) => ({
      ...previousQantity,
      [sizeName]: (previousQantity[sizeName] || 0) + 1,
    }));
  }

  function decrementQuantity(sizeName) {
    setSelectedQuantityPerSize((previousQantity) => ({
      ...previousQantity,
      [sizeName]: Math.max((previousQantity[sizeName] || 0) - 1, 0),
    }));
  }
  return (
    <div className="card-details-container">
      <h1> Card Details</h1>
      {data && (
        <>
          <div className="card-image-and-information">
            <div className="image-slider">
              <div className="image-for-slider">
                <SimpleImageSlider
                  width={cardWidth}
                  height={cardHeight}
                  images={data.ImageUrls.map((image) => ({
                    url: image.ImageUrl,
                    className: ".cards-images-for-slider",
                  }))}
                  showBullets={true}
                  showNavs={true}
                  onStartSlide={(index) => setSliderIndex(index)}
                />
              </div>

              <div className="sliderCount" style={{ fontSize: "1rem" }}>
                {sliderIndex}/{data.ImageUrls.length}
              </div>
            </div>
            <div className="card-information">
              <div className="card-information-headers">
                <h2>ID: </h2> <p>{data.Name}</p>
              </div>

              <div className="card-information-headers">
                <h2>Name: </h2>
                <p>{data.Title}</p>
              </div>

              <div className="card-information-headers">
                <h2>Is Multipack: </h2>
                <p>{data.IsMultipack ? "Yes" : "No"}</p>
              </div>

              <div className="card-information-headers">
                <h2>Sold Out: </h2>
                <p> {data.SoldOut ? "Yes" : "No"}</p>
              </div>
              <div className="card-information-headers">
                <h2>Product Category Group: </h2>
                <p> {data.ProductCategoryGroup.Name}</p>
              </div>
              <div className="card-information-headers">
                <h2>Description: </h2>
                <p> {cleanText(data.Description)}</p>
              </div>
            </div>
          </div>
          <div className="card-add-to-basket-section">
            <div className="available-sizes-container">
              <h2 className="available-sizes-header">Available Sizes: </h2>
              <ul className="available-sizes">
                {data.AvailableSizes.map((size, index) => (
                  <li key={index}>
                    {size.Name} - {size.Description} - Price: {size.Price}{" "}
                    {size.Currency}
                    <div className="quantity-per-size-container">
                      <button
                        className="quantity-per-size-button"
                        onClick={() => decrementQuantity(size.Name)}
                      >
                        -
                      </button>
                      <span>{selectedQuantityPerSize[size.Name] || 0}</span>
                      <button
                        className="quantity-per-size-button"
                        onClick={() => incrementQuantity(size.Name)}
                      >
                        +
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="button-add-to-basket">
              <button
                onClick={() => {
                  alert("Basket functionality is not available right now.");
                }}
              >
                Add to Basket
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CardDetails;
