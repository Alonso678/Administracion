<?php
include 'conexion.php';

$cve_pais = $_POST['cve_pais'];
$descripcion = $_POST['descripcion'];
$codigo = $_POST['codigo'];
$cve_continente = $_POST['cve_continente'];

$sql = "INSERT INTO paises (CVE_PAIS, DESCRIPCION, CODIGO, CVE_CONTINENTE) VALUES ('$cve_pais', '$descripcion', '$codigo', '$cve_continente')";

if ($conn->query($sql) === TRUE) {
    echo "Nuevo país creado exitosamente";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
