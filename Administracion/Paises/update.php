<?php
include 'conexion.php';

$pais_key = $_POST['pais_key']; // Asegúrate de que el nombre del campo coincide con el del formulario
$clave_desc = $_POST['cve_pais'];
$descripcion = $_POST['descripcion'];
$codigo = $_POST['codigo'];
$cve_continente = $_POST['cve_continente'];

$sql = "UPDATE ad_paises SET clave_desc='$clave_desc', descripcion='$descripcion', codigo='$codigo', cve_continente='$cve_continente' WHERE pais_key=$pais_key";

if ($conn->query($sql) === TRUE) {
    echo "País actualizado exitosamente";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
