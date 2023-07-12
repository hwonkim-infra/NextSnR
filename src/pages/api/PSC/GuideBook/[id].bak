import PSC from "@/model/PSC";
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
        const task = await PSC.findById(id);
        if (!task) return res.status(400).json({ msg: "PSC does Not exits " });
        await runMiddleware(req, res, morgan);
        return res.status(200).json(task);
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    case "DELETE":
      try {
        const deletedPSC = await PSC.findByIdAndDelete(id);
        if (!deletedPSC)
          return res.status(404).json({ msg: "PSC does Not exits " });
        await runMiddleware(req, res, morgan);
        return res.status(200).json();
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    case "PUT":
      try {
        const updatedPSC = await PSC.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });
        if (!updatedPSC)
          return res.status(404).json({ msg: "PSC does Not exits " });
        return res.status(200).json(updatedPSC);
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
