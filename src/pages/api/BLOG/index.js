// import Task from '../../../model/Task'
import Blog from '@/model/Blog'
import Morgan from "morgan";
import { dbConnect, runMiddleware } from "@/utils";

dbConnect();

export default async (req, res) => {
  const { method, body } = req;
  const morgan = Morgan('combined');

  switch (method) {
    case "GET":
      try {
        const Blogs = await Blog.aggregate([{ $project: {_id: 1, description: 0}}]).sort({date: -1});
        // const Blogs = await Blog.aggregate([{ $project: { _id: 1, Drawings: 0 }}]);
        await runMiddleware(req, res, morgan);
        return res.status(200).json(Blogs);
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    case "POST":
      try {
        const newBlog = new Blog(body);
        const savedBlog = await newBlog.save();
        await runMiddleware(req, res, morgan);
        return res.status(200).json(savedBlog);
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }

    // default:
    //   break;
  }
};
export const config = {
  api: {
    responseLimit: false,
  },
}
