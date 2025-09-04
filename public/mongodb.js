const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://tossapon:tossapon36105@cluster0.uxbzw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const dbName = 'tor';

let client;
let db;

async function connectToDatabase() {
    if (!client) {
        client = new MongoClient(uri);
        await client.connect();
        db = client.db(dbName);
    }
    return { client, db };
}

async function getCollectionData(collectionName) {
    try {
        const { db } = await connectToDatabase();
        const collection = db.collection(collectionName);
        return await collection.find({}).toArray();
    } catch (error) {
        console.error(' Error fetching collection data:', error);
        throw error;
    }
}

async function insertData(collectionName, data) {
    const { db } = await connectToDatabase();
    const collection = db.collection(collectionName);
    console.log("insertData ok");
    return await collection.insertOne(data); // don't close client
}

async function updateData(collectionName, query, update) {
    const { db } = await connectToDatabase();
    const collection = db.collection(collectionName);
    return await collection.updateOne(query, { $set: update }); // don't close client
}
async function findByKey(collectionName, query) {
    try {
        const { db } = await connectToDatabase();
        const collection = db.collection(collectionName);

        // query = { key: value }
        const data = await collection.find(query).toArray();

        return data;
    } catch (error) {
        console.error(' Error in findByKey:', error);
        throw error;
    }
}
async function addProjectVisit(visitorIp, pageName) {
    try {
        const { db } = await connectToDatabase();
        const collection = db.collection("visit");

        const result = await collection.updateOne(
            { visitor_ip: visitorIp },   // find by IP
            {
                $push: {
                    project_visit: {
                        timestamp: new Date().toLocaleString(),
                        page: pageName
                    }
                }
            },
            { upsert: false } // create new doc if none exists
        );

        return result;
    } catch (error) {
        console.error(' Error in addProjectVisit:', error);
        throw error;
    }
}
// test
// getCollectionData("visit")
//     .then(data => console.log(data))
//     .catch(err => console.error(err));

module.exports = { connectToDatabase, getCollectionData, insertData, updateData,findByKey,addProjectVisit };
