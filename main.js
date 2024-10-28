
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
          <option value="" disabled selected>- Selecciona un módulo -</option>
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
        <p class="estado">Bueno<input type="radio" id="status" name="status" value="good" checked></p>
        <p class="estado">Regular<input type="radio" id="status" name="status" value="regular"></p>
        <p class="estado">Malo<input type="radio" id="status" name="status" value="bad"></p>
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

document.addEventListener('DOMContentLoaded', () => {
  const myController = new Controller()
  myController.Init()
})

