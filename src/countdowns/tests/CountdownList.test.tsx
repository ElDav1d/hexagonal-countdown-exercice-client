/* eslint-disable jest/valid-title */
import { render, screen } from "@testing-library/react";
import MockCountdowns from "../mocks/mock-countdowns.json";
import { CountdownList } from "../CountdownList/CountdownList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useCountdownQuery, useCountdown } from "../hooks";

const queryClient = new QueryClient();

jest.mock("../hooks");

const mockuseCountdownQuery = useCountdownQuery as jest.Mock;
const mockUseCountdown = useCountdown as jest.Mock;

describe(CountdownList, () => {
  beforeEach(() => {
    mockUseCountdown.mockReturnValue([0, 0, 0, 0]);

    mockuseCountdownQuery.mockReturnValue({
      isFetching: false,
      isError: false,
      countdowns: MockCountdowns,
    });
  });

  it("renders a table", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <CountdownList />
      </QueryClientProvider>
    );

    const table = screen.getByRole("table");

    expect(table).toBeInTheDocument();
  });

  it("renders countdown items", () => {
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
