import view from '../view/vista.view.js';

import books from '../model/books.class.js';
import modules from '../model/modules.class.js';
import users from '../model/users.class.js';

export default class Controller {
    constructor() {
        this.view = view;

        this.book = books;
        this.module = modules;
        this.user = users;

        
    }



    Init(){
        const myBooks = new books();
        const myUsers = new modules();
        const myModules = new users();
        const vista = new view();

        myBooks.populate().then(() => {
            vista.renderOptions(myBooks.populate());
        });
        myUsers.populate().then(() => {
            vista.renderOptions(myUsers.populate());
        });
        myModules.populate().then(() => {
            vista.renderOptions(myModules.populate());
        });


        vista.setBookSubmitHandler(this.handleSubmitBook.bind(this));
        vista.setBookSubmitHandler(this.handleRemoveBook.bind(this));
    }


    handleSubmitBook(bookData) {
        try {
            this.books.addBook(bookData);
            this.view.renderOptions(this.books.getBooks());
            this.view.rendererizarLibros(bookData);
            this.view.mostrarMensaje('Libro añadido correctamente.', 'info');
        } catch (error) {
            this.view.mostrarMensaje(error.message, 'error');
        }
    }

    handleRemoveBook(bookId) {
        this.books.removeBook(bookId);
        this.view.renderOptions(this.books.getBooks());
    }


}

