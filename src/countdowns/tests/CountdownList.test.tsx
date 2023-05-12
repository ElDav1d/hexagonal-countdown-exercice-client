/* eslint-disable jest/valid-title */
import { render, screen } from "@testing-library/react";
import MockCountdowns from "../mocks/mock-countdowns.json";
import { CountdownList } from "../CountdownList/CountdownList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useCountdowns } from "../hooks";

const queryClient = new QueryClient();

jest.mock("../hooks");

const mockUseCountdowns = useCountdowns as jest.Mock;

describe(CountdownList, () => {
  it("renders a table", () => {
    mockUseCountdowns.mockReturnValue({
      isFetching: false,
      isError: false,
      countdowns: MockCountdowns,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <CountdownList />
      </QueryClientProvider>
    );

    const table = screen.getByRole("table");

    expect(table).toBeInTheDocument();
  });

  it("renders countdown items", () => {
    mockUseCountdowns.mockReturnValue({
      isFetching: false,
      isError: false,
      countdowns: MockCountdowns,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <CountdownList />
      </QueryClientProvider>
    );

    const countdownItem1 = screen.getByRole("row", { name: /countdown 32/i });
    const countdownItem2 = screen.getByRole("row", { name: /countdown 162/i });
    const countdownItem3 = screen.getByRole("row", { name: /countdown 171/i });

    expect(countdownItem1).toBeInTheDocument();
    expect(countdownItem2).toBeInTheDocument();
    expect(countdownItem3).toBeInTheDocument();
  });
});
