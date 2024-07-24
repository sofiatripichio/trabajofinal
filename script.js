<script>
    document.addEventListener('DOMContentLoaded', function() {
        const articles = document.querySelectorAll('.article');
        const totalContainer = document.getElementById('total-container');
        let total = 0;

        articles.forEach(article => {
            const addToCartButton = article.querySelector('.add-to-cart');
            const price = parseInt(article.dataset.precio);
            let stock = parseInt(article.dataset.stock);

            addToCartButton.addEventListener('click', function() {
                const inputCantidad = article.querySelector('input[name="Cantidad"]');
                const cantidad = parseInt(inputCantidad.value);

                if (cantidad > 0 && cantidad <= stock) {
                    total += cantidad * price;
                    stock -= cantidad;
                    article.dataset.stock = stock.toString();
                    inputCantidad.value = '';
                    updateTotal();
                } else {
                    alert(`Cantidad no válida. Stock disponible: ${stock}`);
                }
            });
        });

        function updateTotal() {
            totalContainer.innerHTML = `<p>Total a pagar: $${total}</p><button class="finalizar-compra">Finalizar compra</button>`;

            const finalizarCompraButton = totalContainer.querySelector('.finalizar-compra');
            finalizarCompraButton.addEventListener('click', function() {
                alert(`Compra finalizada. Total a pagar: $${total}`);
                resetCart();
            });
        }

        function resetCart() {
            total = 0;
            totalContainer.innerHTML = '';
            articles.forEach(article => {
                article.dataset.stock = article.getAttribute('data-stock');
            });
        }
    });
</script>
