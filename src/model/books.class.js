import Book from "./book.class.js";
export default class books {
    constructor(){
        this.data = []
    }

    populate(Datos){
        this.data = Datos.map(dato =>new Book(dato));
    }

    addBook(book){
        const index = this.data.reduce((maximoID, book) => Math.max(maximoID,book.id), 0);
        book.id = index +1;
        const newBook = new Book(book);
        this.data.push(newBook);
        return newBook;
    }

    removeBook(bookId){
        const index = this.data.findIndex((book) => book.id === bookId);

        if (index !== -1) {
            this.data.splice(index,1);
        } else {
            throw new Error('No se ha encontrado un libro con esa id');
        }
    }

    changeBook(Data){
        const newBook = new Book(Data);
        const index = this.data.findIndex(libro => libro.id === newBook.id);
        if (index === -1) {
            throw new Error('No se ha encontrado un libro con esa id');
        } 
        this.data[index] = newBook;
        return newBook
    }
    
    toString(){
        return this.data.map(book => book.toString()).join('\n');
    }

    getBookById(bookId){
        const libro = this.data.find((book) => book.id === bookId);
        if(libro){
            return libro;
        }
        throw new Error('No se ha encontrado un libro con esa id');
    }
    
    getBookIndexById(bookId) {
        const index = this.data.findIndex((book) => book.id === bookId);
        if (index !== -1) {
            return index;
        }
        throw new Error('No se ha encontrado un libro con esa id');
    }
    
    bookExists(userId, moduleCode) {
        const usuarioLibro = this.data.filter((book) => book.userId === userId && book.moduleCode === moduleCode);
        return usuarioLibro.length > 0;
    }
    
    booksFromUser(userId) {
        return this.data.filter((book) => book.userId === userId);
    }
    
    booksFromModule(moduleCode) {
        return this.data.filter((book) => book.moduleCode === moduleCode);
    }
    
    booksCheeperThan(price) {
        const libroPrecio = this.data.filter((book) => book.price <= price);
        return libroPrecio;
    }
    
    booksWithStatus(status) {
        return this.data.filter((book) => book.status === status);
    }
    
    averagePriceOfBooks() {
        if (this.data.length === 0) {
            return "0.00 €";
        } else {
            const totalPrice = this.data.reduce((suma, book) => suma + book.price, 0);
            const average = totalPrice / this.data.length;
            return average.toFixed(2) + " €";
        }
    }
    
    booksOfTypeNotes() {
        return this.data.filter((book) => book.publisher === "Apunts");
    }
    
    booksNotSold() {
        const LibroNoVendidos = this.data.filter((book) => book.soldDate === "")
        return LibroNoVendidos;
    }
    
    incrementPriceOfbooks(percentage) {
        return this.data.map(book => ({ ...book, price: book.price + (book.price * percentage) }));
    }

}