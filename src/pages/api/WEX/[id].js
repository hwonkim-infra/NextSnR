import WEX from "@/model/WEX";
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
        const task = await WEX.findById(id);
        if (!task) return res.status(400).json({ msg: "WEX does Not exits " });
        await runMiddleware(req, res, morgan);
        return res.status(200).json(task);
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    case "DELETE":
      try {
        const deletedWEX = await WEX.findByIdAndDelete(id);
        if (!deletedWEX)
          return res.status(404).json({ msg: "WEX does Not exits " });
        await runMiddleware(req, res, morgan);
        return res.status(200).json();
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    case "PUT":
      try {
        const updatedWEX = await WEX.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });
        if (!updatedWEX)
          return res.status(404).json({ msg: "WEX does Not exits " });
        return res.status(200).json(updatedWEX);
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }

    default:
        return res.status(400).json({ msg: "This method is not supported " });

  }
};
