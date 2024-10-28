class vista {
    constructor() {
        this.booksList = document.getElementById('list');
        this.about = document.getElementById('about');
        this.form = document.getElementById('form');
        this.remove = document.getElementById('remove');
        this.bookForm = document.getElementById('form');
        this.message = document.getElementById('messages');
    }

    rendererizarLibros(books) {
        this.booksList.innerHTML = `
            <img src="#" alt="Libro:${books.id}">
            <div>
                <h3>${books.title}</h3>
                <h4>${books.editorial}</h4>
                <p>${books.pages} páginas</p>
                <p>Estado: ${books.condition}</p>
                ${books.isSold ? `<p>Vendido el ${books.soldDate}</p>` : `<p>En venta</p>`}
                <p>${books.comments}</p>
                <h4>${books.price} €</h4>
            </div>
        `;
    }

    mostrarMensaje(mensaje, tipo) {
        this.message.innerHTML = `
        <div class="_tipo-recibido_ alert alert-${tipo} alert-dismissible" role="alert">
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
            event.preventDefault()
            const formData = new FormData(this.bookForm);
            const bookData = Object.fromEntries(formData.entries());
            callback(bookData);
        })
       }
       
       setBookRemoveHandler(callback) {
         this.remove.addEventListener('click', () => {
            const idABorrar = document.getElementById('id-remove').value;
            callback(idABorrar);
         })
       }
}

export default vista;   
