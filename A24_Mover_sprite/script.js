// -------------------------------
// VARIABLES PRINCIPALES
// -------------------------------
let imagen = document.getElementById("uno");
let campo = document.getElementById("campo");
let objetivo = document.getElementById("objetivo");
let obstaculos = document.querySelectorAll(".obstaculo");
let mensaje = document.getElementById("mensaje");
let tiempoTexto = document.getElementById("tiempo");

let posX = 10;
let posY = 10;
const paso = 20;

let tiempo = 20;
let cuentaAtras;

let juegoBloqueado = false; // Bloquea movimiento al perder/ganar


// -------------------------------
// MEJORA 3: TIEMPO
// -------------------------------
function iniciarTiempo() {
  tiempoTexto.textContent = "Tiempo: " + tiempo;

  cuentaAtras = setInterval(() => {
    tiempo--;
    tiempoTexto.textContent = "Tiempo: " + tiempo;

    if (tiempo <= 0) {
      clearInterval(cuentaAtras);
      mensaje.textContent = "¡Tiempo agotado! Pierdes.";
      juegoBloqueado = true;
      bloquearControles();
    }
  }, 1000);
}

iniciarTiempo();


// -------------------------------
// FUNCIÓN GENERAL DE MOVIMIENTO
// -------------------------------
function mover(dx, dy) {
  if (juegoBloqueado) return; // No se mueve si el juego está bloqueado

  posX += dx;
  posY += dy;

  const maxX = campo.clientWidth - imagen.clientWidth;
  const maxY = campo.clientHeight - imagen.clientHeight;

  // MEJORA 1: Colisión con bordes
  if (posX < 0 || posX > maxX || posY < 0 || posY > maxY) {
    mensaje.textContent = "¡Has tocado el borde! Pierdes.";
    juegoBloqueado = true;
    clearInterval(cuentaAtras);
    bloquearControles();
    return;
  }

  imagen.style.left = posX + "px";
  imagen.style.top = posY + "px";

  // MEJORA 2: Colisión con objetivo
  if (colision(imagen, objetivo)) {
    mensaje.textContent = "¡Ganaste!";
    juegoBloqueado = true;
    clearInterval(cuentaAtras);
    bloquearControles();
  }

  // MEJORA 2: Colisión con obstáculos
  obstaculos.forEach(obst => {
    if (colision(imagen, obst)) {
      mensaje.textContent = "¡Has chocado con un obstáculo! Pierdes.";
      juegoBloqueado = true;
      clearInterval(cuentaAtras);
      bloquearControles();
    }
  });
}


// -------------------------------
// BOTONES DE MOVIMIENTO
// -------------------------------
function mostrarIzquierda() { mover(-paso, 0); }
function mostrarDerecha() { mover(paso, 0); }
function mostrarArriba() { mover(0, -paso); }
function mostrarAbajo() { mover(0, paso); }


// -------------------------------
// MOVIMIENTO CON TECLADO (FLECHAS + WASD)
// -------------------------------
document.addEventListener("keydown", (e) => {
  if (juegoBloqueado) return; // ✅ No mover si está bloqueado

  if (e.key === "ArrowLeft" || e.key === "a") mostrarIzquierda();
  if (e.key === "ArrowRight" || e.key === "d") mostrarDerecha();
  if (e.key === "ArrowUp" || e.key === "w") mostrarArriba();
  if (e.key === "ArrowDown" || e.key === "s") mostrarAbajo();
});


// -------------------------------
// FUNCIÓN RESET
// -------------------------------
function resetJuego() {
  juegoBloqueado = false;

  // Reiniciar posición
  posX = 10;
  posY = 10;
  imagen.style.left = posX + "px";
  imagen.style.top = posY + "px";

  // Reiniciar mensajes
  mensaje.textContent = "";

  // Reiniciar tiempo
  clearInterval(cuentaAtras);
  tiempo = 20;
  tiempoTexto.textContent = "Tiempo: " + tiempo;
  iniciarTiempo();

  // Activar botones
  desbloquearControles();
}


// -------------------------------
// FUNCIÓN VOLVER (reinicio básico)
// -------------------------------
function volver() {
  resetJuego();
}


// -------------------------------
// COLISIÓN ENTRE ELEMENTOS
// -------------------------------
function colision(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();
  return !(
    aRect.right < bRect.left ||
    aRect.left > bRect.right ||
    aRect.bottom < bRect.top ||
    aRect.top > bRect.bottom
  );
}


// -------------------------------
// BLOQUEAR / DESBLOQUEAR BOTONES
// -------------------------------
function bloquearControles() {
  document.querySelectorAll("button").forEach(btn => {
    if (btn.textContent !== "Reset") {
      btn.disabled = true;
    }
  });
}

function desbloquearControles() {
  document.querySelectorAll("button").forEach(btn => btn.disabled = false);
}


// -------------------------------
// IR A MEJORA 4
// -------------------------------
function irAMejora4() {
  window.location.href = "mejora4/index.html";
}
