import mongodbClient from "../../../components/hooks/api/mongodbClient"

export default async function handler(req, res) {
    const { getClient } = mongodbClient()
    const { client } = await getClient()
    const ItemCollection = client.db("ItemManage").collection('allUser')
    const method = req.method
    console.log(method)
    switch (method) {
        case "POST":
            const userBody = req.body
            delete userBody.password;
            delete userBody.name
            userBody.roll = 'user'
            await ItemCollection.insertOne(userBody);
        case "GET":
            const { email } = req.query;

            const filter = { email: email }

            const result = await ItemCollection.findOne(filter)
            console.log(filter)
            return res.status(200).json(result)
            break;
        default:
            break;
    }
    res.status(200).json({ name: 'John Doe' })
}
