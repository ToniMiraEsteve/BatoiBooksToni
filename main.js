
import viteLogo from '/public/logoBatoi.png';
import Controller from './src/controller/controller.class.js';


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
  <div id="form">
      <h2>Añadir libro</h2>
      <div>
          <label for="id-remove">Id:</label>
          <input type="number" id="id-remove">
          <button id="remove">Borrar libro</button>
      </div>
      <form id="bookForm">
          <div>
              <label for="id-module">Código del módulo:</label>
              <select id="id-module" name="moduleCode"> </select>
          </div>

          <div>
              <label for="publisher">Editorial:</label>
              <input type="text" id="publisher" name="publisher" required>
          </div>

          <div>
              <label for="price">Precio:</label>
              <input type="number" id="price" name="price" required>
          </div>

          <div>
              <label for="pages">Páginas:</label>
              <input type="number" id="pages" name="pages" required>
          </div>

          <div>
              <label>Estado:</label>
              <label>
                  <input type="radio" name="status" value="good"> Good
              </label>
              <label>
                  <input type="radio" name="status" value="bad"> Bad
              </label>
              <label>
                  <input type="radio" name="status" value="regular"> Regular
              </label>
          </div>

          <div>
              <label for="comments">Comentarios:</label>
              <textarea id="comments" name="comments"></textarea>
          </div>
          <button type="submit">Añadir</button>
          <button type="reset">Reset</button>
      </form>
  </div>

  `;

  document.querySelector('#about').innerHTML = `
    <h2>Acerca de</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id ultrices ultricies, nisl nunc tincidunt nunc, non efficitur nunc nisl ac nunc. Sed euismod, nunc nec lacinia tincidunt, nunc nunc lacinia nunc, nec nunc nunc nunc. Sed nec nunc nunc. Nullam auctor, nunc id ultrices ultricies, nisl nunc tincidunt nunc, non efficitur nunc nisl ac nunc. Sed euismod, nunc nec lacinia tincidunt, nunc nunc lacinia nunc, nec nunc nunc nunc. Sed nec nunc nunc.</p>
  `;
  
  document.querySelector('footer').innerHTML = `
    <p>Toni Mira Esteve</p>
  `

  document.addEventListener('DOMContentLoaded', () => {
   const myController = new Controller()
  myController.init()
})

