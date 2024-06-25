import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fireEvent, render, waitFor, screen } from "@testing-library/react";
import App from "./App";
const queryClient = new QueryClient();

jest.mock("axios", () => ({
  get: jest.fn(),
}));

describe("useApp", () => {
  it("should return a list of videogames when click", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );

    await waitFor(() => {
      fireEvent.click(screen.getByTestId("button-search"));
      expect(screen.getByText("Resultados")).toBeInTheDocument();
    });
  });

  it("should return a list of videogames when click", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );

    await waitFor(() => {
      const titleInput = screen
        .getByTestId("input-search")
        .querySelector("input");
      if (titleInput) {
        fireEvent.change(titleInput, {
          target: { value: "new content" },
        });
      }

      expect(screen.getByText("Resultados")).toBeInTheDocument();
    });
  });
});
