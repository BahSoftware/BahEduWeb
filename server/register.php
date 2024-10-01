<?php include(__DIR__ . '/data.php');

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // POST verilerini al
    $data = json_decode(file_get_contents('php://input'), true);

    // Gerekli alanları kontrol et
    if (isset($data['name'], $data['surName'], $data['phoneNumber'], $data['mail'], $data['hospital'], $data['department'], $data['password'])) {
        $name = $data['name'];
        $surName = $data['surName'];
        $phoneNumber = $data['phoneNumber'];
        $mail = $data['mail'];
        $hospital = $data['hospital'];
        $department = $data['department'];
        $password = password_hash($data['password'], PASSWORD_DEFAULT);

        // Veritabanına ekle
        $stmt = $db->prepare("INSERT INTO register (name, surName, phoneNumber, mail, hospital, department, password) VALUES (?, ?, ?, ?, ?, ?, ?)");
        if ($stmt->execute([$name, $surName, $phoneNumber, $mail, $hospital, $department, $password])) {
            echo json_encode(["message" => "Kayıt başarılı!"]);
        } else {
            echo json_encode(["error" => "Kayıt sırasında bir hata oluştu."]);
        }
    } else {
        echo json_encode(["error" => "Gerekli alanlar eksik."]);
    }
} else {
    echo json_encode(["error" => "Geçersiz istek."]);
}
?>