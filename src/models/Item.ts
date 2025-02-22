import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../lib/mongodb";
import Item from "../../models/Item";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const items = await Item.find({});
        res.status(200).json({ success: true, data: items });
      } catch (error: unknown) {
        if (error instanceof Error) {
          res.status(500).json({ success: false, error: error.message });
        } else {
          res.status(500).json({ success: false, error: "An unknown error occurred" });
        }
      }
      break;

    case "POST":
      try {
        if (!req.body.name || !req.body.price) {
          return res.status(400).json({ success: false, error: "Missing required fields" });
        }
        const item: typeof Item = await Item.create(req.body);
        res.status(201).json({ success: true, data: item });
      } catch (error: unknown) {
        if (error instanceof Error) {
          res.status(500).json({ success: false, error: error.message });
        } else {
          res.status(500).json({ success: false, error: "An unknown error occurred" });
        }
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).json({ success: false, error: `Method ${method} Not Allowed` });
      break;
  }
}




