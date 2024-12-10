document.addEventListener('DOMContentLoaded', function () {
    const addForm = document.getElementById('addForm');
    const editForm = document.getElementById('editForm');
    const countryTableBody = document.getElementById('countryTable').getElementsByTagName('tbody')[0];
    const editButton = document.getElementById('editButton');
    const deleteSelectedBtn = document.getElementById('deleteSelectedBtn');
    const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');

    function fetchCountries() {
        fetch('read.php')
            .then(function (response) {
                if (!response.ok) {
                    throw new Error('Error en la respuesta de la red');
                }
                return response.json();
            })
            .then(function (data) {
                countryTableBody.innerHTML = ''; // Limpia la tabla antes de agregar nuevos datos
                data.forEach(function (country) {
                    const row = countryTableBody.insertRow();
                    row.innerHTML = `
                        <td><input type="checkbox" data-id="${country.PAIS_KEY}"></td>
                        <td>${country.PAIS_KEY}</td>
                        <td>${country.CVE_PAIS}</td>
                        <td>${country.DESCRIPCION}</td>
                        <td>${country.CODIGO}</td>
                        <td>${country.CVE_CONTINENTE}</td>
                    `;
                });
            })
            .catch(function (error) {
                console.error('Hubo un problema con la operación fetch:', error);
            });
    }

    // Llama a fetchCountries al cargar la página
    fetchCountries();

    // Agrega un país nuevo al enviar el formulario
    addForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(addForm);
        fetch('create.php', {
            method: 'POST',
            body: formData
        })
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
                alert(data);
                fetchCountries();
                addForm.reset();
                $('#addModal').modal('hide');
            })
            .catch(function (error) {
                console.error('Hubo un problema con la operación fetch:', error);
            });
    });

    // Edita un país
    editButton.addEventListener('click', function () {
        const selectedCheckbox = document.querySelector('input[type="checkbox"]:checked');
        if (selectedCheckbox) {
            const id = selectedCheckbox.getAttribute('data-id');
            fetch(`getCountry.php?id=${id}`)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    if (data.error) {
                        alert(data.error);
                    } else {
                        document.getElementById('editId').value = data.PAIS_KEY;
                        document.getElementById('editClave').value = data.CVE_PAIS;
                        document.getElementById('editDescripcion').value = data.DESCRIPCION;
                        document.getElementById('editCodigo').value = data.CODIGO;
                        document.getElementById('editContinente').value = data.CVE_CONTINENTE;
                        $('#editModal').modal('show');
                    }
                })
                .catch(function (error) {
                    console.error('Error:', error);
                });
        } else {
            alert('Por favor, selecciona un país para editar.');
        }
    });

    // Actualiza un país
    editForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(editForm);
        fetch('update.php', {
            method: 'POST',
            body: formData
        })
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
                alert(data);
                fetchCountries();
                $('#editModal').modal('hide');
            })
            .catch(function (error) {
                console.error('Hubo un problema con la operación fetch:', error);
            });
    });

    // Elimina un país
    deleteSelectedBtn.addEventListener('click', function () {
        const selectedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        if (selectedCheckboxes.length > 0) {
            $('#confirmDeleteModal').modal('show');
        } else {
            alert('Por favor, selecciona al menos un país para eliminar.');
        }
    });

    confirmDeleteBtn.addEventListener('click', function () {
        const selectedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        const ids = Array.from(selectedCheckboxes).map(cb => cb.getAttribute('data-id')).join(',');

        fetch('delete.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `id=${ids}`
        })
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
                alert(data);
                fetchCountries();
                $('#confirmDeleteModal').modal('hide');
            })
            .catch(function (error) {
                console.error('Hubo un problema con la operación fetch:', error);
            });
    });

    document.addEventListener('DOMContentLoaded', function () {
        const selectAllCheckbox = document.getElementById('selectAllCheckbox');
        const checkboxes = document.querySelectorAll('.registro-checkbox');

        // Función para actualizar el estado del checkbox de la cabecera
        function updateSelectAllCheckbox() {
            const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
            selectAllCheckbox.checked = allChecked;
        }

        // Evento para el checkbox de la cabecera
        selectAllCheckbox.addEventListener('change', function () {
            checkboxes.forEach(checkbox => {
                checkbox.checked = this.checked;
            });
        });

        // Evento para cada checkbox individual
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                updateSelectAllCheckbox();
            });
        });
    });
});
