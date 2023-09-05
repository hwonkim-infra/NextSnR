import OptionPSC from "@/model/OptionPSC";
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
        const task = await OptionPSC.findById(id);
        if (!task) return res.status(400).json({ msg: "OptionPSC does Not exits " });
        await runMiddleware(req, res, morgan);
        return res.status(200).json(task);
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    case "DELETE":
      try {
        const deletedOptionPSC = await OptionPSC.findByIdAndDelete(id);
        if (!deletedOptionPSC)
          return res.status(404).json({ msg: "OptionPSC does Not exits " });
        await runMiddleware(req, res, morgan);
        return res.status(200).json();
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      };
    case "PUT":
      try {
        const updatedOptionPSC = await OptionPSC.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });
        if (!updatedOptionPSC)
          return res.status(404).json({ msg: "OptionPSC does Not exits " });
        return res.status(200).json(updatedOptionPSC);
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
