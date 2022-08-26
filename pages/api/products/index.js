// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import mongodbClient from "../../../components/hooks/api/mongodbClient"

export default async function handler(req, res) {
    const { getClient } = mongodbClient()
    const { client } = await getClient()
    const ItemCollection = client.db("ItemManage").collection('Item')
    const { cat } = req.query
    const { show } = req.query;
    const { page } = req.query
    const prevSkip = eval((page - 1) * show);
    const nextLimit = eval(page * show)

    if (cat == "undefined" || !cat) {
        const db = await ItemCollection.find({}).skip(prevSkip).limit(nextLimit).toArray();
        const count = await ItemCollection.countDocuments({});
        return res.status(200).json({ result: db, count: count })
    }
    else {
        const regExp = new RegExp(cat, 'i');
        const filter = { category: { $regex: regExp } }

        const db = await ItemCollection.find(filter).skip(prevSkip).limit(nextLimit).toArray();
        const count = await ItemCollection.countDocuments(filter);

        return res.status(200).json({ result: db, count: count })
    }
    res.status(200).json("ItemCollection")
}
