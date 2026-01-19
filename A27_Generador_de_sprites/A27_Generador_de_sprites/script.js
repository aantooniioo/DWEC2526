const zonaJuego = document.getElementById("zonaJuego");
const btnCrear = document.getElementById("btnCrear");
const btnBorrar = document.getElementById("btnBorrar");

// Lista de emojis para usar como sprites
const personajes = ["🧙‍♂️", "🧛‍♀️", "🧟‍♂️", "🧞‍♂️", "🧜‍♀️"];

function crearSprites() {
  borrarSprites(); // por si hay alguno previo

  for (let i = 0; i < 5; i++) {
    const sprite = document.createElement("div");
    sprite.className = "sprite";
    sprite.textContent = personajes[i % personajes.length];

    // Posición aleatoria dentro de zonaJuego
    const x = Math.random() * (zonaJuego.clientWidth - 40);
    const y = Math.random() * (zonaJuego.clientHeight - 40);
    sprite.style.left = `${x}px`;
    sprite.style.top = `${y}px`;

    // Al hacer clic, se elimina
    sprite.addEventListener("click", () => {
      zonaJuego.removeChild(sprite);
    });

    zonaJuego.appendChild(sprite);
  }
}

function borrarSprites() {
  // Eliminamos todos los hijos de zonaJuego
  while (zonaJuego.firstChild) {
    zonaJuego.removeChild(zonaJuego.firstChild);
  }
}

// Al cargar la página, se crean los sprites
window.addEventListener("load", crearSprites);

// Botones
btnCrear.addEventListener("click", crearSprites);
btnBorrar.addEventListener("click", borrarSprites);
