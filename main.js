
import viteLogo from '/public/logoBatoi.png';
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

const myBooks = new Books();

const myUsers = new Users();  

const myModules = new Modules();

Promise.all([
  myBooks.populate(),
  myUsers.populate(),
  myModules.populate()
]).then(() => {
  console.log(myBooks.booksFromModule('5021'));
  console.log(myBooks.booksWithStatus('new'));
}).catch((error) => {
  console.error('Error al poblar los datos:', error);
});

