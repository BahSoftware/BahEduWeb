const express = require('express');
require('dotenv').config({ path: '../.env' });

const app = express();
const port = 3000; // Sunucu portu

// Middleware: JSON verilerini işlemek için
app.use(express.json());

// Kullanıcı kayıt rotalarını ekle
const registerRoutes = require('../register/register'); // register.js dosyasını içe aktar
const loginRoutes = require('../register/login'); // login.js dosyasını içe aktar

app.use('/register', registerRoutes); // Kullanıcı kayıt rotalarını '/register' yoluna bağla
app.use('/login', loginRoutes); // Giriş rotasını '/login' yoluna bağla

// Kök dizine basit bir yanıt ver
app.get('/', (req, res) => {
    res.send('API çalışıyor!'); // Basit bir mesaj döndür
});

// Sunucu başlat
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
