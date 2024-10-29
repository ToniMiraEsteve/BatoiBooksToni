import view from '../view/vista.view.js';

import books from '../model/books.class.js';
import modules from '../model/modules.class.js';
import users from '../model/users.class.js';

export default class Controller {
    constructor() {
        this.view = new view();
        this.book = new books();
        this.module = new modules();
        this.user = new users();

        
    }



    async Init() {
        await this.book.populate();
        await this.user.populate();
        await this.module.populate();
        

        this.view.renderOptions(this.book.data);
        this.view.completarSelectModulos(this.module.data); 

        this.view.setBookSubmitHandler(this.handleSubmitBook.bind(this));
        this.view.setBookRemoveHandler(this.handleRemoveBook.bind(this));
    }


    handleSubmitBook(bookData) {
        try {
            this.book.addBook(bookData); 
            this.view.renderOptions(this.book.data); 
            this.view.mostrarMensaje('Libro añadido correctamente.', 'info');
        } catch (error) {
            this.view.mostrarMensaje(error.message, 'error');
        }
    }


    handleRemoveBook(bookId) {
        this.book.removeBook(bookId);
        this.view.renderOptions(this.book.data);
    }


}

