import express, { Express } from "express";
import * as videogame from "../controllers/videogame";
import cors from "cors";

const router: Express = express();

router.use(cors());
router.get("/videogames", videogame.getVideoGames);

export default router;
