import express, { Express, Request, Response } from "express";
import db from "./db";
import router from "./routes";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT;

const app: Express = express();

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req: Request, res: Response) => {
  res.status(200).json("Hello from the server!!!");
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`App is listening on port 4000`);
});

export default app;
