const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config({ path: '../.env' });

const app = express();
const port = 3000; // Sunucu portu

// MongoDB Atlas bağlantı URL'sini .env dosyasından al
const uri = process.env.MONGODB_URI;

// MongoClient oluştur
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// Middleware: JSON verilerini işlemek için
app.use(express.json());

// Kök dizine basit bir yanıt ver
app.get('/', (req, res) => {
    res.send('API çalışıyor!'); // Basit bir mesaj döndür
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
app.post('/users', async (req, res) => {
    const newUser = req.body;

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
app.get('/users', async (req, res) => {
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

// Sunucu başlat
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    connectToDatabase(); // Veritabanı bağlantısını başlat
});
