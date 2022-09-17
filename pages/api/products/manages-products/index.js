// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const jwt = require('jsonwebtoken')
import mongodbClient from "../../../../components/hooks/api/mongodbClient";
import verifyJWT from "../../../../components/hooks/api/verifyJWT";


export default async function handler(req, res) {
    const { getClient } = mongodbClient()
    const { client } = await getClient()
    const ItemCollection = client.db("ItemManage").collection('Item')
    const { search } = req.query
    const { show } = req.query;
    const { page } = req.query
    const prevSkip = eval((page - 1) * show);
    const nextLimit = eval(page * show)
    const { email } = req.query;
    const { user_id } = req.query;

    const check = verifyJWT({ req: req })


    // console.log(verify)
    if (check) {
        if (user_id === 'undefined') {
            if (search == "undefined" || !search) {
                const db = await ItemCollection.find({}).skip(prevSkip).limit(nextLimit).toArray();
                const count = await ItemCollection.countDocuments({});
                return res.status(200).json({ result: db, count: count })
            }

            else {
                const regExp = new RegExp(search, 'i');
                const filter = {
                    "$or": [
                        { title: { $regex: regExp } },
                        { category: { $regex: regExp } },
                        { category: { $regex: regExp } },
                        { supplierName: { $regex: regExp } },
                        { details: { $regex: regExp } },
                    ]
                }

                const db = await ItemCollection.find(filter).skip(prevSkip).limit(nextLimit).toArray();
                const count = await ItemCollection.countDocuments(filter);

                return res.status(200).json({ result: db, count: count })
            }
        }
        else {
            if (search == "undefined" || !search) {
                const db = await ItemCollection.find({ userId: user_id }).skip(prevSkip).limit(nextLimit).toArray();
                const count = await ItemCollection.countDocuments({});
                return res.status(200).json({ result: db, count: count })
            }

            else {
                const regExp = new RegExp(search, 'i');
                const filter = {
                    "$and": [
                        { userId: user_id },
                        {
                            "$or": [
                                { title: { $regex: regExp } },
                                { category: { $regex: regExp } },
                                { category: { $regex: regExp } },
                                { supplierName: { $regex: regExp } },
                                { details: { $regex: regExp } },
                            ]
                        }
                    ]
                }

                const db = await ItemCollection.find(filter).skip(prevSkip).limit(nextLimit).toArray();
                const count = await ItemCollection.countDocuments(filter);

                return res.status(200).json({ result: db, count: count })
            }
        }
    }
    else {
        res.status(501).json("Unauthorize")
    }

}
