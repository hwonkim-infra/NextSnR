import NoiseCerti from "@/model/NoiseCerti";
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
        await NoiseCerti.findById(id);
        const task = await NoiseCerti.findById(id);
        if (!task) return res.status(400).json({ msg: "NoiseCerti does Not exits " });
        await runMiddleware(req, res, morgan);
        return res.status(200).json(task);
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    case "DELETE":
      try {
        const deletedNoiseCerti = await NoiseCerti.findByIdAndDelete(id);
        if (!deletedNoiseCerti)
          return res.status(404).json({ msg: "NoiseCerti does Not exits " });
        await runMiddleware(req, res, morgan);
        return res.status(200).json();
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    case "PUT":
      try {
        const updatedNoiseCerti = await NoiseCerti.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });
        if (!updatedNoiseCerti)
          return res.status(404).json({ msg: "NoiseCerti does Not exits " });
        return res.status(200).json(updatedNoiseCerti);
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
