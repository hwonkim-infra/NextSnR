// import Task from '../../../model/Task'
import PSC from '@/model/PSC'
import Morgan from "morgan";
import { dbConnect, runMiddleware } from "@/utils";

dbConnect();

export default async (req, res) => {
  const { method, body } = req;
  const morgan = Morgan('combined');

  switch (method) {
    case "GET":
      try {
        const PSCs = await PSC.find();
        // const PSCs = await PSC.aggregate([{ $project: { _id: 1, Drawings: 0 }}]);
        await runMiddleware(req, res, morgan);
        return res.status(200).json(PSCs);
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    case "POST":
      try {
        const newPSC = new PSC(body);
        const savedPSC = await newPSC.save();
        await runMiddleware(req, res, morgan);
        return res.status(200).json(savedPSC);
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }

    // default:
    //   break;
  }
};
