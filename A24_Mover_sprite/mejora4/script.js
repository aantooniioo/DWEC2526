const sprite = document.getElementById("sprite");
const campo = document.getElementById("campo");
const mensaje = document.getElementById("mensaje");

let posX = 10;
let posY = 10;
let velocidad = 5;
let intervalo;

// Movimiento con flechas y WASD
document.addEventListener("keydown", (e) => {
  clearInterval(intervalo);

  if (e.key === "ArrowUp" || e.key === "w") moverAuto(0, -velocidad);
  if (e.key === "ArrowDown" || e.key === "s") moverAuto(0, velocidad);
  if (e.key === "ArrowLeft" || e.key === "a") moverAuto(-velocidad, 0);
  if (e.key === "ArrowRight" || e.key === "d") moverAuto(velocidad, 0);
});

// Movimiento automático
function moverAuto(dx, dy) {
  intervalo = setInterval(() => {
    posX += dx;
    posY += dy;

    const maxX = campo.clientWidth - sprite.clientWidth;
    const maxY = campo.clientHeight - sprite.clientHeight;

    if (posX < 0 || posX > maxX || posY < 0 || posY > maxY) {
      clearInterval(intervalo);
      mensaje.textContent = "¡Has tocado el borde! Pierdes.";
      return;
    }

    sprite.style.left = posX + "px";
    sprite.style.top = posY + "px";
  }, 20);
}
// Botón para volver a la Actividad 24
function volverActividad24() {
  window.location.href = "../index.html";
}
