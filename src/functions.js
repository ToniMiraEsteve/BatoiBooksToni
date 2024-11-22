function getBookById(books, bookId){
    const libro = books.find((book) => book.id === bookId);
    if(libro){
        return libro;
    }
    throw new Error('No se ha encontrado un libro con esa id');
}

function getBookIndexById(books, bookId) {
    const libro = books.findIndex((book) => book.id === bookId);
    if(libro !== -1){
        return libro;
    }
    throw new Error('No se ha encontrado un libro con esa id');
}

function bookExists(books, userId, moduleCode) {
    const usuarioLibro = books.filter((book) => book.userId === userId && book.moduleCode === moduleCode);
    return usuarioLibro.length > 0;
}

function booksFromUser(books, userId) {
    const librosUsuario = books.filter((book) => book.userId === userId);
    return librosUsuario;
}

function booksFromModule(books, moduleCode) {
    const librosModulos = books.filter((book) => book.moduleCode === moduleCode);
    return librosModulos;
}

function booksCheeperThan(books, price) {
    const libroPrecio = books.filter((book) => book.price <= price);
    return libroPrecio;

}

function booksWithStatus(books, status) {
    const libroStatus = books.filter((book) => book.status === status);
    return libroStatus;
}

function averagePriceOfBooks(books) {
    if (books.length === 0) {
        return "0.00 €";
    }else{
        const PrecioTotal = books.reduce((suma, book) => suma + book.price, 0);
        const media = PrecioTotal / books.length;
        return media.toFixed(2) + " €"
    }
}


function booksOfTypeNotes(books) {
    const LibroApuntes = books.filter((book) => book.publisher === "Apunts")
    return LibroApuntes;
}

function booksNotSold(books) {
    const LibroNoVendidos = books.filter((book) => book.soldDate === "")
    return LibroNoVendidos;
}

function incrementPriceOfbooks(books, percentage) {
    const librosIncrementados = books.map(book => ({...book, price: book.price + (book.price * percentage)}));
    return librosIncrementados;
}

function getUserById(users, userId) {
    const usuario = users.find((user) => user.id === userId);
    if(usuario){
        return usuario;
    }
    throw new Error('No se ha encontrado un usuario con esa id');
}

function getUserIndexById(users, userId) {
    const usuario = users.findIndex((user) => user.id === userId);
    if(usuario !== -1){
        return usuario;
    }
    throw new Error('No se ha encontrado un usuario con esa id');
}

function getUserByNickName(users, nick) {
    const usuario = users.find((user) => user.nick === nick);
    if(usuario){
        return usuario;
    }
    throw new Error('No se ha encontrado un usuario con ese nombre');
}

function getModuleByCode(modules, moduleCode) {
    const module = modules.find((module) => module.code === moduleCode);
    if(module){
        return module;
    }
    throw new Error('No se ha encontrado un modulo con esa id');
}

export {
    getBookById,
    getBookIndexById,
    bookExists,
    booksFromUser,
    booksFromModule,
    booksCheeperThan,
    booksWithStatus,
    averagePriceOfBooks,
    booksOfTypeNotes,
    booksNotSold,
    incrementPriceOfbooks,
    getUserById,
    getUserIndexById,
    getUserByNickName,
    getModuleByCode
}