<?php
include 'conexion.php';

$pais_key = $_POST['pais_key'];
$cve_pais = $_POST['cve_pais'];
$descripcion = $_POST['descripcion'];
$codigo = $_POST['codigo'];
$cve_continente = $_POST['cve_continente'];

$sql = "UPDATE paises SET CVE_PAIS='$cve_pais', DESCRIPCION='$descripcion', CODIGO='$codigo', CVE_CONTINENTE='$cve_continente' WHERE PAIS_KEY=$pais_key";

if ($conn->query($sql) === TRUE) {
    echo "País actualizado exitosamente";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
