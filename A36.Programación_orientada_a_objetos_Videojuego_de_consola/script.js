// CLASE BASE
class Personaje {

    constructor(nombre, vida, ataque) {
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;
    }

    atacar(objetivo) {
        objetivo.vida = objetivo.vida - this.ataque;
    }

}

// CLASE HIJA HEROE
class Heroe extends Personaje {

    constructor(nombre, vida, ataque) {
        super(nombre, vida, ataque);
    }

}

// CLASE HIJA ENEMIGO
class Enemigo extends Personaje {

    constructor(nombre, vida, ataque) {
        super(nombre, vida, ataque);
    }

}

// CREAR OBJETOS
let heroe = new Heroe("Mario", 100, 20);
let enemigo = new Enemigo("Bowser", 80, 15);

// ELEMENTOS DEL DOM
let vidaHeroeTxt = document.getElementById("vidaHeroe");
let vidaEnemigoTxt = document.getElementById("vidaEnemigo");
let mensaje = document.getElementById("mensaje");
let boton = document.getElementById("btnAtacar");

// MOSTRAR VIDA
function mostrarVida() {
    vidaHeroeTxt.textContent = "Vida Héroe: " + heroe.vida;
    vidaEnemigoTxt.textContent = "Vida Enemigo: " + enemigo.vida;
}

mostrarVida();

// EVENTO BOTÓN
boton.addEventListener("click", function() {

    // Héroe ataca
    heroe.atacar(enemigo);

    mensaje.textContent = "El héroe ha atacado!";

    if (enemigo.vida > 0) {
        enemigo.atacar(heroe);
    }

    if (heroe.vida <= 0) {
        mensaje.textContent = "💀 El héroe ha perdido";
        boton.disabled = true;
    }

    if (enemigo.vida <= 0) {
        mensaje.textContent = "🏆 El héroe ha ganado";
        boton.disabled = true;
    }

    mostrarVida();

});
