import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders number of products", async () => {
  render(<App />);

  // to wait for the component to fetch data (asynchronous)
  await screen.findByText(/Number Of Products:/i);

  // To check if the "Number Of Products" text is present
  expect(screen.getByText(/Number Of Products:/i)).toBeInTheDocument();
});
