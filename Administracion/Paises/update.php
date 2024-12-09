<?php
include 'conexion.php';

$pais_key = $_POST['id']; // Asegúrate de que el nombre del campo coincide con el del formulario
$cve_pais = $_POST['clave_pais'];
$descripcion = $_POST['descripcion'];
$codigo = $_POST['codigo'];
$cve_continente = $_POST['cve_continente'];

$sql = "UPDATE ad_paises SET CVE_PAIS='$cve_pais', DESCRIPCION='$descripcion', CODIGO='$codigo', CVE_CONTINENTE='$cve_continente' WHERE PAIS_KEY=$pais_key";

if ($conn->query($sql) === TRUE) {
    echo "País actualizado exitosamente";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
