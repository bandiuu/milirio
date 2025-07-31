// Lirios flotantes (asegúrate de no incluir lirio4 si no existe)
const lirios = ['lirio1.png', 'lirio2.png', 'lirio3.png'];
const contenedorFlores = document.getElementById('flores');

for (let i = 0; i < 30; i++) {
  const flor = document.createElement('img');
  const src = lirios[Math.floor(Math.random() * lirios.length)];

  flor.src = src;
  flor.className = 'flor';

  const tamaño = Math.random() * 30 + 20; // 20px a 50px
  flor.style.width = `${tamaño}px`;
  flor.style.left = `${Math.random() * 100}%`;
  flor.style.animationDuration = `${8 + Math.random() * 6}s`;
  flor.style.animationDelay = `${Math.random() * 10}s`;

  contenedorFlores.appendChild(flor);
}

// Máquina de escribir
const texto = "Te regalo esta experiencia para recordarte\nlo especial que eres. 🌸✨\nGracias por estar en mi vida.";
const destino = document.getElementById("texto-maquina");
let i = 0;

function escribir() {
  if (i < texto.length) {
    destino.textContent += texto.charAt(i);
    i++;
    setTimeout(escribir, 60);
  }
}
escribir();

// Control de música
const audio = document.getElementById("musica");
const boton = document.getElementById("boton-musica");

boton.onclick = () => {
  if (audio.paused) {
    audio.play();
    boton.textContent = '⏸️ Pausar música';
  } else {
    audio.pause();
    boton.textContent = '🎵 Reproducir música';
  }
};

// Descargar PDF
document.getElementById("download-pdf").onclick = () => {
  window.location.href = "carta.pdf";
};

// Fade in scroll
window.addEventListener("scroll", () => {
  const sec = document.getElementById("message-section");
  const rect = sec.getBoundingClientRect();
  if (rect.top < window.innerHeight) {
    sec.style.opacity = 1;
  }
});
