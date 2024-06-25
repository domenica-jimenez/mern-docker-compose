import { render } from "@testing-library/react";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useApp from "./useApp";
const queryClient = new QueryClient();

jest.mock("axios", () => ({
  get: jest.fn(),
}));

jest.mock("./useApp", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("App", () => {
  beforeEach(() => {
    (useApp as jest.Mock).mockReturnValue({
      actions: {
        handleTitleOnChange: jest.fn(),
        handleSearchOnClick: jest.fn(),
      },
      data: [],
      isPending: false,
      error: null,
    });
  });

  it("should render the App page aplication in document", () => {
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );

    expect(useApp).toHaveBeenCalled();
    expect(getByTestId("text-title")).toBeInTheDocument();
    expect(getByTestId("text-subtitle")).toBeInTheDocument();
    expect(getByTestId("input-search")).toBeInTheDocument;
    expect(getByTestId("button-search")).toBeInTheDocument();
    expect(getByTestId("text-result")).toBeInTheDocument();
  });

  it("should render the App page aplication with loading", () => {
    (useApp as jest.Mock).mockReturnValue({
      actions: {
        handleTitleOnChange: jest.fn(),
        handleSearchOnClick: jest.fn(),
      },
      data: undefined,
      isPending: true,
      error: null,
    });
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );

    expect(getByTestId("loading-state")).toBeInTheDocument();
  });

  it("should render the App page aplication with error", () => {
    (useApp as jest.Mock).mockReturnValue({
      actions: {
        handleTitleOnChange: jest.fn(),
        handleSearchOnClick: jest.fn(),
      },
      data: undefined,
      isPending: false,
      error: true,
    });
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );

    expect(getByTestId("error-state")).toBeInTheDocument();
  });

  it("should render the App page aplication with data", () => {
    (useApp as jest.Mock).mockReturnValue({
      actions: {
        handleTitleOnChange: jest.fn(),
        handleSearchOnClick: jest.fn(),
      },
      data: [
        {
          title: "Test Title",
          platform: "Test Platform",
          score: 100,
        },
      ],
      isPending: false,
      error: null,
    });
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );

    expect(getByTestId("video-game-cards")).toBeInTheDocument();
  });

  it("should render the App page aplication with empty data", () => {
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );

    expect(getByTestId("video-game-cards-empty")).toBeInTheDocument();
  });
});
