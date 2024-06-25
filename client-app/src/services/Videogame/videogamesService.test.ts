import axios from "axios";
import { getVideogamesByTitle } from "./videogamesService";
import { IVideogame } from "../../utils/types/IVideogame.interface";

jest.mock("axios", () => ({
  get: jest.fn(),
}));

describe("videogamesService", () => {
  describe("getVideogamesByTitle", () => {
    it("should return a list of videogames", async () => {
      const expectedData = [
        {
          title: "Test Title",
          platform: "Test Platform",
          score: 100,
        },
      ];
      const searchTitle = "Test Title";
      const axiosGetSpy = jest.spyOn(axios, "get").mockResolvedValue({
        data: { videoGames: expectedData },
      });

      const result = await getVideogamesByTitle(searchTitle);

      expect(axiosGetSpy).toBeCalledWith(
        "http://localhost:4000/api/videogames",
        { params: { title: `${searchTitle}` } }
      );
      expect(result).toEqual(expectedData);
    });

    it("should return a list empty", async () => {
      const expectedData: IVideogame[] = [];
      const searchTitle = "Test Title";
      const axiosGetSpy = jest.spyOn(axios, "get").mockResolvedValue({
        data: { expectedData },
      });

      const result = await getVideogamesByTitle(searchTitle);

      expect(axiosGetSpy).toBeCalledWith(
        "http://localhost:4000/api/videogames",
        { params: { title: `${searchTitle}` } }
      );
      expect(result).toEqual(expectedData);
    });

    it("should return an error when the request fails", async () => {
      const searchTitle = "Test Title";
      const axiosGetSpy = jest
        .spyOn(axios, "get")
        .mockRejectedValue(new Error());

      try {
        await getVideogamesByTitle(searchTitle);
      } catch (error) {
        expect(axiosGetSpy).toBeCalledWith(
          "http://localhost:4000/api/videogames",
          { params: { title: `${searchTitle}` } }
        );
        expect(error).toBeInstanceOf(Error);
      }
    });
  });
});
