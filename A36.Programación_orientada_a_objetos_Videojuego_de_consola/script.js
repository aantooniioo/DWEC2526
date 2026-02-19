// CLASE BASE
class Personaje {

    constructor(nombre, vida, ataque) {
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;
    }

    atacar(objetivo) {
        objetivo.vida = objetivo.vida - this.ataque;

        // evitar vida negativa
        if (objetivo.vida < 0) {
            objetivo.vida = 0;
        }
    }

}

// CLASES HIJAS
class Heroe extends Personaje {
    constructor(nombre, vida, ataque) {
        super(nombre, vida, ataque);
    }
}

class Enemigo extends Personaje {
    constructor(nombre, vida, ataque) {
        super(nombre, vida, ataque);
    }
}

// VARIABLES
let heroe;
let enemigo;

let vidaHeroeTxt = document.getElementById("vidaHeroe");
let vidaEnemigoTxt = document.getElementById("vidaEnemigo");
let mensaje = document.getElementById("mensaje");
let botonAtacar = document.getElementById("btnAtacar");
let botonReiniciar = document.getElementById("btnReiniciar");

// FUNCIÓN INICIAR JUEGO
function iniciarJuego() {
    heroe = new Heroe("Mario", 100, 20);
    enemigo = new Enemigo("Bowser", 80, 15);

    botonAtacar.disabled = false;
    mensaje.textContent = "";

    mostrarVida();
}

// MOSTRAR VIDA
function mostrarVida() {
    vidaHeroeTxt.textContent = "Vida: " + heroe.vida;
    vidaEnemigoTxt.textContent = "Vida: " + enemigo.vida;
}

// EVENTO ATACAR
botonAtacar.addEventListener("click", function() {

    heroe.atacar(enemigo);
    mensaje.textContent = "El héroe ataca al enemigo";

    if (enemigo.vida > 0) {
        enemigo.atacar(heroe);
    }

    if (heroe.vida <= 0) {
        mensaje.textContent = "💀 Has perdido";
        botonAtacar.disabled = true;
    }

    if (enemigo.vida <= 0) {
        mensaje.textContent = "🏆 Has ganado";
        botonAtacar.disabled = true;
    }

    mostrarVida();

});

// EVENTO REINICIAR
botonReiniciar.addEventListener("click", function() {
    iniciarJuego();
});

// INICIAR AL CARGAR
iniciarJuego();
