import axios from "axios";
import { IVideogame } from "../../utils/types/IVideogame.interface";

const apiUrl = process.env.REACT_APP_API_URL;

const getVideogamesByTitle = async (title: string) => {
  try {
    const response = await axios.get<{ videoGames: IVideogame[] }>(
      `${apiUrl}/api/videogames`,
      {
        params: {
          title,
        },
      }
    );
    return response.data && response.data.videoGames
      ? response.data.videoGames
      : [];
  } catch (error: any) {
    throw new Error(error);
  }
};

export { getVideogamesByTitle };
