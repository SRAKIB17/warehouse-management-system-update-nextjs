// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import mongodbClient from "../../../components/hooks/api/mongodbClient"

export default async function handler(req, res) {
    const { getClient } = mongodbClient()
    const { client } = await getClient()
    const ItemCollection = client.db("ItemManage").collection('Item')

    const productBody = req.body;
    const result = await ItemCollection.insertOne(productBody);
    return res.status(200).json(result)


}
