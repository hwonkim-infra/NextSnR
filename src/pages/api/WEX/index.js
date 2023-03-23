// import Task from '../../../model/Task'
import WEX from '@/model/WEX'
import Morgan from "morgan";
import { dbConnect, runMiddleware } from "@/utils";

dbConnect();

export default async (req, res) => {
  const { method, body } = req;
  const morgan = Morgan('combined');

  switch (method) {
    case "GET":
      try {
        // const hexes = await WEX.find();
        const hexes = await WEX.aggregate([{ $project: { _id: 1, Drawings: 0 }}]);
        await runMiddleware(req, res, morgan);
        return res.status(200).json(hexes);
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    case "POST":
      try {
        const newWEX = new WEX(body);
        const savedWEX = await newWEX.save();
        await runMiddleware(req, res, morgan);
        return res.status(200).json(savedWEX);
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }

    // default:
    //   break;
  }
};
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '16mb'
    },
  },
}
