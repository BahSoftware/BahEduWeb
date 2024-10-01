const mysql = require('mysql2');

// MySQL bağlantısını oluştur
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'baheduweb'
});

// Bağlantıyı kontrol et
connection.connect((err) => {
    if (err) {
        console.error('MySQL bağlantı hatası: ' + err.stack);
        return;
    }
    console.log('MySQL bağlantısı başarılı: ' + connection.threadId);
});

module.exports = connection;
