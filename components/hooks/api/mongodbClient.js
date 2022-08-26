
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const mongodbClient = () => {

    const getClient = async () => {
        const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.5xr8v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
        await client.connect()
        return { client }
    }
    return { getClient }
};

export default mongodbClient;