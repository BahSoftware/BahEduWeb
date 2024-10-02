const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config({ path: '../../.env' });

const router = express.Router();
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// Sunucuya bağlan
async function connectToDatabase() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.error("Bağlantı hatası:", error);
    }
}

// Yeni bir kullanıcı eklemek için endpoint
router.post('/', async (req, res) => {
    const newUser = req.body;

    const { name, surName, password, email, department, hospital } = newUser;
    if (!name || !surName || !password || !email || !department || !hospital) {
        return res.status(400).send("Tüm alanlar zorunludur.");
    }

    try {
        const db = client.db("myDatabase");
        const collection = db.collection("users");
        const result = await collection.insertOne(newUser);
        res.status(201).send({ insertedId: result.insertedId });
    } catch (error) {
        console.error("Kullanıcı ekleme hatası:", error);
        res.status(500).send("Kullanıcı ekleme hatası");
    }
});

// Kullanıcıları listelemek için endpoint
router.get('/', async (req, res) => {
    try {
        const db = client.db("myDatabase");
        const collection = db.collection("users");
        const users = await collection.find({}).toArray();
        res.status(200).send(users);
    } catch (error) {
        console.error("Kullanıcıları listeleme hatası:", error);
        res.status(500).send("Kullanıcıları listeleme hatası");
    }
});

// Kullanıcı güncellemek için endpoint
router.put('/:id', async (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;

    try {
        const db = client.db("myDatabase");
        const collection = db.collection("users");
        const result = await collection.updateOne({ _id: new MongoClient.ObjectId(userId) }, { $set: updatedUser });

        if (result.matchedCount === 0) {
            return res.status(404).send("Kullanıcı bulunamadı.");
        }

        res.status(200).send("Kullanıcı güncellendi.");
    } catch (error) {
        console.error("Kullanıcı güncelleme hatası:", error);
        res.status(500).send("Kullanıcı güncelleme hatası");
    }
});

// Kullanıcı silmek için endpoint
router.delete('/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        const db = client.db("myDatabase");
        const collection = db.collection("users");
        const result = await collection.deleteOne({ _id: new MongoClient.ObjectId(userId) });

        if (result.deletedCount === 0) {
            return res.status(404).send("Kullanıcı bulunamadı.");
        }

        res.status(200).send("Kullanıcı silindi.");
    } catch (error) {
        console.error("Kullanıcı silme hatası:", error);
        res.status(500).send("Kullanıcı silme hatası");
    }
});

// Veritabanı bağlantısını başlat
connectToDatabase();

module.exports = router;
