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
        // const wexes = await WEX.find();
        // const wexes = await WEX.aggregate([{ $group: { "modelName": "$model_name", count: { $sum:1} }}]);
        const wexes = await WEX.aggregate([{ $group: { _id: "$model_name", count: { $sum: 1 } } }]);
        await runMiddleware(req, res, morgan);
        return res.status(200).json(wexes);
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    

    // default:
    //   break;
  }
};
