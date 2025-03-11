document.addEventListener('DOMContentLoaded', function() {
    const addForm = document.getElementById('addForm');
    const editForm = document.getElementById('editForm');
    const countryTableBody = document.getElementById('countryTable').getElementsByTagName('tbody')[0];
    const deleteSelectedBtn = document.getElementById('deleteSelectedBtn');
    const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');

    function fetchCountries() {
        fetch('read.php')
            .then(function(response) {
                if (!response.ok) {
                    throw new Error('Error en la respuesta de la red');
                }
                return response.json();
            })
            .then(function(data) {
                countryTableBody.innerHTML = ''; // Limpia la tabla antes de agregar nuevos datos
                data.forEach(function(country) {
                    const row = countryTableBody.insertRow();
                    row.innerHTML = `
                        <td><input type="checkbox" data-id="${country.pais_key}"></td>
                        <td>${country.pais_key}</td>
                        <td>${country.clave_desc}</td>
                        <td>${country.descripcion}</td>
                        <td>${country.codigo}</td>
                        <td>${country.cve_continente}</td>
                        <td>
                            <button class="btn btn-warning btn-animado-edit mr-2 edit-row-btn" data-id="${country.pais_key}" data-toggle="modal" data-target="#editModal">Editar</button>
                            <button class="btn btn-danger btn-animado-del mr-2 delete-row-btn" data-id="${country.pais_key}" data-toggle="modal" data-target="#confirmDeleteModal">Eliminar</button>
                        </td>
                    `;
                });
            })
            .catch(function(error) {
                console.error('Hubo un problema con la operación fetch:', error);
            });
    }

    // Llama a fetchCountries al cargar la página
    fetchCountries();

    // Agrega un país nuevo al enviar el formulario
    addForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(addForm);
        fetch('create.php', {
            method: 'POST',
            body: formData
        })
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            alert(data);
            fetchCountries();
            addForm.reset();
            $('#addModal').modal('hide');
        })
        .catch(function(error) {
            console.error('Hubo un problema con la operación fetch:', error);
        });
    });

    // Edita un país
    document.addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('edit-row-btn')) {
            const id = event.target.getAttribute('data-id');
            fetch(`getCountry.php?id=${id}`)
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    if (data.error) {
                        alert(data.error);
                    } else {
                        document.getElementById('editId').value = data.pais_key;
                        document.getElementById('editClave').value = data.clave_desc;
                        document.getElementById('editdescripcion').value = data.descripcion;
                        document.getElementById('editCodigo').value = data.codigo;
                        document.getElementById('editContinente').value = data.cve_continente;
                        $('#editModal').modal('show');
                    }
                })
                .catch(function(error) {
                    console.error('Error:', error);
                });
        }
    });

    // Actualiza un país
    editForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(editForm);
        fetch('update.php', {
            method: 'POST',
            body: formData
        })
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            alert(data);
            fetchCountries();
            $('#editModal').modal('hide');
        })
        .catch(function(error) {
            console.error('Hubo un problema con la operación fetch:', error);
        });
    });

    // Muestra el modal de confirmación de eliminación
    document.addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('delete-row-btn')) {
            const id = event.target.getAttribute('data-id');
            document.getElementById('confirmDeleteBtn').setAttribute('data-id', id);
            $('#confirmDeleteModal').modal('show');
        }
    });

    // Confirma la eliminación de un país
    confirmDeleteBtn.addEventListener('click', function() {
        const id = confirmDeleteBtn.getAttribute('data-id');
        fetch('delete.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `id=${id}`
        })
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            alert(data);
            fetchCountries();
            $('#confirmDeleteModal').modal('hide');
        })
        .catch(function(error) {
            console.error('Hubo un problema con la operación fetch:', error);
        });
    });

    // Elimina países seleccionados
    deleteSelectedBtn.addEventListener('click', function() {
        const selectedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        if (selectedCheckboxes.length > 0) {
            const ids = Array.from(selectedCheckboxes).map(cb => cb.getAttribute('data-id')).join(',');
            fetch('delete.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `id=${ids}`
            })
            .then(function(response) {
                return response.text();
            })
            .then(function(data) {
                alert(data);
                fetchCountries();
            })
            .catch(function(error) {
                console.error('Hubo un problema con la operación fetch:', error);
            });
        } else {
            alert('Por favor, selecciona al menos un país para eliminar.');
        }
    });

    // Selecciona todos los checkboxes
    const selectAllCheckbox = document.getElementById('selectAllCheckbox');
    selectAllCheckbox.addEventListener('change', function() {
        const checkboxes = countryTableBody.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(function(checkbox) {
            checkbox.checked = selectAllCheckbox.checked;
        });
    });
});
