const nombre = document.getElementById("nombre");
const nacimiento = document.getElementById("nacimiento");
const btn = document.getElementById("btnCalcular");

const resultado = document.getElementById("resultado");
const cumple = document.getElementById("cumple");

btn.addEventListener("click", function () {
  if (nombre.value === "" || nacimiento.value === "") {
    resultado.textContent = "Rellena nombre y fecha.";
    cumple.textContent = "";
    return;
  }

  const hoy = new Date();
  const fechaNac = new Date(nacimiento.value);

  let edad = hoy.getFullYear() - fechaNac.getFullYear();

  const mesHoy = hoy.getMonth();
  const diaHoy = hoy.getDate();
  const mesNac = fechaNac.getMonth();
  const diaNac = fechaNac.getDate();

  if (mesHoy < mesNac || (mesHoy === mesNac && diaHoy < diaNac)) {
    edad = edad - 1;
  }

  resultado.textContent = "Hola " + nombre.value + ", tienes " + edad + " años.";

  const proximo = new Date(hoy.getFullYear(), mesNac, diaNac);

  if (proximo < hoy) {
    proximo.setFullYear(hoy.getFullYear() + 1);
  }

  const ms = proximo - hoy;
  const dias = Math.ceil(ms / (1000 * 60 * 60 * 24));

  cumple.textContent = "Te faltan " + dias + " días para tu cumple.";
});
