const express = require('express');
const bodyParser = require('body-parser');
const createUser = require('./createUser');//api klasaöründen çıkarnca burası --->> ../api/createUser

const app = express();
const port = 3000;

app.use(bodyParser.json()); // JSON verilerini işlemek için
app.use('/api', createUser); // API endpoint'lerini ekle

app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});


