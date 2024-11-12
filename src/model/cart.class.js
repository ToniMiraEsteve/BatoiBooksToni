import Book from './book.class.js';
import vista from '../view/view.class.js';

export default class Cart {
    constructor() {
        this.vista = new vista();
        this.data = [];
    }

    async populate() {
       
    }

    getBookById(bookId){
        const libro = this.data.find((book) => book.id === bookId);
        if(libro){
            return libro;
        }
        throw new Error('No se ha encontrado un libro con esa id');
    };

    async addItem(book) {
        try {
            const copiaLibro = { ...book };
            const newBook = new Book(copiaLibro);
            if (this.data.some(item => item.titulo === newBook.titulo)) {
                throw new Error('Este libro ya estaba en el carrito');
            }
            this.data.push(newBook);
            this.vista.mostrarMensaje('Libro añadido al carrito', 'info');
        } catch (error) {
            this.vista.mostrarMensaje('Error al añadir el libro al carrito: ' + error.message, 'error');
            
        }
    }

    async removeItem(id){
        try {
            const index = this.data.findIndex(book => book.id === id);
            if (index !== -1) {
                this.data.splice(index, 1);
            }else{
                throw new Error('No se ha encontrado un libro con esa id');
            }
        }catch(error){
            throw new Error('Error al borrar el libro del carrito:', error.message);
        }
    }

    toString(){
        return "Id del libro: " + this.id + ", id del usuario: " + this.userId + ", precio: " + this.price;
    }
}