const imagenesLirios = [
  'lirio1.png',
  'lirio2.png',
  'lirio3.png'
];

// Crear lirios flotantes con animaciones realistas
function crearLirios(num = 20) {
  for (let i = 0; i < num; i++) {
    const lirio = document.createElement('img');
    lirio.src = imagenesLirios[Math.floor(Math.random() * imagenesLirios.length)];
    lirio.classList.add('lirio');

    // Posición y tamaño aleatorios
    lirio.style.left = `${Math.random() * 100}vw`;
    lirio.style.animationDuration = `${10 + Math.random() * 10}s`;
    lirio.style.animationDelay = `${Math.random() * 5}s`;
    lirio.style.width = `${30 + Math.random() * 50}px`;
    lirio.style.zIndex = '0';

    document.body.appendChild(lirio);
  }
}

// Efecto de texto tipo máquina de escribir
function escribirTextoMaquina(selector, texto, velocidad = 70) {
  let i = 0;
  const elemento = document.querySelector(selector);

  function escribir() {
    if (i < texto.length) {
      elemento.textContent += texto.charAt(i);
      i++;
      setTimeout(escribir, velocidad);
    }
  }

  escribir();
}

// Botón de música
const botonMusica = document.getElementById('boton-musica');
const audio = document.getElementById('musica');

botonMusica.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    botonMusica.textContent = '⏸ Pausar música';
  } else {
    audio.pause();
    botonMusica.textContent = '▶️ Reproducir música';
  }
});

// Iniciar todo al cargar
window.onload = () => {
  crearLirios(30);

  const mensaje = "Te regalo esta experiencia para recordarte lo especial que eres. 🌸✨\nGracias por estar en mi vida.";
  escribirTextoMaquina('#texto-maquina', mensaje, 60);
};
