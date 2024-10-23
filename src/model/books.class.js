import Book from "./book.class.js";
import api_books from "../services/books.api.js"

export default class books {
    constructor(){
        this.data = []
    };

    async populate(){
        try{
            const api = await api_books.getDBBooks();
            this.data = api.map(book =>new Book(book));
        }catch(Error){
            console.error("Error Dato no encontrado", Error);
        }
    };

    async addBook(book) {
        try {
            const addedBook = await api_books.addDBBook(book);
            const newBook = new Book(addedBook);
            this.data.push(newBook);
            return newBook;
        } catch (error) {
            console.error('Error al agregar el libro:', error.message);
            throw error;
        }
    }

    async removeBook(bookId){
        try {
            const removedBook = await api_books.removeDBBook(bookId);
            const index = await api_books.getDBBook(bookId);

            if (index !== -1) {
                this.data.splice(index,1);
            } 
            return removedBook;
        }catch(error){
                throw new Error('No se ha encontrado un libro con esa id');
            }
    }

    async changeBook(Data){
        const index = this.data.findIndex(book => book.id === Data.id);
        if (index === -1) {
            throw new Error('Libro no encontrado');
        }
        try{
            const changedBook = await api_books.changeDBBook(Data);
            this.data[index] = new Book(changedBook);
            return this.data[index];
        }catch(error){
            throw new Error('No se ha encontrado un libro con esa id');
        }
    };
    
    toString(){
        return this.data.map(book => book.toString()).join('\n');
    };

    getBookById(bookId){
        const libro = this.data.find((book) => book.id === bookId);
        if(libro){
            return libro;
        }
        throw new Error('No se ha encontrado un libro con esa id');
    };
    
    getBookIndexById(bookId) {
        const index = this.data.findIndex((book) => book.id === bookId);
        if (index !== -1) {
            return index;
        }
        throw new Error('No se ha encontrado un libro con esa id');
    };
    
    bookExists(userId, moduleCode) {
        const usuarioLibro = this.data.filter((book) => book.userId === userId && book.moduleCode === moduleCode);
        return usuarioLibro.length > 0;
    };
    
    booksFromUser(userId) {
        return this.data.filter((book) => book.userId === userId);
    };
    
    booksFromModule(moduleCode) {
        return this.data.filter((book) => book.moduleCode === moduleCode);
    };
    
    booksCheeperThan(price) {
        const libroPrecio = this.data.filter((book) => book.price <= price);
        return libroPrecio;
    };
    
    booksWithStatus(status) {
        return this.data.filter((book) => book.status === status);
    };
    
    averagePriceOfBooks() {
        if (this.data.length === 0) {
            return "0.00 €";
        } else {
            const totalPrice = this.data.reduce((suma, book) => suma + book.price, 0);
            const average = totalPrice / this.data.length;
            return average.toFixed(2) + " €";
        }
    };
    
    booksOfTypeNotes() {
        return this.data.filter((book) => book.publisher === "Apunts");
    };
    
    booksNotSold() {
        const LibroNoVendidos = this.data.filter((book) => book.soldDate === "")
        return LibroNoVendidos;
    };

}