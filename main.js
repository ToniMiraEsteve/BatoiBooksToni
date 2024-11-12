
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
      <li><a href="#list" class="boton-list">Ver libros</a></li>
      <li><a href="#form" class="boton-form">Añadir libro</a></li>
      <li><a href="#about" class="boton-about">Acerca de</a></li>
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
  
  `;

  document.querySelector('#about').innerHTML = `
    <div class="about">
      <h2>Acerca de</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id ultrices ultricies, nisl nunc tincidunt nunc, non efficitur nunc nisl ac nunc. Sed euismod, nunc nec lacinia tincidunt, nunc nunc lacinia nunc, nec nunc nunc nunc. Sed nec nunc nunc. Nullam auctor, nunc id ultrices ultricies, nisl nunc tincidunt nunc, non efficitur nunc nisl ac nunc. Sed euismod, nunc nec lacinia tincidunt, nunc nunc lacinia nunc, nec nunc nunc nunc. Sed nec nunc nunc.</p>
    </div>
    `;
  
  document.querySelector('footer').innerHTML = `
    <p>Toni Mira Esteve</p>
  `

  document.addEventListener('DOMContentLoaded', () => {
   const myController = new Controller()
  myController.init()
  })


