import { ObjectId } from "mongodb"
import mongodbClient from "../../../../components/hooks/api/mongodbClient"

export default async function handler(req, res) {
    const { getClient } = mongodbClient()
    const { client } = await getClient()
    const ItemCollection = client.db("ItemManage").collection('Item')
    const { id } = req.query;
    const filter = { _id: ObjectId(id) }
    const method = req.method;
    console.log(method)
    switch (method) {
        case "GET":
            const product = await ItemCollection.findOne(filter)
            return res.status(200).json(product);
            break;

        case "PUT":
            const body = req.body;
            const updateDoc = {
                $set: body
            }
            const result = await ItemCollection.updateOne(filter, updateDoc)
            return res.send(result);
            break;

        default:
            break;
    }
}