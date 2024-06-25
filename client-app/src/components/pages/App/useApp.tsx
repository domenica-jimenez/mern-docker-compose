import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { IVideogame } from "../../../utils/types/IVideogame.interface";
import { getVideogamesByTitle } from "../../../services/Videogame/videogamesService";
import { ServicesEnums } from "../../../utils/enums/ServicesEnums";

interface IUseApp {
  actions: {
    handleTitleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSearchOnClick: () => void;
  };
  data: IVideogame[] | undefined;
  isPending: boolean;
  error: Error | null;
}

const useApp = (): IUseApp => {
  const [videoGamesTitle, setVideoGamesTitle] = useState<string>("");

  const { data, isPending, error, refetch } = useQuery<IVideogame[]>({
    queryFn: () => getVideogamesByTitle(videoGamesTitle),
    queryKey: [ServicesEnums.VIDEOGAMES_TITLE],
  });

  const handleTitleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVideoGamesTitle(event.target.value);
  };

  const handleSearchOnClick = () => {
    refetch();
  };

  return {
    actions: { handleTitleOnChange, handleSearchOnClick },
    data,
    isPending,
    error,
  };
};

export default useApp;
