// import Task from '../../../model/Task'
import HDZ from '../../../model/HDZ'
import Morgan from "morgan";
import { dbConnect, runMiddleware } from "../../../utils";

dbConnect();

export default async (req, res) => {
  const { method, body } = req;
  const morgan = Morgan('combined');

  switch (method) {
    case "GET":
      try {
        // const HDZes = await HDZ.find();
        const HDZes = await HDZ.aggregate([{ $project: { _id: 1, Drawings: 0 }}]);
        await runMiddleware(req, res, morgan);
        return res.status(200).json(HDZes);
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    case "POST":
      try {
        const newHDZ = new HDZ(body);
        const savedHDZ = await newHDZ.save();
        await runMiddleware(req, res, morgan);
        return res.status(200).json(savedHDZ);
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
