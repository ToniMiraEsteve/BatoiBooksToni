
import viteLogo from '/public/logoBatoi.png';
import data from './src/services/datos';
import Modules from './src/model/modules.class';
import Users from './src/model/users.class';
import Books from './src/model/books.class';



document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <h1>
      BatoiBooks
    </h1>
    <p class="read-the-docs">
      Abre la consola para ver el resultado
  </div>
`

const myModules = new Modules();
myModules.populate(data.modules);

const myUsers = new Users();
myUsers.populate(data.users);

const myBooks = new Books();
myBooks.populate(data.books);

console.log(myBooks.booksFromModule('5021'));
console.log(myBooks.booksWithStatus('new'));
console.log(myBooks.incrementPriceOfbooks(0.1));
