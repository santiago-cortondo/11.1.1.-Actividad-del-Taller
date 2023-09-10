document.addEventListener("DOMContentLoaded", function () {
    const nombre = document.getElementById("nombre");
    const enviar = document.getElementById("enviar");
    const resultado = document.getElementById("resultado");

    enviar.addEventListener("click", function () {
        const nom = nombre.value.trim();
        if (nom) {
            fetch(`https://api.agify.io/?name=${nom}`)
                .then(response => response.json())
                .then(data => {
                    resultado.innerHTML = `Nombre: ${data.name}<br>Edad: ${data.age}`;
                })
                .catch(error => {
                    resultado.innerHTML = "Error";
                });
        }
    });
});