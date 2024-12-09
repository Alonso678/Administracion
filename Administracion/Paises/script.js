document.addEventListener('DOMContentLoaded', function () {
    const countryForm = document.getElementById('countryForm');
    const countryTable = document.getElementById('countryTable').getElementsByTagName('tbody')[0];

    // Fetch countries
    function fetchCountries() {
        fetch('read.php')
            .then(response => response.json())
            .then(data => {
                countryTable.innerHTML = '';
                data.forEach(country => {
                    const row = countryTable.insertRow();
                    row.innerHTML = `
                        <td><input type="checkbox" class="select-row"></td>
                        <td>${country.PAIS_KEY}</td>
                        <td>${country.CVE_PAIS}</td>
                        <td>${country.DESCRIPCION}</td>
                        <td>${country.CODIGO}</td>
                        <td>${country.CVE_CONTINENTE}</td>
                    `;
                });
            });
    }

    // Add new country
    countryForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(countryForm);
        fetch('create.php', {
            method: 'POST',
            body: formData
        })
            .then(response => response.text())
            .then(data => {
                alert(data);
                fetchCountries();
                countryForm.reset();
            });
            console.log(formData);
    });

    document.getElementById('deleteSelectedBtn').addEventListener('click', function() {
    // Seleccionar todos los checkboxes que están marcados
    const selectedIds = Array.from(document.querySelectorAll('.select-row:checked'))
        .map(checkbox => checkbox.getAttribute('data-id'));

        console.log(selectedIds);

    // Verificar si hay al menos un checkbox seleccionado
    if (selectedIds.length === 0) {
        alert('Por favor, selecciona al menos un registro para eliminar.');
        return;
    }

    // Mostrar el modal de confirmación
    $('#confirmDeleteModal').modal('show');

    // Manejar la confirmación de eliminación
    document.getElementById('confirmDeleteBtn').onclick = function() {
        $('#confirmDeleteModal').modal('hide');

        fetch('delete.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ pais_keys: selectedIds })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Registros eliminados exitosamente.');
                // Eliminar las filas correspondientes de la tabla
                selectedIds.forEach(id => {
                    const checkbox = document.querySelector(`.registro-checkbox[data-id="${id}"]`);
                    if (checkbox) {
                        checkbox.closest('tr').remove();
                    }
                });
            } else {
                alert('Error al eliminar los registros.');
            }
        })
        .catch(error => console.error('Error:', error));
    };
});

    // Initially fetch countries
    fetchCountries();
});
