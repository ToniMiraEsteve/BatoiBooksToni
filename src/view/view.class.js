class vista {
    constructor() {
        this.booksList = document.getElementById('list');
        this.about = document.getElementById('about');
        this.form = document.getElementById('form');
        this.remove = document.getElementById('remove');
        this.bookForm = document.getElementById('bookForm');
        this.message = document.getElementById('messages'); 
        this.moduleSelect = document.getElementById('id-module');
    }

    renderOptions(books) {
        document.getElementById('list').innerHTML = books.map(book => `
            <div class="card">
                <img src="#">
                <div>
                    <h3>${book.id}</h3>
                    <h4>${book.publisher}</h4>
                    <p>${book.pages} páginas</p>
                    <p>Estado: ${book.status}</p>
                    ${book.soldDate ? `<p>Vendido el ${book.soldDate}</p>` : `<p>En venta</p>`}
                    <p>${book.comments}</p>
                    <h4>${book.price} €</h4>
                </div>
            </div>
        `).join('');
    }

    mostrarMensaje(mensaje, tipo) {
        const alertClass = tipo === 'error' ? 'alert-danger' : 'alert-info';
        this.message.innerHTML = `
            <div class="alert ${alertClass} alert-dismissible" role="alert">
                ${mensaje}
                <button type="button" class="btn-close" aria-label="Close" onclick="this.parentElement.remove()">x</button>
            </div>
        `;

        if (tipo !== 'error') {
            setTimeout(() => {
                this.message.innerHTML = '';
            }, 3000);
        }
    }

    setBookSubmitHandler(callback) {
        const form = document.getElementById("bookForm");
        if (!form) {
            throw new Error('Formulario "bookForm" no encontrado en el DOM.');
        }

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const bookData = {
                moduleCode: document.querySelector("#id-module").value,
                publisher: document.querySelector("#publisher").value,
                price: document.querySelector("#price").value,
                pages: document.querySelector("#pages").value,
                status: document.querySelector("input[name='status']:checked")?.value || '', 
                comments: document.querySelector("#comments").value,
            };

            if (!bookData.status) {
                this.mostrarMensaje('Error: Debe seleccionar un estado para el libro.', 'error');
                return;
            }

            callback(bookData);
        });
    }
       
    setBookRemoveHandler(callback) {
        try {
            if (!this.remove) {
                throw new Error('Error: El botón de eliminación (remove) no está disponible. Asegúrate de que el botón esté presente en el DOM.');
            }
    
            this.remove.addEventListener('click', () => {
                const idABorrar = document.getElementById('id-remove').value;
                if (!idABorrar) {
                    this.mostrarMensaje('Por favor, proporciona un ID válido para borrar el libro.', 'warning');
                    return;
                }
                callback(idABorrar);
            });
        } catch (error) {
            this.mostrarMensaje(error.message, 'Error');
        }
    }

       
    completarSelectModulos(modulos) {
        if (!this.moduleSelect) {
            this.mostrarMensaje('Error: El selector de módulos (moduleSelect) no está definido o no existe en el DOM.', 'error');
            return;
        }
    
        this.moduleSelect.innerHTML = ''; 

        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = '- Selecciona un módulo -';
        defaultOption.disabled = true;
        defaultOption.selected = true;
        this.moduleSelect.appendChild(defaultOption);

        modulos.forEach(modulo => {
            const option = document.createElement('option');
            option.value = modulo.code;
            option.textContent = modulo.cliteral; 
            this.moduleSelect.appendChild(option); 
        });
    }
}
export default vista;   
