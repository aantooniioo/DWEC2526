// Función principal
function calcular(operador) {
  const op1 = parseFloat(document.getElementById("op1").value);
  const op2 = parseFloat(document.getElementById("op2").value);
  let resultado;

  // Validación
  if (isNaN(op1) || isNaN(op2)) {
    alert("Introduce números válidos");
    return;
  }

  // Operaciones
  switch (operador) {
    case '+': resultado = op1 + op2; agregarLog(op1, operador, op2, resultado, "blue"); break;
    case '-': resultado = op1 - op2; agregarLog(op1, operador, op2, resultado, "red"); break;
    case '*': resultado = op1 * op2; agregarLog(op1, operador, op2, resultado, "green"); break;
    case '/':
      if (op2 === 0) { alert("No se puede dividir entre 0"); return; }
      resultado = op1 / op2; agregarLog(op1, operador, op2, resultado, "violet"); break;
  }

  // Mostrar resultado
  document.getElementById("resultado").value = resultado;

  // Fondo dinámico
  cambiarFondo(resultado);
}

// Añadir al log
function agregarLog(op1, operador, op2, resultado, color) {
  const log = document.getElementById("log");
  const entrada = document.createElement("p");
  entrada.textContent = `Operación: ${op1} ${operador} ${op2} = ${resultado}`;
  entrada.style.color = color;
  log.appendChild(entrada);
}

// Borrar log
function borrarLog() {
  document.getElementById("log").innerHTML = "";
}

// Cambiar fondo
function cambiarFondo(resultado) {
  if (resultado % 2 === 0) {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
  } else {
    document.body.style.backgroundColor = "#008000"; // Verde Heineken
  }
}