// Array inicial
let personajes = ["Goku", "Vegeta", "Gohan"];

// Mostrar array
function imprimir() {
  document.getElementById("resultado").innerHTML =
    "Personajes: " + personajes.join(", ");
}

// Push
function addPush() {
  let nombre = document.getElementById("nombre").value;

  if (nombre !== "") {
    personajes.push(nombre);
    imprimir();

    // Limpiar input
    document.getElementById("nombre").value = "";
  }
}

// Pop
function removePop() {
  personajes.pop();
  imprimir();
}

// Unshift
function addUnshift() {
  let nombre = document.getElementById("nombre").value;

  if (nombre !== "") {
    personajes.unshift(nombre);
    imprimir();

    // Limpiar input
    document.getElementById("nombre").value = "";
  }
}

// Shift
function removeShift() {
  personajes.shift();
  imprimir();
}

// Join
function mostrarJoin() {
  document.getElementById("resultado").innerHTML =
    personajes.join(" - ");
}

// Splice (borra el primero)
function usarSplice() {
  personajes.splice(0, 1);
  imprimir();
}

// Mostrar al cargar
imprimir();
