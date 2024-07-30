
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

    const productosDiv = document.getElementById('productos');

productos.forEach((producto, index) => {
    const productoDiv = document.createElement('div');
    productoDiv.className = 'producto';
    productoDiv.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-imagen">
        <p class="producto-nombre">${producto.nombre}</p>
        <p class="productodescripcion">${producto.descripcion}</p>
        <p class="productostock"> Stock: ${producto.stock}  -   Precio: $${producto.precio.toFixed(2)}</p>
        <label for="cantidad-${index}" class="producto-label">Cantidad:</label>
        <input type="number" id="cantidad-${index}" value="0" min="0" max="${producto.stock}">
    `;
    productosDiv.appendChild(productoDiv);
});

function calcularTotal() {
    let total = 0;
    let error = false;
    let mensajeError = '';

    productos.forEach((producto, index) => {
        const cantidadInput = document.getElementById(`cantidad-${index}`);
        const cantidad = parseInt(cantidadInput.value);

        if (cantidad > producto.stock) {
            error = true;
            mensajeError += `No puedes seleccionar más de ${producto.stock} ${producto.nombre}. \n`;
        } else {
            total += producto.precio * cantidad;
        }
    });

    if (error) {
        alert(mensajeError.trim());
    } else {
        document.getElementById('total').innerText = `Total de la compra $: ${total.toFixed(2)}`;
    }
}