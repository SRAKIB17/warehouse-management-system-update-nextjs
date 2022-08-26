import mongodbClient from "../../../components/hooks/api/mongodbClient"

export default async function handler(req, res) {
    const { getClient } = mongodbClient()
    const { client } = await getClient()
    const ItemCollection = client.db("ItemManage").collection('Item')
    const Products = await ItemCollection.find({}).toArray()
    const filterCat = []

    Products?.forEach(cat => {
        if (!filterCat?.includes(cat?.category)) {
            filterCat.push(cat?.category)
        }
    });
    
    res.status(200).json(filterCat)
}