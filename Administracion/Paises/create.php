<?php
include 'conexion.php';

$pais_key = $_POST['pais_key'];
$cve_pais = $_POST['cve_pais'];
$descripcion = $_POST['descripcion'];
$codigo = $_POST['codigo'];
$cve_continente = $_POST['cve_continente'];

$sql = "INSERT INTO ad_paises SET CVE_PAIS='$cve_pais', DESCRIPCION='$descripcion', CODIGO='$codigo', CVE_CONTINENTE='$cve_continente'";

if ($conn->query($sql) === TRUE) {
    echo "País agregado exitosamente";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
