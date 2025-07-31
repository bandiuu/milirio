// 1. Mensaje línea por línea
const introLines = [
  "Cuando escuché tu risa, lo supe.",
  "Cuando hablamos horas sin parar, lo sentí.",
  "Y cuando te pienso, lo confirmo:",
  "Mi corazón te eligió a ti, Milena."
];
const section = document.getElementById("message-section");

introLines.forEach((text, idx) => {
  const p = document.createElement("p");
  p.textContent = text;
  p.className = "message-line";
  p.style.animationDelay = `${idx * 1}s`;
  section.appendChild(p);
});

// Aplicar fade
window.addEventListener("load", () => {
  section.style.opacity = 1;
});

// 2. Lirios flotantes actualizados
const lirios = ['lirio1.png','lirio2.png','lirio3.png'];
const contenedor = document.getElementById('flores');
for (let i = 0; i < 40; i++) {
  const flor = document.createElement('img');
  flor.src = lirios[Math.floor(Math.random() * lirios.length)];
  flor.className = 'flor';
  const base = Math.random() * 80 + 60; // 60px a 140px
  flor.style.width = `${base}px`;
  flor.style.left = `${Math.random() * 100}%`;
  flor.style.animationDuration = `${6 + Math.random() * 6}s`;
  flor.style.animationDelay = `${Math.random() * 8}s`;
  contenedor.appendChild(flor);
}

// 3. Máquina de escribir continúa igual
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

// 4. Música y PDF botones (sin cambios significativos)
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
document.getElementById("download-pdf").onclick = () => {
  window.location.href = "carta.pdf";
};
