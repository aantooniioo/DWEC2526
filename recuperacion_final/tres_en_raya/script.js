// ===== VARIABLES =====
let juego = null;

let nombreJugador = "";
let turnoJugador = "X";
let rondas = 3;

let puntos = 0;
let jugadas = 0;
let restantes = 0;


// ===== ELEMENTOS =====
let panelInicio = document.getElementById("panelInicio");
let juegoDiv = document.getElementById("juego");

let botonEmpezar = document.getElementById("empezar");
let botonAbandonar = document.getElementById("abandonar");

let nombreInput = document.getElementById("nombre");
let turnoSelect = document.getElementById("turno");
let rondasInput = document.getElementById("rondas");

let nombreJugadorSpan = document.getElementById("nombreJugador");
let puntosSpan = document.getElementById("puntos");
let jugadasSpan = document.getElementById("jugadas");
let restantesSpan = document.getElementById("restantes");

let modal = document.getElementById("modalFinal");
let mensajeFinal = document.getElementById("mensajeFinal");

// Notificación de error
let errorDiv = document.getElementById("errorNombre");
let mensajeError = document.getElementById("mensajeError");


// ===== CREAR TABLERO =====
function crearTablero() {
    let tablero = document.getElementById("tablero");
    tablero.innerHTML = "";

    for (let i = 0; i < 9; i++) {
        let celda = document.createElement("div");
        celda.classList.add("celda");
        tablero.appendChild(celda);
    }
}


// ===== CLASE JUEGO =====
class Juego {
    constructor() {
        this.tablero = ["", "", "", "", "", "", "", "", ""];
        this.turno = turnoJugador;
        this.jugando = true;

        this.celdas = document.querySelectorAll(".celda");

        this.iniciarEventos();
    }

    // Añadir eventos a las celdas
    iniciarEventos() {
        this.celdas.forEach((celda, index) => {

            celda.addEventListener("click", () => this.jugar(index, celda));

            // Efecto visual al pasar el ratón
            celda.addEventListener("mouseenter", () => {
                if (celda.textContent === "") {
                    celda.style.background = "#cfcfcf";
                }
            });

            celda.addEventListener("mouseleave", () => {
                celda.style.background = "#ddd";
            });
        });
    }

    // Turno del jugador
    jugar(index, celda) {

        if (this.tablero[index] !== "" || !this.jugando) return;

        this.tablero[index] = this.turno;
        celda.textContent = this.turno;

        // Animación simple al colocar ficha
        celda.classList.add("activa");
        setTimeout(() => {
            celda.classList.remove("activa");
        }, 150);

        // Comprobar ganador
        if (this.comprobarGanador()) {

            jugadas++;
            restantes--;

            let ganador = this.turno === turnoJugador ? nombreJugador : "IA";

            if (ganador === nombreJugador) puntos++;

            actualizarMarcador();

            if (restantes > 0) mostrarRonda(ganador);

            if (restantes === 0) {
                this.jugando = false;
                mostrarFinal();
                return;
            }

            setTimeout(() => this.reiniciar(), 1500);
            return;
        }

        // Empate
        if (!this.tablero.includes("")) {

            jugadas++;
            restantes--;

            actualizarMarcador();

            if (restantes > 0) mostrarEmpate();

            if (restantes === 0) {
                this.jugando = false;
                mostrarFinal();
                return;
            }

            setTimeout(() => this.reiniciar(), 1500);
            return;
        }

        // Cambiar turno
        this.turno = this.turno === "X" ? "O" : "X";

        // Turno de la IA
        if (this.turno !== turnoJugador && this.jugando) {
            setTimeout(() => {
                this.jugarMaquina();
            }, 500);
        }
    }

    // Turno de la IA
    jugarMaquina() {

        let libres = this.tablero
            .map((v, i) => v === "" ? i : null)
            .filter(v => v !== null);

        let random = libres[Math.floor(Math.random() * libres.length)];

        this.tablero[random] = this.turno;
        this.celdas[random].textContent = this.turno;

        // Animación IA
        this.celdas[random].classList.add("activa");
        setTimeout(() => {
            this.celdas[random].classList.remove("activa");
        }, 150);

        // Comprobar ganador IA
        if (this.comprobarGanador()) {

            jugadas++;
            restantes--;

            actualizarMarcador();

            if (restantes > 0) mostrarRonda("IA");

            if (restantes === 0) {
                this.jugando = false;
                mostrarFinal();
                return;
            }

            setTimeout(() => this.reiniciar(), 1500);
            return;
        }

        // Empate
        if (!this.tablero.includes("")) {

            jugadas++;
            restantes--;

            actualizarMarcador();

            if (restantes > 0) mostrarEmpate();

            if (restantes === 0) {
                this.jugando = false;
                mostrarFinal();
                return;
            }

            setTimeout(() => this.reiniciar(), 1500);
            return;
        }

        // Devolver turno al jugador
        this.turno = turnoJugador;
    }

    // Comprobar combinaciones ganadoras
    comprobarGanador() {
        let combinaciones = [
            [0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[2,4,6]
        ];

        return combinaciones.some(([a,b,c]) =>
            this.tablero[a] !== "" &&
            this.tablero[a] === this.tablero[b] &&
            this.tablero[a] === this.tablero[c]
        );
    }

    // Reiniciar tablero
    reiniciar() {
        this.tablero = ["", "", "", "", "", "", "", "", ""];
        this.turno = turnoJugador;
        this.celdas.forEach(c => c.textContent = "");
    }
}


// ===== MODALES =====

// Modal de ronda
function mostrarRonda(ganador) {

    modal.classList.remove("victoria", "derrota", "empate", "final-especial");

    mensajeFinal.innerHTML = "Ronda ganada por<br><span class='ganador'>" + ganador + "</span>";

    if (ganador === nombreJugador) {
        modal.classList.add("victoria");
    } else {
        modal.classList.add("derrota");
    }

    modal.classList.add("activo");

    setTimeout(() => {
        modal.classList.remove("activo");
    }, 1500);
}

// Modal de empate
function mostrarEmpate() {

    modal.classList.remove("victoria", "derrota", "empate", "final-especial");

    mensajeFinal.innerHTML = "Empate<br><span class='ganador'>sin ganador</span>";

    modal.classList.add("empate");

    modal.classList.add("activo");

    setTimeout(() => {
        modal.classList.remove("activo");
    }, 1500);
}

// Modal final (sin empate final)
function mostrarFinal() {

    modal.classList.remove("victoria", "derrota", "empate", "final-especial");

    modal.classList.add("final-especial");

    if (puntos > (rondas / 2)) {
        mensajeFinal.innerHTML = "Victoria final<br><span class='ganador'>" + nombreJugador + "</span>";
        lanzarConfeti();
    } else {
        mensajeFinal.innerHTML = "Derrota final<br><span class='ganador'>" + nombreJugador + "</span>";
    }

    modal.classList.add("activo");

    setTimeout(() => {
        modal.classList.remove("activo", "final-especial");
        volverInicio();
    }, 3000);
}


// ===== CONFETI =====
function lanzarConfeti() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
}


// ===== INICIAR PARTIDA =====
botonEmpezar.addEventListener("click", () => {

    nombreJugador = nombreInput.value.trim();
    turnoJugador = turnoSelect.value;
    rondas = parseInt(rondasInput.value);

    // Validación de nombre
    if (nombreJugador === "") {

        mensajeError.textContent = "Introduce tu nombre para empezar";

        errorDiv.classList.add("activo");

        setTimeout(() => {
            errorDiv.classList.remove("activo");
        }, 2000);

        return;
    }

    puntos = 0;
    jugadas = 0;
    restantes = rondas;

    nombreJugadorSpan.textContent = nombreJugador;

    panelInicio.style.display = "none";
    juegoDiv.style.display = "block";

    crearTablero();
    juego = new Juego();

    actualizarMarcador();
});


// ===== ABANDONAR =====
botonAbandonar.addEventListener("click", volverInicio);


// ===== MARCADOR =====
function actualizarMarcador() {
    puntosSpan.textContent = puntos;
    jugadasSpan.textContent = jugadas;
    restantesSpan.textContent = restantes;
}


// ===== VOLVER AL INICIO =====
function volverInicio() {
    panelInicio.style.display = "block";
    juegoDiv.style.display = "none";

    if (juego) juego.reiniciar();
}