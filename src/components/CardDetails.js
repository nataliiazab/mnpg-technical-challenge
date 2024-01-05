// In CardDetails component
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";

const CardDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [sliderIndex, setSliderIndex] = useState(0);

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

  return (
    <div>
      <p>Card Details</p>
      {data && (
        <>
          <h2>ID: {data.Name}</h2>
          <h2>Name: {data.Title}</h2>
          <h2>Is Multipack: {data.IsMultipack ? "Yes" : "No"}</h2>
          <h2>Sold Out: {data.SoldOut ? "Yes" : "No"}</h2>
          {/* <h2>In Stock: {data.InStock ? "Yes" : "No"}</h2> */}
          <h2>
            Product Category Group:
            {data.ProductCategoryGroup.Name}
          </h2>

          <h2>Description: {data.Description}</h2>

          <div>
            <SimpleImageSlider
              width={300}
              height={450}
              images={data.ImageUrls.map((image) => ({ url: image.ImageUrl }))}
              showBullets={true}
              showNavs={true}
              
              onStartSlide={(index) => setSliderIndex(index)} 
            />
            <div style={{ fontSize: "1.5rem" }}>
              The current image slide No is {sliderIndex + 1}.
            </div>
          </div>

          <div>
            <p>Available Sizes:</p>
            <ul>
              {data.AvailableSizes.map((size, index) => (
                <li key={index}>
                  {size.Name} - {size.Description} - Price: {size.Price}{" "}
                  {size.Currency}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p>Additional Info: {data.AdditionalInfo}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CardDetails;
