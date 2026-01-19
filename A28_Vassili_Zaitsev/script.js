const btnStart = document.getElementById('btnStart');
const btnPause = document.getElementById('btnPause');
const btnReset = document.getElementById('btnReset');
const scoreSpan = document.getElementById('score');
const gameArea = document.getElementById('gameArea');

let score = 0;
let running = false;
let spawnInterval = null;
let timeout1 = null;
let timeout2 = null;
let movementIntervals = [];

// color actual de la secuencia
let nextColor = "red"; // empezamos en rojo

function updateScore(value) {
  score = value;
  scoreSpan.textContent = score;
}

// Devuelve el siguiente color de la secuencia rojo/azul/rojo/azul...
function getNextColor() {
  const color = nextColor;
  nextColor = (nextColor === "red") ? "blue" : "red";
  return color;
}

/* ---------------------------------------------------
   FASE 2: Sprites en segundo 1 y 3 (siguen la secuencia)
--------------------------------------------------- */
function crearSprite1() {
  createSprite(getNextColor()); // será rojo la primera vez
}

function crearSprite2() {
  createSprite(getNextColor()); // será azul la segunda vez
}

function startJuego() {
  timeout1 = setTimeout(crearSprite1, 1000); // segundo 1
  timeout2 = setTimeout(crearSprite2, 3000); // segundo 3
}

/* ---------------------------------------------------
   FASE 3: matar sprites con removeChild()
--------------------------------------------------- */
function createSprite(color) {
  const sprite = document.createElement("div");

  sprite.style.width = "40px";
  sprite.style.height = "40px";
  sprite.style.background = color;
  sprite.style.position = "absolute";
  sprite.style.left = Math.random() * (gameArea.clientWidth - 40) + "px";
  sprite.style.top = Math.random() * (gameArea.clientHeight - 40) + "px";
  sprite.style.cursor = "pointer";

  sprite.addEventListener("click", () => {
    if (!running) return;
    gameArea.removeChild(sprite);
    updateScore(score + 1);
  });

  gameArea.appendChild(sprite);

  activarMovimiento(sprite); // fase 4
}

/* ---------------------------------------------------
   FASE 4: Movimiento tipo salvapantallas
--------------------------------------------------- */
function activarMovimiento(sprite) {
  let dx = Math.random() < 0.5 ? 2 : -2;
  let dy = Math.random() < 0.5 ? 2 : -2;

  const moveInterval = setInterval(() => {
    if (!running) return;

    let x = sprite.offsetLeft + dx;
    let y = sprite.offsetTop + dy;

    if (x <= 0 || x >= gameArea.clientWidth - 40) dx *= -1;
    if (y <= 0 || y >= gameArea.clientHeight - 40) dy *= -1;

    sprite.style.left = x + "px";
    sprite.style.top = y + "px";
  }, 20);

  movementIntervals.push(moveInterval);
}

/* ---------------------------------------------------
   BOTONES
--------------------------------------------------- */
btnStart.addEventListener('click', () => {
  if (running) return;
  running = true;

  // Reiniciamos la secuencia por si se ha reseteado antes
  nextColor = "red";

  // FASE 2: segundo 1 y 3
  startJuego();

  // Aparición infinita siguiendo la MISMA secuencia rojo/azul/rojo/azul...
  setTimeout(() => {
    spawnInterval = setInterval(() => {
      if (running) {
        const color = getNextColor();
        createSprite(color);
      }
    }, 1500);
  }, 3000); // empieza después del azul en el segundo 3
});

btnPause.addEventListener('click', () => {
  running = false;
});

btnReset.addEventListener('click', () => {
  running = false;
  updateScore(0);

  while (gameArea.firstChild) {
    gameArea.removeChild(gameArea.firstChild);
  }

  clearTimeout(timeout1);
  clearTimeout(timeout2);

  clearInterval(spawnInterval);
  spawnInterval = null;

  movementIntervals.forEach(i => clearInterval(i));
  movementIntervals = [];

  // opcional: reiniciar secuencia
  nextColor = "red";
});
