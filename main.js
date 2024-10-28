
import viteLogo from '/public/logoBatoi.png';
import Modules from './src/model/modules.class';
import Users from './src/model/users.class';
import Books from './src/model/books.class';


document.querySelector('header').innerHTML = `
  <div>
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <h1>
      BatoiBooks
    </h1>
  </div>
  <div id="enlaces">
    <ul>
      <li><a href="#list">Ver libros</a></li>
      <li><a href="#form">Añadir libro</a></li>
      <li><a href="#about">Acerca de</a></li>
    </ul>
  </div>
   `;
  
  document.querySelector('#messages').innerHTML = `
    <div>
      <p>¡Bienvenido a BatoiBooks!</p>
      <p>Disfruta explorando nuestra colección de libros.</p>
    </div>
  `;

  document.querySelector('#container').innerHTML = `
    <div id="list"></div>
    <div id="form"></div>
    <div id="about"></div>
  `;

  document.querySelector('#list').innerHTML = `
    <h2>Lista de libros</h2>
    <ul>
    </ul>
  `;

  document.querySelector('#form').innerHTML = `
    <h2>Añadir libro</h2>
    <div>
      <label for="id-remove">Id:</label>
      <input type="number" id="id-remove">
      <button id="remove">Borrar libro</button>
    </div>
    <form id="bookForm">
      <div>
        <label for="id-module">Módulo:</label>
        <select id="id-module">
          <option>- Selecciona un módulo -</option>
        </select>
      </div>

      <div>
        <label for="publisher">Editorial:</label>
        <input type="text" id="publisher" required>
      </div>

      <div>
        <label for="price">Precio:</label>
        <input type="number" id="price">
      </div>

      <div>
        <label for="pages">Páginas:</label>
        <input type="number" id="pages">
      </div>

      <div>
        <label>Estado:</label>
        <!-- Aquí poned un radiobutton para cada estado -->
      </div>

      <div>
        <label for="comments">Comentarios:</label>
        <textarea id="comments"></textarea>
      </div>

      <button type="submit">Añadir</button>
      <button type="reset">Reset</button>
    </form>
  `;

  document.querySelector('#about').innerHTML = `
    <h2>Acerca de</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id ultrices ultricies, nisl nunc tincidunt nunc, non efficitur nunc nisl ac nunc. Sed euismod, nunc nec lacinia tincidunt, nunc nunc lacinia nunc, nec nunc nunc nunc. Sed nec nunc nunc. Nullam auctor, nunc id ultrices ultricies, nisl nunc tincidunt nunc, non efficitur nunc nisl ac nunc. Sed euismod, nunc nec lacinia tincidunt, nunc nunc lacinia nunc, nec nunc nunc nunc. Sed nec nunc nunc.</p>
  `;
  
  document.querySelector('footer').innerHTML = `
    <p>Toni Mira Esteve</p>
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

document.addEventListener('DOMContentLoaded', () => {
  const myController = new Controller()
  myController.init()
})

