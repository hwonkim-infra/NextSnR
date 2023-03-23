// import Task from '../../../model/Task'
import HEX from '../../../model/HEX'
import Morgan from "morgan";
import { dbConnect, runMiddleware } from "../../../utils";

dbConnect();

export default async (req, res) => {
  const { method, body } = req;
  const morgan = Morgan('combined');

  switch (method) {
    case "GET":
      try {
        // const hexes = await HEX.find();
        const hexes = await HEX.aggregate([{ $project: { _id: 1, Drawings: 0 }}]);
        await runMiddleware(req, res, morgan);
        return res.status(200).json(hexes);
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    case "POST":
      try {
        const newHEX = new HEX(body);
        const savedHEX = await newHEX.save();
        await runMiddleware(req, res, morgan);
        return res.status(200).json(savedHEX);
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
