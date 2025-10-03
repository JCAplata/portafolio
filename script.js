const btn = document.getElementById('themeBtn');
btn.addEventListener('click', ()=>{
    document.body.classList.toggle('light');
    btn.textContent = document.body.classList.contains('light') ? '☀' : '🌙';
});

// 🔄 Función para carrusel infinito
function initCarousel(selector, speed = 1) {
  const container = document.querySelector(selector);
  if (!container) return;

  // Duplicar elementos para efecto infinito
  container.innerHTML += container.innerHTML;

  let scrollPos = 0;
  function animate() {
    scrollPos += speed;
    if (scrollPos >= container.scrollWidth / 2) {
      scrollPos = 0; // Reinicio para bucle infinito
    }
    container.scrollTo({
      left: scrollPos,
      behavior: "auto"
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// 🚀 Iniciar carrusel en proyectos y reseñas
initCarousel(".projects-grid", 0.8); // más lento
initCarousel(".reviews-grid", 0.8);




