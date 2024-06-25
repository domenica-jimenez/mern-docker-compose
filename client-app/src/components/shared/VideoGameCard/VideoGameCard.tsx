import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { IVideogame } from "../../../utils/types/IVideogame.interface";
import { SubTitleEnums } from "../../../utils/enums/TextsEnums";

const VideoGameCard = ({ title, platform, score }: IVideogame) => {
  return (
    <Card
      data-testid="video-game-cards"
      className="flex flex-col justify-between p-5"
    >
      <CardHeader title={title} titleTypographyProps={{ variant: "h3" }} />
      <CardContent className="flex flex-col gap-2">
        <Typography variant="body2">{platform}</Typography>
        <Box className="flex flex-row justify-between">
          <Typography data-testid="text-score" variant="subtitle2">
            {SubTitleEnums.SCORE}
          </Typography>
          <Typography variant="body2">{score}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default VideoGameCard;
