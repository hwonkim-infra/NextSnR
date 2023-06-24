// import Task from '../../../model/Task'
import NPDitems from "@/model/NPDitems";
import Morgan from "morgan";
import { dbConnect, runMiddleware } from "@/utils";

dbConnect();

export default async (req, res) => {
  const { method, body } = req;
  const morgan = Morgan("combined");

  switch (method) {
    case "GET":
      try {
        // const NPDitemss = await NPDitems.find();
        const NPDitemss = await NPDitems.find();
        await runMiddleware(req, res, morgan);
        return res.status(200).json({success: true, count: NPDitemss.length, data: NPDitemss});
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    case "POST":
      try {
        const newNPDitems = new NPDitems(body);
        const savedNPDitems = await newNPDitems.save();
        await runMiddleware(req, res, morgan);
        console.log(res)
        return res.status(200).json(savedNPDitems);
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
