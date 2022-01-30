import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../components/App";
import LocationDetails from "./LocationDetails.test";

xit("renders correctly", () => {
  const { getByText } = render(
    <LocationDetails city="Manchester" country="GB" />
  );

  expect(getByText("Manchester, UK")).toHaveClass("location-details");
});
