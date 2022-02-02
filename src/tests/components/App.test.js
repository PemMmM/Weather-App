import React from "react";
import { render } from "@testing-library/react";
import App from "../../components/App";

xit("renders correctly", () => {
  const { getByText } = render(<App />);

  expect(getByText("Manchester, UK")).toHaveClass("location-details");
});
