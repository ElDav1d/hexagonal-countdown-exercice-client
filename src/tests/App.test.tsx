/* eslint-disable jest/valid-title */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import App from "../App";

const queryClient = new QueryClient();

describe(App, () => {
  it("renders the main heading", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );

    const mainHeading = screen.getByRole("heading", {
      level: 1,
      name: /countdowns/i,
    });

    expect(mainHeading).toBeInTheDocument();
  });
});
