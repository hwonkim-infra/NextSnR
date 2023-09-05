import OptionPSC from "@/model/OptionPSC";
import Morgan from "morgan";
import { dbConnect, runMiddleware } from "@/utils";

dbConnect();

export default async (req, res) => {
  const { method, body, query } = req;
  const morgan = Morgan("combined");

  switch (method) {
    case "GET":
      try {
        // const OptionPSCs = await OptionPSC.find();
        const OptionPSCs = await OptionPSC.find();
        await runMiddleware(req, res, morgan);
        return res.status(200).json({success: true, count: OptionPSCs.length, data: OptionPSCs});
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    case "POST":
      try {
        const newOptionPSC = new OptionPSC(body);
        const savedOptionPSC = await newOptionPSC.save();
        await runMiddleware(req, res, morgan);
        console.log(res)
        return res.status(200).json(savedOptionPSC);
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
