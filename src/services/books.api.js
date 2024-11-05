const SERVER = import.meta.env.VITE_URL_API;

async function getDBBooks() {
    const book = await fetch(SERVER + '/books');
    if (!book.ok) {
        throw new Error(`Error ${book.status} de la BBDD: ${book.statusText}`);
    };

    return book.json();
}

async function getDBBook(bookId){
    const book = await fetch(SERVER + '/books?id=' + bookId);
    if (!book.ok) {
        throw new Error(`Error ${book.status} de la BBDD: ${book.statusText}`);
    };

    return book.json();
}

async function addDBBook(book) {
    const response = await fetch(SERVER + '/books' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    })
    if (!response.ok) {
        throw `Error ${response.status} de la BBDD: ${response.statusText}`
      } 
      const addedBook = await response.json();
      return addedBook; 
}

async function removeDBBook(bookID){
    const response = await fetch(SERVER + '/books/' + bookID, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    if (!response.ok) {
        throw `Error ${response.status} de la BBDD: ${response.statusText}`
      } 
      const removedBook = await response.json();
      return removedBook; 
}

async function changeDBBook(book){
    const response = await fetch(SERVER + '/books/' + book.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    })
    if (!response.ok) {
        throw `Error ${response.status} de la BBDD: ${response.statusText}`
      } 
      const changedBook = await response.json();
      return changedBook; 
}

export default{ 
    getDBBooks,
    getDBBook,
    addDBBook,
    removeDBBook,
    changeDBBook
};