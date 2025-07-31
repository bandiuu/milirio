// Lirios flotantes
const lirios = ['lirio1.png', 'lirio2.png', 'lirio3.png'];
const contenedorFlores = document.getElementById('flores');

for (let i = 0; i < 30; i++) {
  const flor = document.createElement('img');
  flor.src = lirios[Math.floor(Math.random() * lirios.length)];
  flor.className = 'flor';

  const tamaño = Math.random() * 60 + 40; // de 40px a 100px
  flor.style.width = `${tamaño}px`;
  flor.style.left = `${Math.random() * 100}%`;
  flor.style.animationDuration = `${8 + Math.random() * 5}s`;
  flor.style.animationDelay = `${Math.random() * 10}s`;

  flor.onerror = () => flor.remove();
  contenedorFlores.appendChild(flor);
}

// Máquina de escribir, línea a línea
const texto = [
  "Te regalo esta experiencia para recordarte",
  "lo especial que eres. 🌸✨",
  "Gracias por estar en mi vida."
];
const destino = document.getElementById("texto-maquina");
let linea = 0, caracter = 0;

function escribirLinea() {
  if (linea < texto.length) {
    if (caracter < texto[linea].length) {
      destino.innerHTML += texto[linea].charAt(caracter);
      caracter++;
      setTimeout(escribirLinea, 60);
    } else {
      destino.innerHTML += "<br/>";
      linea++;
      caracter = 0;
      setTimeout(escribirLinea, 500);
    }
  }
}
escribirLinea();

// Música
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

// PDF
document.getElementById("download-pdf").onclick = () => {
  window.location.href = "carta.pdf";
};

// Activar fade de mensaje con scroll
window.addEventListener("scroll", () => {
  const sec = document.getElementById("message-section");
  const rect = sec.getBoundingClientRect();
  if (rect.top < window.innerHeight) {
    sec.style.opacity = 1;
  }
});
