import HEX from "../../../model/HEX";
import Morgan from "morgan";
import { dbConnect, runMiddleware } from "../../../utils/index";

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
        const task = await HEX.findById(id);
        if (!task) return res.status(400).json({ msg: "HEX does Not exits " });
        await runMiddleware(req, res, morgan);
        return res.status(200).json(task);
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    case "DELETE":
      try {
        const deletedHEX = await HEX.findByIdAndDelete(id);
        if (!deletedHEX)
          return res.status(404).json({ msg: "HEX does Not exits " });
        await runMiddleware(req, res, morgan);
        return res.status(200).json();
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    case "PUT":
      try {
        const updatedHEX = await HEX.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });
        if (!updatedHEX)
          return res.status(404).json({ msg: "HEX does Not exits " });
        return res.status(200).json(updatedHEX);
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }

    default:
        return res.status(400).json({ msg: "This method is not supported " });

  }
};
export const config = {
  api: {
    responseLimit: false,
  },
}
