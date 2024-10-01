<?php
$mysqlsunucu = "localhost";
$mysqlkullanici = "root";
$mysqlsifre = "";
$veritabani = "bahedu";

try {
    $db = new PDO("mysql:host=$mysqlsunucu;dbname=$veritabani;charset=utf8", $mysqlkullanici, $mysqlsifre);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo json_encode(["message" => "Baglanti basarili"]);
} catch (PDOException $e) {
    echo json_encode(["error" => "Baglanti hatasi: " . $e->getMessage()]);
    exit;
}

date_default_timezone_set('Europe/Istanbul');
?>
