import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

test("renders App component", () => {
  render(<App />);

  const headerElement = document.querySelector(".header");
  expect(headerElement).toBeInTheDocument();

  const cardsElement = document.querySelector(".cards");
  expect(cardsElement).toBeInTheDocument();

 
});
