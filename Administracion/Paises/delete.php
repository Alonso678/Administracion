<?php
include 'conexion.php';

$pais_key = $_POST['pais_key'];

$sql = "DELETE FROM paises WHERE PAIS_KEY=$pais_key";

if ($conn->query($sql) === TRUE) {
    echo "País eliminado exitosamente";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
