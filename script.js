function updateDebugInfo() {
  const hero = document.getElementById("hero");
  const debugBox = document.getElementById("debugInfo");
  const heroHeight = hero.getBoundingClientRect().height;
  debugBox.innerHTML = `
    window.innerHeight (100vh): <strong>${window.innerHeight}px</strong><br/>
    .hero height: <strong>${Math.round(heroHeight)}px</strong>
  `;
}

// window.addEventListener("load", updateDebugInfo);
// window.addEventListener("resize", updateDebugInfo);
// window.addEventListener("scroll", updateDebugInfo);

updateDebugInfo()

function setVhVariable() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  updateDebugInfo()
}

// Only apply JS fallback if `dvh` is not supported
if (!CSS.supports("height", "100dvh")) {
  window.addEventListener('load', setVhVariable);
  window.addEventListener('resize', setVhVariable);
}
