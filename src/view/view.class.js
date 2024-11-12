export default class vista {
    constructor(controller) {
        this.form = document.getElementById('form');

        this.renderFortToAddBooks();
        
        this.booksList = document.getElementById('list');
        this.about = document.getElementById('about');
        this.remove = document.getElementById('delete');
        this.bookForm = document.getElementById('bookForm');
        this.message = document.getElementById('messages'); 
        

        
        this.controller = controller;
        
        
    }

    renderOptions(books) {
        this.booksList.innerHTML = books.map(book => `
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
                    <button class="cart" data-id="${book.id}">
                        <span class="material-icons">add_shopping_cart</span>
                    </button>
                    <button class="edit" data-id="${book.id}">
                        <span class="material-icons" >edit</span>
                    </button>
                    <button class="delete-btn" data-id="${book.id}">
                        <span class="material-icons">delete</span>
                    </button>
                </div>
            </div>
        `).join('');

        this.controller.handlerBookButonClicked();
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

       
    completarSelectModulos(modulos, selectedModuleCode = '') {
        this.moduleSelect = document.getElementById('id-module');
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
    
            if (modulo.code === selectedModuleCode) {
                option.selected = true;
            }
    
            this.moduleSelect.appendChild(option);
        });
    }
            
    

    renderFortToAddBooks(){
        
        if (this.form) {
            this.form.innerHTML = `
            <div class="form">
                <h2>Añadir libro</h2>
                <form id="bookForm">
                    <div>
                        <label for="id-module">Código del módulo:</label>
                        <select id="id-module" name="moduleCode"> </select>
                    </div>

                    <div>
                        <label for="publisher">Editorial:</label>
                        <input type="text" id="publisher" name="publisher" required>
                    </div>

                    <div>
                        <label for="price">Precio:</label>
                        <input type="number" id="price" name="price" required>
                    </div>

                    <div>
                        <label for="pages">Páginas:</label>
                        <input type="number" id="pages" name="pages" required>
                    </div>

                    <div>
                        <label>Estado:</label>
                        <label>
                            <input type="radio" name="status" value="good"> Good |
                        </label>
                        <label>
                            <input type="radio" name="status" value="bad"> Bad |
                        </label>
                        <label>
                            <input type="radio" name="status" value="regular"> Regular
                        </label>
                    </div>

                    <div>
                        <label for="comments">Comentarios:</label>
                        <textarea id="comments" name="comments"></textarea>
                    </div>
                    <button type="submit">Añadir</button>
                    <button type="reset">Reset</button>
                </form>    
            </div>
            `;
        }
        
    }

    renderFortToEditBooks(books, bookId, modules){
        const book = books.find(book => book.id == bookId);

        if (!book || !book.moduleCode) {
            console.error('No se encontró el libro o el módulo no está definido');
            return;
        }
    
        const moduleOptions = modules.map(module => {
            const selected = module.code === book.moduleCode ? 'selected' : '';
            return `
                <option value="${module.code}" ${selected}>
                    ${module.cliteral} (${module.code})
                </option>
            `;
        }).join('');
        this.form.innerHTML = `
            <div class="form">
                <h2>Editar libro</h2>
                <form id="bookForm">
                    <div>
                        <label for="id">ID del Libro:</label>
                        <input id="id" name="ID" value="${book.id}" readonly>
                    </div>

                    <div>
                        <label for="id-module">Código del módulo:</label>
                        <select id="id-module" name="moduleCode">
                            ${moduleOptions}
                        </select>
                    </div>

                    <div>
                        <label for="publisher">Editorial:</label>
                        <input type="text" id="publisher" name="publisher" value="${book.publisher}">
                    </div>

                    <div>
                        <label for="price">Precio:</label>
                        <input type="number" id="price" name="price" value="${book.price}">
                    </div>

                    <div>
                        <label for="pages">Páginas:</label>
                        <input type="number" id="pages" name="pages" value="${book.pages}">
                    </div>

                     <div>
                        <label>Estado:</label>
                        <label>
                            <input type="radio" name="status" value="good" ${book.status === 'good' ? 'checked' : ''}> Good |
                        </label>
                        <label>
                            <input type="radio" name="status" value="bad" ${book.status === 'bad' ? 'checked' : ''}> Bad |
                        </label>
                        <label>
                            <input type="radio" name="status" value="regular" ${book.status === 'regular' ? 'checked' : ''}> Regular
                        </label>
                    </div>

                    <div>
                        <label for="comments">Comentarios:</label>
                        <textarea id="comments" name="comments">${book.comments}</textarea>
                    </div>

                    <button type="submit">Editar</button>
                    <button type="reset">Reset</button>
                </form>    
            </div>
        `;

    }
}


