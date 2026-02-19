// Lista de 50 palabras
let palabras = [
    "casa", "perro", "gato", "coche", "mesa",
    "silla", "puerta", "ventana", "teclado", "raton",
    "escuela", "libro", "lapiz", "boli", "mochila",
    "playa", "mar", "montana", "rio", "bosque",
    "sol", "luna", "estrella", "cielo", "nube",
    "aprobado", "agua", "tierra", "aire", "reloj",
    "telefono", "camisa", "pantalon", "zapato", "gorra",
    "cama", "armario", "cocina", "baño", "comida",
    "pizza", "hamburguesa", "arroz", "pasta", "leche",
    "futbol", "balon", "musica", "luis", "amigo"
]

// Elegir palabra aleatoria
let numero = Math.floor(Math.random() * palabras.length)
let palabra = palabras[numero]

let oculta = ""
let intentos = 10

// Crear los guiones al inicio
for (let i = 0; i < palabra.length; i++) {
    oculta = oculta + "_ "
}

document.getElementById("palabra").innerHTML = oculta
document.getElementById("intentos").innerHTML = "Intentos: " + intentos


// Detectar cuando se pulsa ENTER
document.getElementById("letra").addEventListener("keyup", function(event) {

    if (event.key == "Enter") {
        probar()
    }

})


function probar() {

    let letra = document.getElementById("letra").value
    letra = letra.toLowerCase()

    let nueva = ""
    let acierto = false

    if (letra == "") {
        document.getElementById("mensaje").innerHTML = "Escribe una letra"
        return
    }

    for (let i = 0; i < palabra.length; i++) {

        if (palabra.charAt(i) == letra) {
            nueva = nueva + letra + " "
            acierto = true
        } else {
            nueva = nueva + oculta.charAt(i * 2) + " "
        }

    }

    oculta = nueva
    document.getElementById("palabra").innerHTML = oculta

    if (acierto == true) {
        document.getElementById("mensaje").innerHTML = "✅ Letra correcta"
    } else {
        intentos = intentos - 1
        document.getElementById("mensaje").innerHTML = "❌ Letra incorrecta"
        document.getElementById("intentos").innerHTML = "Intentos: " + intentos
    }

    // Comprobar si ganó
    if (oculta.indexOf("_") == -1) {
        document.getElementById("mensaje").innerHTML = "🎉 HAS GANADO 🎉"
    }

    if (intentos == 0) {
        document.getElementById("mensaje").innerHTML = "💀 Has perdido. Era: " + palabra
    }

    document.getElementById("letra").value = ""
}
