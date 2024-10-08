
import viteLogo from '/public/logoBatoi.png';
import { 
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
} from '/srv/funciones.js';

import { libros } from '/srv/services/datos.js';

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

const librosUsuario4 = booksFromUser(libros, 4);
console.log("Libros del usuario 4:");
console.log(librosUsuario4);

const librosModulo5021 = booksFromModule(libros, 5021);
const librosModulo5021Good = booksWithStatus(librosModulo5021, 'Good');
console.log("Libros del módulo 5021 en buen estado:");
console.log(librosModulo5021Good);

const librosPrecioIncrementado = incrementPriceOfbooks(libros, 10);
console.log("Libros con precio incrementado en un 10%:");
console.log(librosPrecioIncrementado);
