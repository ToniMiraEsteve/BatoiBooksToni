import views from '../view/view.class.js';
import books from '../model/books.class.js';
import modules from '../model/modules.class.js';
import users from '../model/users.class.js';

export default class Controller {
    constructor() {
        this.view = new views();
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
            this.view.setBookRemoveHandler(this.handleRemoveBook.bind(this));
        } catch (error) {
            this.view.mostrarMensaje("Error en el servidor", 'error');
        }
    }



    async handleSubmitBook(bookData) {
        try {
            if (!bookData.moduleCode || !bookData.publisher || !bookData.price || !bookData.pages || !bookData.status) {
                throw new Ersror('Error: Todos los campos requeridos deben ser completados para añadir un libro.','error');
            }
    
            const newBook = {
                comments: bookData.comments || "", 
                moduleCode: bookData.moduleCode,
                pages: parseInt(bookData.pages, 10), 
                price: parseFloat(bookData.price),
                publisher: bookData.publisher,
                status: bookData.status, 
                id: (this.book.data.length + 1).toString() 
            };
    
            await this.book.addBook(newBook); 
            this.view.renderOptions(this.book.data);
            this.view.mostrarMensaje('Libro añadido correctamente.', 'info');
        } catch (error) {
            this.view.mostrarMensaje('Error' + error.message, 'error');
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


}

