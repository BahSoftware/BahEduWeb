const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config({ path: "../../.env" });

const router = express.Router();

// MongoDB Atlas bağlantı URL'sini .env dosyasından al
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Giriş için endpoint
router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    await client.connect();
    const db = client.db("myDatabase");
    const collection = db.collection("users");

    // Kullanıcıyı sorgula
    const user = await collection.findOne({ email: email, password: password });

    if (user) {
      res.status(200).send({ message: "Giriş başarılı", user });
    } else {
      res.status(401).send({ message: "Geçersiz e-posta veya şifre" });
    }
  } catch (error) {
    console.error("Giriş hatası:", error);
    res.status(500).send("Giriş hatası");
  } finally {
    await client.close();
  }
});

module.exports = router;
