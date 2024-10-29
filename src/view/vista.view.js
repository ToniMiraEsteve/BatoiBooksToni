class vista {
    constructor() {
        this.booksList = document.getElementById('list');
        this.about = document.getElementById('about');
        this.form = document.getElementById('form');
        this.remove = document.getElementById('remove');
        this.bookForm = document.getElementById('form');
        this.message = document.getElementById('messages');
    }

    renderOptions(books) {
        document.getElementById('list').innerHTML = books.map(book => `
            <div class="card">
                <img src="#" alt="Libro: ${book.id}">
                <div>
                    <h3>${book.title}</h3>
                    <h4>${book.editorial}</h4>
                    <p>${book.pages} páginas</p>
                    <p>Estado: ${book.condition}</p>
                    ${book.isSold ? `<p>Vendido el ${book.soldDate}</p>` : `<p>En venta</p>`}
                    <p>${book.comments}</p>
                    <h4>${book.price} €</h4>
                </div>
            </div>
        `).join('');
    }

    mostrarMensaje(mensaje, tipo) {
        this.message.innerHTML = `
            <div class="alert alert-${tipo} alert-dismissible" role="alert">
                ${mensaje}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick="this.parentElement.remove()">x</button>
            </div>
        `;

        if (tipo !== 'error') {
            setTimeout(() => {
                this.message.innerHTML = '';
            }, 3000);
        }
    }

    setBookSubmitHandler(callback) {  
        this.bookForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(this.bookForm);
            const bookData = Object.fromEntries(formData.entries());
            callback(bookData);
        });
    }
       
    setBookRemoveHandler(callback) {
        this.remove.addEventListener('click', () => {
            const idABorrar = document.getElementById('id-remove').value;
            callback(idABorrar);
        });
    }

       
    completarSelectModulos(modulos) {
        this.moduleSelect.innerHTML = '';
        modulos.forEach(modulo => {
            const option = document.createElement('option');
            option.textContent = modulo.nombre;
            this.moduleSelect.appendChild(option);
        });
    }
}

export default vista;   
