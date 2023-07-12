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
// @route     GET /api/PSC/GuideBook/:guideId/TCFs
// @access    Public

switch (method) {
    case "GET":
      try {
        let query;

        if (req.params.guideId) {
            query = TCF.find({PSC: req.params.guideId})

        } else {

        }
        const TCFs = await TCF.find({PSC: req.params.guideId})
        
        
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
