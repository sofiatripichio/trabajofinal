let btnform = document.getElementById("btnform");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let telefono = document.getElementById("telefono");
let email = document.getElementById("email");
let mensaje = document.getElementById("consulta");

btnform.addEventListener("click", (e) => {
    e.preventDefault();

    // Verifica si alguno de los campos está vacío
    if (!nombre.value || !apellido.value || !telefono.value || !email.value || !mensaje.value) {
        alert("Por favor, completa todos los campos.");
        return; // Detiene la ejecución del resto del código
    }

    // Si todos los campos están completos, guarda la información
    let informacion = [];
    informacion[0] = nombre.value;
    informacion[1] = apellido.value;
    informacion[2] = telefono.value;
    informacion[3] = email.value;
    informacion[4] = mensaje.value;

    console.log(informacion);

    let blob = new Blob([informacion], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "contact.txt");

    console.log(blob);
});
