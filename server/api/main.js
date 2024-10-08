const express = require('express');
require('dotenv').config({ path: '../.env' });
const cors = require("cors");

const app = express();
const port = 3001; // Sunucu portu

// Middleware: JSON verilerini işlemek için
app.use(express.json());
app.use(cors());

// Kullanıcı kayıt rotalarını ekle
const registerRoutes = require('../register/register'); // register.js dosyasını içe aktar
app.use('/register', registerRoutes); // Kullanıcı kayıt rotalarını '/register' yoluna bağla

const loginRoutes = require('../register/login'); // register.js dosyasını içe aktar
app.use('/login', loginRoutes); // Kullanıcı kayıt rotalarını '/register' yoluna bağla


// Kök dizine basit bir yanıt ver
app.get('/', (req, res) => {
    res.send('API çalışıyor!'); // Basit bir mesaj döndür
});

// Sunucu başlat
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});