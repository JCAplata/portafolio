const btn = document.getElementById('themeBtn');
btn.addEventListener('click', ()=>{
    document.body.classList.toggle('light');
    btn.textContent = document.body.classList.contains('light') ? '☀' : '🌙';
});

// 🔹 Menú hamburguesa
const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('mainNav');
toggle.addEventListener('click', ()=>{
  nav.classList.toggle('show');
});