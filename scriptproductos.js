
    const productos = [
        { nombre: "Detergente para ropa", precio: 1000, stock: 10, imagen: 'imagenes/detergente ecologico.jpg', descripcion: "Descripción: detergente ecológico 60 láminas de lavado Ekomar" },
        { nombre: "Limpiador Multiuso", precio: 3500, stock: 20, imagen: "imagenes/limpiador.jpg", descripcion: "Descripción: Limpiador multiuso ecológico" },
        { nombre: "Dentífrico", precio: 5000, stock: 30, imagen: 'imagenes/dentifrico.jpg', descripcion: "Descripción: Dentrífico sólido en frasco ecológico Amarkuy" },
        { nombre: "Botella", precio: 15000, stock: 15, imagen: 'imagenes/boteella.jpg', descripcion: "Descripción: Botella de vidrio y bambú Sensorial" },
        { nombre: "Cepillo de dientes Bambu", precio: 7, stock: 75, imagen: 'imagenes/cepillodedientes.jpg', descripcion: "Descripción: Cepillo de dientes ecológico BioBrushS" },
        { nombre: "Mermelada", precio: 4000, stock: 16, imagen: 'imagenes/mermelada.jpg', descripcion: "Descripción: Mermelada casera de Frambuesa 500 g Delifrut" },
        { nombre: "Jugo de pera", precio: 1500, stock: 20, imagen: 'imagenes/jugo.jpg', descripcion: "Descripción: Jugo de pera natural 300ml" },
        { nombre: "Aceite Chia", precio: 6000, stock: 8, imagen: 'imagenes/aceite.jpg', descripcion: "Descripción: Aceite de chia 250ml" },
        { nombre: "Arroz", precio: 6000, stock: 20, imagen: 'imagenes/arroz.png', descripcion: "Descripción: Arroz en bolsa por kg" },
        { nombre: "Lentejas", precio: 5000, stock: 20, imagen: 'imagenes/lentejas.jpg', descripcion: "Descripción: Lentejas en bolsa por kg" },
        { nombre: "Garbanzos", precio: 3000, stock: 20, imagen: 'imagenes/garbanzos.jpg', descripcion: "Descripción: Garbanzos en bolsa 500 gramos" },
        { nombre: "Frutos secos", precio: 10000, stock: 20, imagen: 'imagenes/frutossecos.jpg', descripcion: "Mix de frutos secos 500 gramos" },
        { nombre: "Harina integral", precio: 3000, stock: 25, imagen: 'imagenes/harina.jpg', descripcion: "Descripción: Harina integral de trigo Campo Claro 1 kg" },
        { nombre: "Leche de vaca", precio: 3000, stock: 36, imagen: 'imagenes/leche.WEBP', descripcion: "Descripción: Leche de vaca de libre pastoreo 1 litro" },
        { nombre: "Maple de huevos", precio: 7000, stock: 18, imagen: 'imagenes/huevos.jpg', descripcion: "Maple, 30 huevos, libre pastoreo" },
        { nombre: "Pechuga de pollo", precio: 5000, stock: 6, imagen: 'imagenes/pollo.jpg', descripcion: "Descripción: Pechuga de pollo pastoril 500 gramos" },
        { nombre: "Bolson de verduras", precio: 9000, stock: 15, imagen: 'imagenes/verduras.png', descripcion: "Descripción: Bolson mix de verduras de estación 5 Kg" },
        { nombre: "Cajon de frutas", precio: 13000, stock: 20, imagen: 'imagenes/frutas.jpg', descripcion: "Descripción: Cajón de frutas de estación 5 Kg" },
        { nombre: "Queso Gouda", precio: 16000, stock: 9, imagen: 'imagenes/gouda.jpg', descripcion: "Descripción: Queso Gouda de granja casero, vacas libres por 1 kg" },
        { nombre: "Queso Sardo", precio: 12000, stock: 10, imagen: 'imagenes/sardo.jpg', descripcion: "Descripción: Queso Sardo de granja casero, vacas libres por 1 kg" }
    ];
 /* se define una arreglo: productos que contiene una lista de productos con sus propiedades: precio, stock, nombre, descripción*/
    
 const productosDiv = document.getElementById('productos');
     /* declara la variable productosDiv que almacenara el eleemnto de HTML com Id "productos" */

productos.forEach((producto, index) => {   /* for.Each es un metodo que ejecuta una funcion para cada elemeto del arreglo usa el prodcuto y
    el index: la posición dentro del arreglo */
    const productoDiv = document.createElement('div');  /* defininimos productoDiv  para almacenar un elemento (que no esta en html) llamado div*/
    productoDiv.className = 'producto'; /* le permite tener una clase  a los div sin estar en html*/
    productoDiv.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-imagen">
        <p class="producto-nombre">${producto.nombre}</p>
        <p class="productodescripcion">${producto.descripcion}</p>
        <p class="productostock"> Stock: ${producto.stock}  -   Precio: $${producto.precio.toFixed(2)}</p>
        <label for="cantidad-${index}" class="producto-label">Cantidad:</label>
        <input type="number" id="cantidad-${index}" value="0" min="0">
       
    `; /* le damos contenido nuevo div como contenido HTML, la comilla(`) permite incluir varibles como una plantilla de cadena, 
    agregamos la imagen de cada prodcuto , asignamos lo "p" que iran en cada div y le damos una clase a cada uno ,
    dentro de cada ${} se agregan los valores del arreglo, en el input de cantidad se agrega un valor 0 de base y 0 de minimo*/
    productosDiv.appendChild(productoDiv); 
    /* usamos el metodo appenchild para agregar un hijo (productosDiv (que contiene la informacion sobre prodcutos), al padre productoDiv 
    para agregarlo dentro de el*/
});

function calcularTotal() {
    let total = 0;   /* definimos total y lo inicializamos en 0 */
    let error = false; /* definimos error como FALSE*/
    let mensajeError = ''; /* definimos el mensaje de error sin texto aun*/

    productos.forEach((producto, index) => { /*  de nuevo usamos for.Each para ejecutar funcion para cada elemeto del arreglo*/
        const cantidadInput = document.getElementById(`cantidad-${index}`);/* definimos cantidadInput como la cantidad seleccionada por el usuario */
        const cantidad = parseInt(cantidadInput.value); /* definimos cantidad como el numero entero (usando perseiNT) de la cantidad ingresada por el usuario */

        if (cantidad > producto.stock) {
            error = true;  /* Si la cantidad es mayor al stock la variable error pasara a true y se ejecutara el mensaje error*/
            mensajeError += `No puedes seleccionar más de ${producto.stock} ${producto.nombre}. \n`; 
            /* Si la cantidad es mayor al stock se le agrega texto a mensajeError para indicarle que no puede seleccionar mas de X cantidad 
            de X prodcutos, \n` es un salto de línea por si eligió mayor cantidad disponible al stock en mas de un producto  */
        } else {
            total += producto.precio * cantidad; /* si no, el total pasara a ser el precio del producto por cantidad */
        }
    });

    if (error) {
        alert(mensajeError.trim());  /* Si error es True , se ejecuta un mensaje de tipo alert con el mensaje error, 
        el .trim elimina los espacios al principio y final de la cadena de texto*/
    } else {
        document.getElementById('total').innerText = `Total de la compra $: ${total}`;
    }   /* si no al elemento total (buscado por el ID en html) se lo mofica agregarndo el total */
}