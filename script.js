const imagenesLirios = [
  'lirio1.png',
  'lirio2.png',
  'lirio3.png'
];

// Crea varios lirios flotantes
function crearLirios(num = 20) {
  for (let i = 0; i < num; i++) {
    const lirio = document.createElement('img');
    lirio.src = imagenesLirios[Math.floor(Math.random() * imagenesLirios.length)];
    lirio.classList.add('lirio');

    // Posiciones y animaciones aleatorias
    lirio.style.left = `${Math.random() * 100}vw`;
    lirio.style.animationDuration = `${5 + Math.random() * 10}s`;
    lirio.style.animationDelay = `${Math.random() * 5}s`;
    lirio.style.width = `${30 + Math.random() * 40}px`;
    lirio.style.zIndex = '0';
    document.body.appendChild(lirio);
  }
}

// Iniciar al cargar
window.onload = () => {
  crearLirios(25);
};
