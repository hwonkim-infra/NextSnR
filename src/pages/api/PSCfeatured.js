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
        // const PSCsummaries = await PSC.find();
        // const PSCsummaries = await PSC.aggregate([{ $group: { "modelName": "$model_name", count: { $sum:1} }}]);
        const PSCsummaries = await PSC.aggregate([{ $project: {
          _id:0,
          actions: 0,
        } }]).limit(5);
        await runMiddleware(req, res, morgan);
        return res.status(200).json(PSCsummaries);
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    

    // default:
    //   break;
  }
};


