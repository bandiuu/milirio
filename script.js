document.addEventListener("DOMContentLoaded", () => {
  const numFlores = 15;
  const flowerImages = [
    "lirio1.png",
    "lirio2.png",
    "lirio3.png"
  ]; // Puedes agregar más imágenes

  for (let i = 0; i < numFlores; i++) {
    const flower = document.createElement("img");
    flower.src = flowerImages[Math.floor(Math.random() * flowerImages.length)];
    flower.classList.add("flower");

    // Estilos aleatorios
    const size = Math.random() * 20 + 40; // entre 40px y 60px
    const left = Math.random() * 100;     // entre 0% y 100%
    const duration = Math.random() * 10 + 10; // entre 10s y 20s
    const delay = Math.random() * 10;     // hasta 10s

    flower.style.width = `${size}px`;
    flower.style.left = `${left}vw`;
    flower.style.animationDuration = `${duration}s`;
    flower.style.animationDelay = `${delay}s`;

    document.body.appendChild(flower);
  }

  // Mostrar carta animada al hacer scroll
  const messageSection = document.querySelector(".message-section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        messageSection.classList.add("visible");
      }
    });
  });

  observer.observe(messageSection);
});
