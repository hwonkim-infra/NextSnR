import Blog from "@/model/Blog";
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
        const task = await Blog.findById(id);
        if (!task) return res.status(400).json({ msg: "Blog does Not exits " });
        await runMiddleware(req, res, morgan);
        return res.status(200).json(task);
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    case "DELETE":
      try {
        const deletedBlog = await Blog.findByIdAndDelete(id);
        if (!deletedBlog)
          return res.status(404).json({ msg: "Blog does Not exits " });
        await runMiddleware(req, res, morgan);
        return res.status(200).json();
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    case "PUT":
      try {
        const updatedBlog = await Blog.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });
        if (!updatedBlog)
          return res.status(404).json({ msg: "Blog does Not exits " });
        return res.status(200).json(updatedBlog);
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }

    default:
        return res.status(400).json({ msg: "This method is not supported " });

  }
};
