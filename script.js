const imagenesLirios = [
  'lirio1.png',
  'lirio2.png',
  'lirio3.png'
];

// Crear lirios flotantes animados
function crearLirios(num = 30) {
  for (let i = 0; i < num; i++) {
    const lirio = document.createElement('img');
    lirio.src = imagenesLirios[Math.floor(Math.random() * imagenesLirios.length)];
    lirio.classList.add('lirio');

    // Posición aleatoria
    lirio.style.left = `${Math.random() * 100}vw`;
    lirio.style.top = `${-10 - Math.random() * 20}vh`;

    // Tamaño aleatorio
    const size = 30 + Math.random() * 40;
    lirio.style.width = `${size}px`;

    // Animación aleatoria
    const duration = 10 + Math.random() * 10;
    const delay = Math.random() * 5;
    lirio.style.animationDuration = `${duration}s`;
    lirio.style.animationDelay = `${delay}s`;

    // Movimiento horizontal leve para realismo
    lirio.style.setProperty('--moveX', `${Math.random() * 40 - 20}px`);

    document.body.appendChild(lirio);
  }
}

// Texto con efecto de máquina de escribir
function escribirTextoMaquina(selector, texto, velocidad = 60) {
  let i = 0;
  const elemento = document.querySelector(selector);
  if (!elemento) return;

  function escribir() {
    if (i < texto.length) {
      const char = texto.charAt(i);
      elemento.innerHTML += char === '\n' ? '<br>' : char;
      i++;
      setTimeout(escribir, velocidad);
    }
  }

  escribir();
}

// Reproducción de música con botón
const botonMusica = document.getElementById('boton-musica');
const audio = document.getElementById('musica');

if (botonMusica && audio) {
  botonMusica.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      botonMusica.textContent = '⏸ Pausar música';
    } else {
      audio.pause();
      botonMusica.textContent = '▶️ Reproducir música';
    }
  });
}

// Iniciar todo al cargar
window.onload = () => {
  crearLirios(30);

  const mensaje = "Te regalo esta experiencia para recordarte\nlo especial que eres. 🌸✨\nGracias por estar en mi vida.";
  escribirTextoMaquina('#texto-maquina', mensaje, 60);
};
