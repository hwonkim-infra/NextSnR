import NPDitems from "@/model/NPDitems";
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
        const task = await NPDitems.findById(id);
        if (!task) return res.status(400).json({ msg: "NPDitems does Not exits " });
        await runMiddleware(req, res, morgan);
        return res.status(200).json(task);
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    case "DELETE":
      try {
        const deletedNPDitems = await NPDitems.findByIdAndDelete(id);
        if (!deletedNPDitems)
          return res.status(404).json({ msg: "NPDitems does Not exits " });
        await runMiddleware(req, res, morgan);
        return res.status(200).json();
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    case "PUT":
      try {
        const updatedNPDitems = await NPDitems.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });
        if (!updatedNPDitems)
          return res.status(404).json({ msg: "NPDitems does Not exits " });
        return res.status(200).json(updatedNPDitems);
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
