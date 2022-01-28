import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    temperature: {
      min: 4,
      max: 11,
    },
    wind: {
      speed: 13,
      direction: "s",
    },
    humidity: 30,
  };

  xit("renders detailed forecast for an individual day", () => {
    const { asFragment } = render(
      <ForecastDetails
        temperature={validProps.temperature}
        wind={validProps.wind}
        humidity={validProps.humidity}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText, getByTestId } = render(
      <ForecastDetails
        temperature={validProps.temperature}
        wind={validProps.wind}
        humidity={validProps.humidity}
      />
    );

    expect(getByText("30")).toHaveClass("forecast-summary__humidity");
    expect(getByTestId("13s")).toHaveClass("forecast-details__wind");
    expect(getByText("11°C")).toHaveClass("forecast-details__temperature");
  });
});
