// import Task from '../../../model/Task'
import PSC from "@/model/PSC";
import TCF from "@/model/TCF";
import Morgan from "morgan";
import { dbConnect, runMiddleware } from "@/utils";

dbConnect();

export default async (req, res) => {
  const { method, body } = req;
  const morgan = Morgan("combined");

  // @desc      Get TCFs
// @route     GET /api/v1/courses
// @route     GET /api/v1/bootcamps/:bootcampId/courses
// @access    Public
  switch (method) {
    case "GET":
      try {
        const TCFs = await TCF.find()
        
        
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
