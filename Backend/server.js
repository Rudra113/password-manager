const express = require('express')
const dotenv = require('dotenv')
const { MongoClient } = require('mongodb')
const bodyparser = require('body-parser')
const cors = require('cors')

dotenv.config()

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'Passop';
const app = express()
const port = 3000
app.use(bodyparser.json())
app.use(cors())

client.connect();

// get all credentials
app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('credentials');
    const findResult = await collection.find({}).toArray();
    res.json(findResult)
})
// save a credential
app.post('/', async (req, res) => {
    const credential = req.body
    const db = client.db(dbName);
    const collection = db.collection('credentials');
    const findResult = await collection.insertOne(credential)
    res.send({ success: true, result: findResult })
})
// delete a credential
app.delete('/', async (req, res) => {
    const credential = req.body
    const db = client.db(dbName);
    const collection = db.collection('credentials');
    const findResult = await collection.deleteOne(credential)
    res.send({ success: true, result: findResult })
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
}) 