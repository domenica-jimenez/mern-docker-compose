import VideoGame from "../../models/videogame";
import { Request, Response } from "express";

export const getVideoGames = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { title } = req.query;
    const videoGames = await VideoGame.aggregate([
      {
        $match: {
          title: { $regex: title, $options: "i" },
        },
      },
      { $unwind: "$title" },
      {
        $match: {
          title: { $regex: title, $options: "i" },
        },
      },
      {
        $group: {
          _id: "$_id",
          title: { $first: "$title" },
          platform: { $first: "$platform" },
          score: { $first: "$score" },
        },
      },
    ]);
    res.status(200).json({ videoGames });
  } catch (error) {
    throw error;
  }
};
