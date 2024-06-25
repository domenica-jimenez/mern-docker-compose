import { render } from "@testing-library/react";
import VideoGameCard from "./VideoGameCard";

describe("VideoGameCard", () => {
  it("should render a card with a title, platform and score", () => {
    const expectedData = {
      title: "Test Title",
      platform: "Test Platform",
      score: 100,
    };
    const { getByText, getByTestId } = render(
      <VideoGameCard
        title={expectedData.title}
        platform={expectedData.platform}
        score={expectedData.score}
      />
    );

    expect(getByText(expectedData.title)).toBeInTheDocument();
    expect(getByText(expectedData.platform)).toBeInTheDocument();
    expect(getByTestId("text-score")).toBeInTheDocument();
    expect(getByText(expectedData.score)).toBeInTheDocument();
  });
});
