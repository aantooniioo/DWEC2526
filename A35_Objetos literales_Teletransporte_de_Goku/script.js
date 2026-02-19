// OBJETO LITERAL jugador
const jugador = {
    vida: 100,
    x: 100,
    y: 100,

    subirVida: function() {
        this.vida = this.vida + 10
    },

    bajarVida: function() {
        this.vida = this.vida - 10
    }
}

const goku = document.getElementById("goku")
const vidaTexto = document.getElementById("vida")

// Evento teclado
document.addEventListener("keydown", function(evento) {

    // Movimiento
    if(evento.key == "ArrowRight") {
        jugador.x = jugador.x + 10
    }

    if(evento.key == "ArrowLeft") {
        jugador.x = jugador.x - 10
    }

    if(evento.key == "ArrowUp") {
        jugador.y = jugador.y - 10
    }

    if(evento.key == "ArrowDown") {
        jugador.y = jugador.y + 10
    }

    // Subir vida
    if(evento.key == "v") {
        jugador.subirVida()
    }

    // Bajar vida
    if(evento.key == "b") {
        jugador.bajarVida()
    }

    // Actualizar posición en pantalla
    goku.style.left = jugador.x + "px"
    goku.style.top = jugador.y + "px"

    // Actualizar vida en pantalla
    vidaTexto.textContent = jugador.vida

})
