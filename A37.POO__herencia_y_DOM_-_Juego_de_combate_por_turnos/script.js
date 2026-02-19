// CLASE BASE
class Personaje {

    constructor(nombre, vida, ataque) {
        this.nombre = nombre
        this.vida = vida
        this.ataque = ataque
    }

    atacar(objetivo) {
        objetivo.vida = objetivo.vida - this.ataque
    }

}


// HERENCIA
class Jugador extends Personaje {
}

class Enemigo extends Personaje {
}


// CREAR OBJETOS
const jugador = new Jugador("Antonio", 100, 10)
const enemigo = new Enemigo("Orco", 100, 8)


// ELEMENTOS DOM
const nombreJugador = document.getElementById("nombreJugador")
const vidaJugador = document.getElementById("vidaJugador")

const nombreEnemigo = document.getElementById("nombreEnemigo")
const vidaEnemigo = document.getElementById("vidaEnemigo")

const btnAtacar = document.getElementById("btnAtacar")
const mensaje = document.getElementById("mensaje")


// MOSTRAR DATOS
function actualizarPantalla() {

    nombreJugador.textContent = jugador.nombre
    vidaJugador.textContent = jugador.vida

    nombreEnemigo.textContent = enemigo.nombre
    vidaEnemigo.textContent = enemigo.vida
}

actualizarPantalla()


// EVENTO BOTÓN
btnAtacar.addEventListener("click", function() {

    if (jugador.vida > 0 && enemigo.vida > 0) {

        // Turno jugador
        jugador.atacar(enemigo)
        mensaje.textContent = "Has atacado al enemigo"

        if (enemigo.vida <= 0) {
            mensaje.textContent = "🎉 Has ganado"
            actualizarPantalla()
            return
        }

        // Turno enemigo
        enemigo.atacar(jugador)

        if (jugador.vida <= 0) {
            mensaje.textContent = "💀 Has perdido"
        }

        actualizarPantalla()
    }

})
