const jugador = {
    vida: 100,
    x: 100,
    y: 100,

    subirVida: function() {
        this.vida = this.vida + 10
    },

    bajarVida: function() {
        if(this.vida > 0){
            this.vida = this.vida - 10
        }
    },

    teletransporte: function() {
        this.x = Math.floor(Math.random() * 550)
        this.y = Math.floor(Math.random() * 250)
    }
}

const goku = document.getElementById("goku")
const vidaTexto = document.getElementById("vida")
const escenario = document.getElementById("escenario")

document.addEventListener("keydown", function(evento) {

    if(evento.key == "ArrowRight" && jugador.x < 550) {
        jugador.x = jugador.x + 10
    }

    if(evento.key == "ArrowLeft" && jugador.x > 0) {
        jugador.x = jugador.x - 10
    }

    if(evento.key == "ArrowUp" && jugador.y > 0) {
        jugador.y = jugador.y - 10
    }

    if(evento.key == "ArrowDown" && jugador.y < 250) {
        jugador.y = jugador.y + 10
    }

    if(evento.key == "v") {
        jugador.subirVida()
    }

    if(evento.key == "b") {
        jugador.bajarVida()
    }

    if(evento.key == "t") {
        jugador.teletransporte()
    }

    goku.style.left = jugador.x + "px"
    goku.style.top = jugador.y + "px"

    vidaTexto.textContent = jugador.vida

    if(jugador.vida <= 30){
        vidaTexto.style.color = "red"
    } else {
        vidaTexto.style.color = "black"
    }

})
