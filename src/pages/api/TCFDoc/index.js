// import Task from '../../../model/Task'
import TCFDoc from "@/model/TCFDoc";
import Morgan from "morgan";
import { dbConnect, runMiddleware } from "@/utils";

dbConnect();

export default async (req, res) => {
  const { method, body } = req;
  const morgan = Morgan("combined");

  switch (method) {
    case "GET":
      try {
        const TCFDocs = await TCFDoc.find()
        /* .exec().then(docs => {
          const response = {
            count: docs.length,
            products: docs.map(doc => {
              return {
                item: doc.item,
                reference: doc.reference,
                _id: doc._id,
                request: {
                  type: "GET",
                  url: "http://127.0.0.1:3000/api/TCFDoc/" + doc._id
                }
              }
            })
          }
          res.status(200).json(response);
        }); */
        /* const TCFDocs = await TCFDoc.aggregate([
          {
            $project: {
              _id: 1,
              item: 1,
              date: 1,
              reference: 1,
              requirements: 1,
              riskReduct: 1,
              complyStatements: 1,
              hazardDescript: 1,
              description: 1,
              tags: 1,
            },
          },
        ]); */
        
        await runMiddleware(req, res, morgan);
        return res.status(200).json(TCFDocs);
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }
    case "POST":
      try {
        const newTCFDoc = new TCFDoc(body);
        const savedTCFDoc = await newTCFDoc.save();
        await runMiddleware(req, res, morgan);
        return res.status(200).json(savedTCFDoc);
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }

    default:
      break;
  }
};
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '16mb'
    },
  },
}
