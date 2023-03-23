import TCFDoc from "@/model/TCFDoc";
import Morgan from "morgan";
import { dbConnect, runMiddleware } from "@/utils/index";

dbConnect();

export default async (req, res) => {
  const {
    method,
    body,
    query: { id },
  } = req;
  const morgan = Morgan("dev");

  switch (method) {
    case "GET":
      try {
        await TCFDoc.findById(id);
        const task = await TCFDoc.findById(id);
        if (!task) return res.status(400).json({ msg: "TCFDoc does Not exits " });
        await runMiddleware(req, res, morgan);
        return res.status(200).json(task);
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    case "DELETE":
      try {
        const deletedTCFDoc = await TCFDoc.findByIdAndDelete(id);
        if (!deletedTCFDoc)
          return res.status(404).json({ msg: "TCFDoc does Not exits " });
        await runMiddleware(req, res, morgan);
        return res.status(200).json();
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    case "PUT":
      try {
        const updatedTCFDoc = await TCFDoc.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });
        if (!updatedTCFDoc)
          return res.status(404).json({ msg: "TCFDoc does Not exits " });
        return res.status(200).json(updatedTCFDoc);
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
