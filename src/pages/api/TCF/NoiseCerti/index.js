// import Task from '../../../model/Task'
import NoiseCerti from "@/model/NoiseCerti";
import Morgan from "morgan";
import { dbConnect, runMiddleware } from "@/utils";

dbConnect();

export default async (req, res) => {
  const { method, body } = req;
  const morgan = Morgan("combined");

  switch (method) {
    case "GET":
      try {
        const NoiseCertis = await NoiseCerti.find()
        
        await runMiddleware(req, res, morgan);
        return res.status(200).json(NoiseCertis);
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    case "POST":
      try {
        const newNoiseCerti = new NoiseCerti(body);
        const savedNoiseCerti = await newNoiseCerti.save();
        await runMiddleware(req, res, morgan);
        return res.status(200).json(savedNoiseCerti);
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
