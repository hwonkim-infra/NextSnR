import GLOBAL from '@/model/GLOBAL'
import Morgan from "morgan";
import { dbConnect, runMiddleware } from "@/utils";

dbConnect();

export default async (req, res) => {
  const { method, body } = req;
  const morgan = Morgan('combined');

  switch (method) {
    case "GET":
      try {
        const GLOBALs = await GLOBAL.find();
        // const GLOBALs = await GLOBAL.aggregate([{ $project: { _id: 1, Drawings: 0 }}]);
        await runMiddleware(req, res, morgan);
        return res.status(200).json(GLOBALs);
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    case "POST":
      try {
        const newGLOBAL = new GLOBAL(body);
        const savedGLOBAL = await newGLOBAL.save();
        await runMiddleware(req, res, morgan);
        return res.status(200).json(savedGLOBAL);
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
