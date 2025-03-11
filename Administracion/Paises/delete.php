<?php
include 'conexion.php';

$pais_key = $_POST['id'];

$sql = "DELETE FROM ad_paises WHERE pais_key=$pais_key";

if ($conn->query($sql) === TRUE) {
    echo "País eliminado exitosamente";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
