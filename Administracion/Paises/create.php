<?php
include 'conexion.php';

$clave_desc = $_POST['clave_desc'];
$descripcion = $_POST['descripcion'];
$codigo = $_POST['codigo'];
$cve_continente = $_POST['cve_continente'];

$sql = "INSERT INTO ad_paises (clave_desc, descripcion, codigo, CVE_CONTINENTE) VALUES ('$clave_desc', '$descripcion', '$codigo', '$cve_continente')";

if ($conn->query($sql) === TRUE) {
    echo "Nuevo país creado exitosamente";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
