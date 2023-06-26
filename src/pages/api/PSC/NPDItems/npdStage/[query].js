import NPDitems from "@/model/NPDitems";
import Morgan from "morgan";
import { dbConnect, runMiddleware } from "@/utils/index";

dbConnect();

export default async (req, res) => {
  const {
    method,
    body,
    query:{query},
  } = req;
  const morgan = Morgan("dev");

  switch (method) {
    case "GET":
      try {
        const stageResult = await NPDitems.find({
            "npdStage": query,
          
        });
        if (!stageResult) return res.status(400).json({ query, msg: "NPDitems does Not exits " });
        await runMiddleware(req, res, morgan);
        return res.status(200).json({success: true, count: stageResult.length, data: stageResult});
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    default:
        return res.status(400).json({ msg: "This method is not supported " });

  }
};
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '16mb'
    },
  },
}
