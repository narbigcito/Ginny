// ═════════════════════════════
//  Hero typewriter
// ═════════════════════════════
const heroLines = [
  "Este espacio no es para cualquiera.",
  "Entrar puede costar la razón.",
  "¿Estás dispueste?"
];

const typedEl = document.getElementById('hero-text');
const cursorEl = document.getElementById('hero-cursor');
const subEl = document.getElementById('hero-sub');

let raw = "";
async function typeWriter() {
  // build the text string first
  for (let i = 0; i < heroLines.length; i++) {
    const line = heroLines[i];
    for (let c = 0; c < line.length; c++) {
      raw += line[c];
      typedEl.textContent = raw;
      typedEl.appendChild(cursorEl);
      await wait(30 + Math.random() * 40);
    }
    if (i < heroLines.length - 1) {
      raw += "\n";
      typedEl.textContent = raw;
      typedEl.appendChild(cursorEl);
      await wait(550);
    }
  }
  await wait(900);
  subEl.style.opacity = 1;
}

function wait(ms) { return new Promise(r => setTimeout(r, ms)); }

window.addEventListener('load', () => {
  setTimeout(typeWriter, 500);
});

// ═════════════════════════════
//  Scroll fade-in
// ═════════════════════════════
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.fi').forEach(el => observer.observe(el));

// ═════════════════════════════
//  Cursor glow
// ═════════════════════════════
const glow = document.getElementById('glow');
if (glow) {
  document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
}
