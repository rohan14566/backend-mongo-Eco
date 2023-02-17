const {MongoClient}=require('mongodb')
const url="mongodb+srv://rohan:rohan123@cluster0.5gagrru.mongodb.net/ecomerce?retryWrites=true&w=majority"

const client=new MongoClient(url);

const findAllFromToDB=async(collectionName)=>{
    try {
       await client.connect();
       console.log("connection to db is sucessfull")
        const database=client.db("ecomerce")
        const collection=database.collection(collectionName)
        const dbResponse=await collection.find().toArray();
        await client.close();
        return dbResponse;

    } catch (error) {
        return error.message
    }
}

module.exports={findAllFromToDB}