document.addEventListener('DOMContentLoaded', function() {
    const productos = [
        { nombre: "Detergente para ropa", precio: 1000, stock: 100, imagen: 'imagenes/detergente ecologico.jpg',descripcion:"Decripción: detergente ecológico 60 láminas de lavado Ekomar " },
        { nombre: "Limpiador Multiuso", precio:3500, stock: 50, imagen: "imagenes/limpiador.jpg",descripcion:"Decripción: Limpiador multiuso ecológico",},
        { nombre: "Dentífrico", precio:5000, stock: 75, imagen: 'imagenes/dentifrico.jpg',descripcion:"Decripción: Dentrífico sólido en frasco ecológico Amarkuy",},
        { nombre: "Botella", precio:15000, stock: 75, imagen: 'imagenes/boteella.jpg',descripcion:"Descripción: Botella de vidrio y bambu Sensorial",},
        { nombre: "Cepillo de dientes Bambu", precio:3000, stock: 75, imagen: 'imagenes/cepillodedientes.jpg',descripcion:"Decripción: Cepillo de dientes ecológico BioBrushS",},
        { nombre: "Mermelada", precio:4000, stock: 75, imagen: 'imagenes/mermelada.jpg',descripcion:"Decripción: Mermalada casera de Frambuesa 500 g Delifrut",},
        { nombre: "Jugo de pera", precio:1500, stock: 75, imagen: 'imagenes/jugo.jpg',descripcion:"Decripción: Jugo de pera natural 300ml",},
        { nombre: "Aceite Chia", precio:6000, stock: 75, imagen: 'imagenes/aceite.jpg',descripcion:"Decripción:Aceite de chia 250ml",},
        { nombre: "Arroz", precio:6000, stock: 75, imagen: 'imagenes/arroz.png',descripcion:"Decripción: Arroz en bolsa por kg",},
        { nombre: "Lentejas", precio:5000, stock: 75, imagen: 'imagenes/lentejas.jpg',descripcion:"Decripción: Lentejas en bolsa por kg",},
        { nombre: "Garbanzos", precio:3000, stock: 75, imagen: 'imagenes/garbanzos.jpg',descripcion:"Decripción: Garbanzos en bolsa 500 gramos",},
        { nombre: "Frutos secos", precio:10000, stock: 75, imagen: 'imagenes/frutossecos.jpg',descripcion:"Mix de friutos secos 500 gramos",},
        { nombre: "Harina integral", precio:3000, stock: 75, imagen: 'imagenes/harina.jpg',descripcion:"Decripción: Harina integral de trigo Campo Claro 1 kg",},
        { nombre: "Leche de vaca", precio:3000, stock: 75, imagen: 'imagenes/leche.WEBP',descripcion:"Decripción: Leche de vaca de libre pastoreo 1 litro",},
        { nombre: "Maple de huevos", precio:7000, stock: 75, imagen: 'imagenes/huevos.jpg',descripcion:"Maple, 30 huevos, libre pastoreo",},
        { nombre: "Pechuga de pollo", precio:5000, stock: 75, imagen: 'imagenes/pollo.jpg',descripcion:"Decripción: Pechuga de pollo pastoril 500 gramos",},
        { nombre: "Bolson de verduras", precio:9000, stock: 75, imagen: 'imagenes/verduras.png',descripcion:"Decripción: Bolson mix de verduras de estación 5 Kg",},
        { nombre: "Cajon de frutas", precio:13000, stock: 75, imagen: 'imagenes/frutas.jpg',descripcion:"Decripción: Cajon de frutas de estación 5 Kg",},
        { nombre: "Queso Gouda", precio:16000, stock: 75, imagen: 'imagenes/gouda.jpg',descripcion:"Decripción: Queso Gouda de granja casero, vacas libres por 1 kg",},
        { nombre: "Queso Sardo", precio:12000, stock: 75, imagen: 'imagenes/sardo.jpg',descripcion:"Decripción: Queso Sardo de granja casero, vacas libres por 1 kg",},

    ];

    const productosDiv = document.getElementById('productos');

    productos.forEach((producto, index) => {
        const productoDiv = document.createElement('div');
        productoDiv.className = 'producto'; // Asignar la clase 'producto'
        productoDiv.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-imagen">
            <p class="producto-nombre">${producto.nombre}</p>
            <p class="productodescripcion">${producto.descripcion}</p>
            <p class="productoprecio"> $${producto.precio.toFixed(2)}</p>
            <label for="cantidad-${index}" class="producto-label">Cantidad:</label>
            <input type="number" id="cantidad-${index}" value="0" min="0" max="${producto.stock}" data-stock="${producto.stock}" class="producto-input">
        `;
        productosDiv.appendChild(productoDiv);
    });
});

function realizarCompra() {
    const productos = [
        { nombre: "Detergente para ropa", precio: 1000, stock: 100, imagen: 'imagenes/detergente ecologico.jpg',descripcion:"Decripción: detergente ecológico 60 láminas de lavado Ekomar " },
        { nombre: "Limpiador Multiuso", precio:3500, stock: 50, imagen: "imagenes/limpiador.jpg",descripcion:"Decripción: Limpiador multiuso ecológico",},
        { nombre: "Dentífrico", precio:5000, stock: 75, imagen: 'imagenes/dentifrico.jpg',descripcion:"Decripción: Dentrífico sólido en frasco ecológico Amarkuy",},
        { nombre: "Botella", precio:15000, stock: 75, imagen: 'imagenes/boteella.jpg',descripcion:"Descripción: Botella de vidrio y bambu Sensorial",},
        { nombre: "Cepillo de dientes Bambu", precio:3000, stock: 75, imagen: 'imagenes/cepillodedientes.jpg',descripcion:"Decripción: Cepillo de dientes ecológico BioBrushS",},
        { nombre: "Mermelada", precio:4000, stock: 75, imagen: 'imagenes/mermelada.jpg',descripcion:"Decripción: Mermalada casera de Frambuesa 500 g Delifrut",},
        { nombre: "Jugo de pera", precio:1500, stock: 75, imagen: 'imagenes/jugo.jpg',descripcion:"Decripción: Jugo de pera natural 300ml",},
        { nombre: "Aceite Chia", precio:6000, stock: 75, imagen: 'imagenes/aceite.jpg',descripcion:"Decripción:Aceite de chia 250ml",},
        { nombre: "Arroz", precio:6000, stock: 75, imagen: 'imagenes/arroz.png',descripcion:"Decripción: Arroz en bolsa por kg",},
        { nombre: "Lentejas", precio:5000, stock: 75, imagen: 'imagenes/lentejas.jpg',descripcion:"Decripción: Lentejas en bolsa por kg",},
        { nombre: "Garbanzos", precio:3000, stock: 75, imagen: 'imagenes/garbanzos.jpg',descripcion:"Decripción: Garbanzos en bolsa 500 gramos",},
        { nombre: "Frutos secos", precio:10000, stock: 75, imagen: 'imagenes/frutossecos.jpg',descripcion:"Mix de friutos secos 500 gramos",},
        { nombre: "Harina integral", precio:3000, stock: 75, imagen: 'imagenes/harina.jpg',descripcion:"Decripción: Harina integral de trigo Campo Claro 1 kg",},
        { nombre: "Leche de vaca", precio:3000, stock: 75, imagen: 'imagenes/leche.WEBP',descripcion:"Decripción: Leche de vaca de libre pastoreo 1 litro",},
        { nombre: "Maple de huevos", precio:7000, stock: 75, imagen: 'imagenes/huevos.jpg',descripcion:"Maple, 30 huevos, libre pastoreo",},
        { nombre: "Pechuga de pollo", precio:5000, stock: 75, imagen: 'imagenes/pollo.jpg',descripcion:"Decripción: Pechuga de pollo pastoril 500 gramos",},
        { nombre: "Bolson de verduras", precio:9000, stock: 75, imagen: 'imagenes/verduras.png',descripcion:"Decripción: Bolson mix de verduras de estación 5 Kg",},
        { nombre: "Cajon de frutas", precio:13000, stock: 75, imagen: 'imagenes/frutas.jpg',descripcion:"Decripción: Cajon de frutas de estación 5 Kg",},
        { nombre: "Queso Gouda", precio:16000, stock: 75, imagen: 'imagenes/gouda.jpg',descripcion:"Decripción: Queso Gouda de granja casero, vacas libres por 1 kg",},
        { nombre: "Queso Sardo", precio:12000, stock: 75, imagen: 'imagenes/sardo.jpg',descripcion:"Decripción: Queso Sardo de granja casero, vacas libres por 1 kg",},

    ];

    let totalCompra = 0;
    let error = false;

    productos.forEach((producto, index) => {
        const cantidadInput = document.getElementById(`cantidad-${index}`);
        const cantidad = parseInt(cantidadInput.value, 10);
        const stock = parseInt(cantidadInput.dataset.stock, 10);

        if (isNaN(cantidad) || cantidad < 0 || cantidad > stock) {
            error = true;
        } else {
            totalCompra += cantidad * producto.precio;
        }
    });

    const resultadoDiv = document.getElementById('resultado');
    if (error) {
        resultadoDiv.innerHTML = '<p style="color: red;">Error: Cantidad inválida en uno o más productos.</p>';
    } else {
        resultadoDiv.innerHTML = `<p>Total a pagar: $${totalCompra.toFixed(2)}</p>`;
    }
}

