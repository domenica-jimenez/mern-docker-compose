import mongoose from "mongoose";
import { IVideogame } from "../types/videogames";

const videoGameSchema = new mongoose.Schema<IVideogame>({
  title: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

const VideoGame = mongoose.model<IVideogame>("VideoGame", videoGameSchema);

export default VideoGame;
