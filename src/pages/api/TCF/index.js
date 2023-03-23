// import Task from '../../../model/Task'
import TCF from "@/model/TCF";
import Morgan from "morgan";
import { dbConnect, runMiddleware } from "@/utils";

dbConnect();

export default async (req, res) => {
  const { method, body } = req;
  const morgan = Morgan("combined");

  switch (method) {
    case "GET":
      try {
        const TCFs = await TCF.find();
        /* const TCFs = await TCF.aggregate([
          {
            $project: {
              _id: 1,
              item: 1,
              date: 1,
              reference: 1,
              requirements: 1,
              riskReduct: 1,
              complyStatements: 1,
              hazardDescript: 1,
              description: 1,
              tags: 1,
            },
          },
        ]); */
        await runMiddleware(req, res, morgan);
        return res.status(200).json(TCFs);
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    case "POST":
      try {
        const newTCF = new TCF(body);
        const savedTCF = await newTCF.save();
        await runMiddleware(req, res, morgan);
        return res.status(200).json(savedTCF);
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }

    default:
      break;
  }
};
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '16mb'
    },
  },
}
