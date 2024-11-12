import views from '../view/view.class.js';
import books from '../model/books.class.js';
import modules from '../model/modules.class.js';
import users from '../model/users.class.js';

export default class Controller {
    constructor() {
        this.view = new views(this);
        this.book = new books();
        this.module = new modules();
        this.user = new users();

        
    }



    async init() {
        try {
            await this.book.populate();
            await this.user.populate();
            await this.module.populate();
            
            
            this.view.renderOptions(this.book.data);
            this.view.completarSelectModulos(this.module.data);

            this.view.setBookSubmitHandler(this.handleSubmitBook.bind(this));

        } catch (error) {
            this.view.mostrarMensaje("Error en el servidor", 'error');
        }
    }

    async handleSubmitBook(bookData) {
        try {
            if (!bookData.moduleCode || !bookData.publisher || !bookData.price || !bookData.pages || !bookData.status) {
                throw new Error('Error: Todos los campos requeridos deben ser completados para añadir un libro.'); // Corrige el error tipográfico
            }

            if(bookData.id !== undefined){
                const existingBook = this.book.data.find(book => book.id === bookData.id);
                if(existingBook){
                    existingBook.moduleCode = bookData.moduleCode;
                    existingBook.publisher = bookData.publisher;
                    existingBook.price = parseFloat(bookData.price);
                    existingBook.pages = parseInt(bookData.pages, 10);
                    existingBook.status = bookData.status;
                    existingBook.comments = bookData.comments;
                
                    await this.book.changeBook  (existingBook);  
                    this.view.mostrarMensaje('Libro editado correctamente.', 'info');
                    }else{
                        throw new Error('Error: El libro con el ID proporcionado no existe.', 'error');
                    }
                } else {
                    
                    const newBookId = this.book.data.length + 1;  
        
                    const newBook = {
                        comments: bookData.comments || "", 
                        moduleCode: bookData.moduleCode,
                        pages: parseInt(bookData.pages, 10), 
                        price: parseFloat(bookData.price),
                        publisher: bookData.publisher,
                        status: bookData.status, 
                        id: newBookId.toString()
                    };
        
                    await this.book.addBook(newBook);
                    this.view.mostrarMensaje('Libro añadido correctamente.', 'info');
                }
            this.view.renderFortToAddBooks();
            this.view.renderOptions(this.book.data);
            this.view.completarSelectModulos(this.module.data);
        } catch (error) {
            this.view.mostrarMensaje('Error: ' + error.message, 'error'); 
        }
    }
    
    async handleRemoveBook(bookId) {
        try {
            if (!this.book.data.some(book => book.id === bookId)) {
                throw new Error('Error: El libro con el ID proporcionado no existe.', 'error');
            }
    
            await this.book.removeBook(bookId);
            this.view.renderOptions(this.book.data);
            this.view.mostrarMensaje('Libro eliminado correctamente.', 'info');
        } catch (error) {
            this.view.mostrarMensaje('Error' +error.message , 'error');
        }
    }
     handlerBookButonClicked() {
        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const bookId = event.currentTarget.getAttribute('data-id');
                this.handleRemoveBook(bookId);
                this.renderOptions(this.book.data);
            });
        });

        document.querySelectorAll('.edit').forEach(button => {
            button.addEventListener('click', async (event) => {
                const bookId = event.currentTarget.getAttribute('data-id');
                this.view.renderFortToEditBooks(this.book.data, bookId);
                this.view.completarSelectModulos(this.module.data);
                this.view.setBookSubmitHandler((bookData) => {
                    bookData.id = bookId;
                    this.handleSubmitBook(bookData);
                });
            });
        });
    }
}


