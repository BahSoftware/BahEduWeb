const express = require('express');
const router = express.Router();
const connection = require('../config/data'); // Veritabanı bağlantısını dahil et

// Kayıt endpoint'i
router.post('/register', (req, res) => {
    const { name, surName, phoneNumber, mail, hospital, department, password } = req.body; // Gelen verileri al

    // Kullanıcıyı veritabanına ekleme sorgusu
    const sql = 'INSERT INTO register (name, surName, phoneNumber, mail, hospital, department, password) VALUES (?, ?, ?, ?, ?, ?, ?)';

    connection.query(sql, [name, surName, phoneNumber, mail, hospital, department, password], (err, results) => {
        if (err) {
            return res.status(500).send({ error: 'Veritabanına eklenirken bir hata oluştu.', details: err });
        }
        res.status(201).send({ message: 'Kullanıcı başarıyla oluşturuldu.', id: results.insertId });
    });
});

module.exports = router;
