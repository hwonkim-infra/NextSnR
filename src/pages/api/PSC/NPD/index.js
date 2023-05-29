// import Task from '../../../model/Task'
import NPD from "@/model/NPD";
import Morgan from "morgan";
import { dbConnect, runMiddleware } from "@/utils";

dbConnect();

export default async (req, res) => {
  const { method, body } = req;
  const morgan = Morgan("combined");

  switch (method) {
    case "GET":
      try {
        // const NPDs = await NPD.find();
        const NPDs = await NPD.find();
        await runMiddleware(req, res, morgan);
        return res.status(200).json({success: true, count: NPDs.length, data: NPDs});
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    case "POST":
      try {
        const newNPD = new NPD(body);
        const savedNPD = await newNPD.save();
        await runMiddleware(req, res, morgan);
        console.log(res)
        return res.status(200).json(savedNPD);
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
