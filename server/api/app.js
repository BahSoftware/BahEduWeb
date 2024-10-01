const express = require('express');
const bodyParser = require('body-parser');
const createUser = require('./createUser'); // api klasöründen

const app = express();
const port = 5000;

app.use(bodyParser.json()); // JSON verilerini işlemek için

// Kök URL için basit bir GET endpoint
app.get('/', (req, res) => {
    res.send('API çalışıyor!');
});

app.use('/api', createUser); // API endpoint'lerini ekle

app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});
