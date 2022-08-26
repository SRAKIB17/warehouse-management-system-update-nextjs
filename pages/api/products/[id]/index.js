import { ObjectId } from "mongodb"
import mongodbClient from "../../../../components/hooks/api/mongodbClient"

export default async function handler(req, res) {
    const { getClient } = mongodbClient()
    const { client } = await getClient()
    const ItemCollection = client.db("ItemManage").collection('Item')
    const { id } = req.query;
    const filter = { _id: ObjectId(id) }
    console.log(id)

    const product = await ItemCollection.findOne(filter)
    res.status(200).json(product)
}