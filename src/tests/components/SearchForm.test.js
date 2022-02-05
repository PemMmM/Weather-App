import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("SearchForm", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<SearchForm />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders elements correctly", () => {
    const { getByTestId } = render(<SearchForm />);

    expect(getByTestId("searchbutton")).toHaveTextContent(/Search/);
    // expect(getByTestId("searchbutton")).toHaveTextContent("Search");
  });
});
