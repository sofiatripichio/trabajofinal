let btnform = document.getElementById("btnform");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let telefono = document.getElementById("telefono");
let email = document.getElementById("email");
let mensaje = document.getElementById("consulta");
/* definimos varibbles y las asociamos a los elementos correspondientes en html con el id */
btnform.addEventListener("click", (e) => { /* al escuchar el click del boton se ejecuta la funcion */
    e.preventDefault(); /* evitamos que el formulario se envíe de manera predeterminada al servidor cuando se envía*/

   /* Verificamos si alguno de los campos esta vacío */
    if (!nombre.value || !apellido.value || !telefono.value || !email.value || !mensaje.value) {
        alert("Por favor, completa todos los campos.");
        return; 
        /* En js si alguna cadena de texto esta vacia ("") lo considera FALSE, 
        el signo de !  las convierte en TRUE , || : si alguno de los elementos es true devuelve TRUE
        si la condicion if es TRUE manda el mensaje de tipo alert y return detiene la ejecución del resto del código */
    }

    /* se ejecuta el resto */
    let informacion = []; /* se define informacion como un arreglo vacio */
    informacion[0] = nombre.value;
    informacion[1] = apellido.value;
    informacion[2] = telefono.value;
    informacion[3] = email.value;
    informacion[4] = mensaje.value;
/* se le asignan los valores ingresados en el formulario a cada indice del arreglo*/
    
console.log(informacion); /* se asegura que los valores se hayan guardado*/
    
    let blob = new Blob([informacion], { type: "text/plain;charset=utf-8" }); /* se define blob como un nuevo objeto Blob 
    que almacena la informacion del arreglo "Informacion" como texto plano con codificación UTF-8.*/
    saveAs(blob, "contacto.txt"); /* saveAs es una funcion de FileSaver que guarda el Blob como un archivo descargable con el nommbre contacto.txt*/

    console.log(blob); 

});
