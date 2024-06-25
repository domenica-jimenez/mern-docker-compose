import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { IVideogame } from "../../../utils/types/IVideogame.interface";
import VideoGameCard from "../../shared/VideoGameCard/VideoGameCard";
import useApp from "./useApp";
import {
  AdviceEnums,
  ButtonEnums,
  SubTitleEnums,
  TitleEnums,
} from "../../../utils/enums/TextsEnums";

const App = () => {
  const { actions, data, isPending, error } = useApp();

  const handleVideoGamesData = (
    data: IVideogame[] = [],
    isPending: boolean,
    error: Error | null
  ) => {
    if (isPending)
      return (
        <Typography data-testid="loading-state" variant="h3">
          {AdviceEnums.LOADING}
        </Typography>
      );
    if (error)
      return (
        <Typography data-testid="error-state" variant="h3">
          {AdviceEnums.ERROR}
        </Typography>
      );
    return (
      <Box className="flex flex-col md:grid md:grid-cols-3 gap-5 w-full px-5 2xl:px-24">
        {data.length > 0 ? (
          data?.map((videogame: IVideogame, index: number) => (
            <VideoGameCard
              key={index}
              title={videogame.title}
              platform={videogame.platform}
              score={videogame.score}
            />
          ))
        ) : (
          <Typography data-testid="video-game-cards-empty" variant="h3">
            {AdviceEnums.NOT_RESULTS}
          </Typography>
        )}
      </Box>
    );
  };

  return (
    <Box className="flex flex-col gap-10 my-5 md:my-20 mx-5 md:mx-20 2xl:mx-80">
      <Paper className="flex flex-col items-center gap-4 p-5 md:p-10">
        <Box className="flex flex-col items-center">
          <Typography data-testid="text-title" variant="h1">
            {TitleEnums.TITLE}
          </Typography>
          <Typography data-testid="text-subtitle" variant="body1">
            {SubTitleEnums.SUB_TITLE}
          </Typography>
        </Box>
        <Box className="flex flex-row gap-6 w-full md:w-2/3">
          <TextField
            data-testid="input-search"
            className="w-full md:w-2/3"
            label={SubTitleEnums.SEARCH_TITLE}
            InputProps={{
              endAdornment: <SearchIcon />,
            }}
            onChange={actions.handleTitleOnChange}
          ></TextField>
          <Button
            data-testid="button-search"
            variant="contained"
            color="primary"
            onClick={actions.handleSearchOnClick}
          >
            {ButtonEnums.SEARCH}
          </Button>
        </Box>
      </Paper>
      <Paper className="flex flex-col items-center gap-6 p-5 md:p-10">
        <Typography data-testid="text-result" variant="h2">
          {TitleEnums.RESULT}
        </Typography>
        {handleVideoGamesData(data, isPending, error)}
      </Paper>
    </Box>
  );
};

export default App;
