import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe(App, () => {
  it("renders the main heading", () => {
    render(<App />);

    const mainHeading = screen.getByRole("heading", {
      level: 1,
      name: /countdowns/i,
    });

    expect(mainHeading).toBeInTheDocument();
  });

  it("renders a table", () => {
    render(<App />);

    const table = screen.getByRole("table");

    expect(table).toBeInTheDocument();
  });
});
