<?php
include 'conexion.php';

$id = $_GET['id'];

// Verifica si el ID está definido y no está vacío
if (isset($id) && !empty($id)) {
    $sql = "SELECT * FROM ad_paises WHERE PAIS_KEY = $id";
    $result = $conn->query($sql);

    if ($result) {
        if ($result->num_rows > 0) {
            echo json_encode($result->fetch_assoc());
        } else {
            echo json_encode(['error' => 'País no encontrado']);
        }
    } else {
        echo json_encode(['error' => 'Error en la consulta SQL: ' . $conn->error]);
    }
} else {
    echo json_encode(['error' => 'ID no válido']);
}

$conn->close();
?>
