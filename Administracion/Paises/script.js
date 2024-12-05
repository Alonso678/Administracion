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
    });

    // Edit country

    document.addEventListener('DOMContentLoaded', function () {
        // Asumiendo que los botones de edición tienen la clase 'edit-btn'
        const editButtons = document.querySelectorAll('.edit-btn');

        editButtons.forEach(button => {
            button.addEventListener('click', function () {
                // Obtener el id del registro a editar
                const id = this.getAttribute('data-id');

                // Obtener la fila correspondiente
                const row = document.querySelector(`tr[data-id='${id}']`);

                // Obtener los datos de la fila
                const cvePais = row.querySelector('.cve_pais').textContent;
                const descripcion = row.querySelector('.descripcion').textContent;
                const codigo = row.querySelector('.codigo').textContent;
                const cveContinente = row.querySelector('.cve_continente').textContent;

                // Rellenar los campos del modal
                document.getElementById('editClave').value = cvePais;
                document.getElementById('editDescripcion').value = descripcion;
                document.getElementById('editCodigo').value = codigo;
                document.getElementById('editContinente').value = cveContinente;
            });
        });
    });



    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('deleteSelectedBtn').addEventListener('click', function () {
            const selectedCheckboxes = document.querySelectorAll('.select-row:checked');
            const idsToDelete = Array.from(selectedCheckboxes).map(checkbox => checkbox.getAttribute('data-id'));
            // Delete country
            if (idsToDelete.length > 0) {
                if (confirm('¿Estás seguro de que deseas eliminar los países seleccionados?')) {
                    fetch('delete.php', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        body: `pais_keys=${idsToDelete.join(',')}`
                    })
                        .then(response => response.json())
                        .then(data => {
                            alert(data);
                            fetchCountries();
                        })
                        .catch(error => console.error('Error al cargar los datos:', error));
                }
            } else {
                alert('Por favor, selecciona al menos un país para eliminar.');
            }
        });
    });

    // Initially fetch countries
    fetchCountries();
});
