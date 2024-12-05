document.addEventListener('DOMContentLoaded', function() {
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
    countryForm.addEventListener('submit', function(event) {
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
    window.editCountry = function(id) {
        // Fetch country data and fill the form for editing
    };

    // Delete country
    window.deleteCountry = function(id) {
        if (confirm('¿Estás seguro de que deseas eliminar este país?')) {
            fetch('delete.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `pais_key=${id}`
            })
            .then(response => response.text())
            .then(data => {
                alert(data);
                fetchCountries();
            });
        }
    };

    // Initially fetch countries
    fetchCountries();
});
