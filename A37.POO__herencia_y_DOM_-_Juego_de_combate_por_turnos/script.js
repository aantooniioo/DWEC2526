// CLASE BASE
class Personaje {

    constructor(nombre, vida, ataque) {
        this.nombre = nombre
        this.vida = vida
        this.vidaMaxima = vida
        this.ataque = ataque
    }

    atacar(objetivo) {
        objetivo.vida = objetivo.vida - this.ataque

        if (objetivo.vida < 0) {
            objetivo.vida = 0
        }
    }
}

// HERENCIA
class Jugador extends Personaje {}
class Enemigo extends Personaje {}

let jugador
let enemigo

// ELEMENTOS DOM
const nombreJugador = document.getElementById("nombreJugador")
const vidaJugador = document.getElementById("vidaJugador")
const barraJugador = document.getElementById("barraJugador")

const nombreEnemigo = document.getElementById("nombreEnemigo")
const vidaEnemigo = document.getElementById("vidaEnemigo")
const barraEnemigo = document.getElementById("barraEnemigo")

const btnAtacar = document.getElementById("btnAtacar")
const btnReiniciar = document.getElementById("btnReiniciar")
const mensaje = document.getElementById("mensaje")

function iniciarJuego() {
    jugador = new Jugador("Antonio", 100, 10)
    enemigo = new Enemigo("Orco", 100, 8)

    btnAtacar.disabled = false
    mensaje.textContent = "¡Empieza la batalla!"

    actualizarPantalla()
}

function actualizarPantalla() {

    nombreJugador.textContent = jugador.nombre
    vidaJugador.textContent = jugador.vida

    nombreEnemigo.textContent = enemigo.nombre
    vidaEnemigo.textContent = enemigo.vida

    barraJugador.style.width = jugador.vida + "%"
    barraEnemigo.style.width = enemigo.vida + "%"
}

// EVENTO ATACAR
btnAtacar.addEventListener("click", function() {

    if (jugador.vida > 0 && enemigo.vida > 0) {

        jugador.atacar(enemigo)
        mensaje.textContent = "Has atacado al enemigo"

        if (enemigo.vida <= 0) {
            mensaje.textContent = "🎉 Has ganado la partida"
            btnAtacar.disabled = true
            actualizarPantalla()
            return
        }

        enemigo.atacar(jugador)

        if (jugador.vida <= 0) {
            mensaje.textContent = "💀 Has perdido la partida"
            btnAtacar.disabled = true
        }

        actualizarPantalla()
    }
})

// EVENTO REINICIAR
btnReiniciar.addEventListener("click", function() {
    iniciarJuego()
})

// INICIAR AL CARGAR
iniciarJuego()
