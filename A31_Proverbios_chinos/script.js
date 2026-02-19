let proverbios = [
    "El mejor momento para plantar un árbol fue hace 20 años.",
    "Quien mueve una montaña empieza por pequeñas piedras.",
    "La paciencia es amarga, pero su fruto es dulce.",
    "Aprender sin pensar es inútil.",
    "Si te caes siete veces, levántate ocho.",
    "El que pregunta es tonto cinco minutos; el que no pregunta, lo es toda la vida.",
    "La experiencia es un peine que te dan cuando ya estás calvo.",
    "Si tu problema tiene solución, ¿para qué te preocupas?"
];


// ======================
// BOTÓN FORTUNE
// ======================

let boton1 = document.getElementById("fortune");

boton1.addEventListener("click", function() {

    let num = Math.random() * proverbios.length;
    num = Math.floor(num);

    document.getElementById("proverbio").textContent = proverbios[num];

});


// ======================
// ARRAY DE PERSONAS (RETO)
// ======================

let personas = [
    "nombre:Antonio Ángeles; edad:20; Profesión:Estudiante; Hobby:Producir música;",
    "nombre:Carlos Alcalde; edad:21; Profesión:Estudiante;",
    "nombre:Marcos Oliva; edad:20; Profesión:Estudiante;",
    "nombre:Jesús Sánchez; edad:19; Profesión:Ingeniera; Hobby:Ser comunista;"
];


// ======================
// BOTÓN RETO STRINGS
// ======================

let boton2 = document.getElementById("reto");

boton2.addEventListener("click", function() {

    // coger una persona aleatoria
    let num = Math.random() * personas.length;
    num = Math.floor(num);

    let info = personas[num];

    // eliminar espacios
    info = info.trim();

    // separar por ;
    let partes = info.split(";");

    // coger la primera parte (nombre)
    let parteNombre = partes[0];

    // separar por :
    let datosNombre = parteNombre.split(":");

    let nombre = datosNombre[1];

    // mostrar resultados
    document.getElementById("nombre").textContent = nombre;
    document.getElementById("campos").textContent = partes.length;

});
