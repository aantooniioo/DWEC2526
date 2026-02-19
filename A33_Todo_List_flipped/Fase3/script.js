const nombreTarea = document.getElementById("nombreTarea");
const descTarea = document.getElementById("descTarea");
const fechaTarea = document.getElementById("fechaTarea");

const btnCrear = document.getElementById("btnCrear");
const btnBorrarTodo = document.getElementById("btnBorrarTodo");
const lista = document.getElementById("lista");

btnCrear.addEventListener("click", function () {
  if (nombreTarea.value === "" || descTarea.value === "" || fechaTarea.value === "") {
    alert("Rellena todos los campos");
    return;
  }

  const li = document.createElement("li");

  const creada = new Date().toLocaleString();

  const titulo = document.createElement("div");
  titulo.textContent = nombreTarea.value;

  const descripcion = document.createElement("div");
  descripcion.textContent = descTarea.value + " (Fecha: " + fechaTarea.value + ")";

  const fechaCreacion = document.createElement("small");
  fechaCreacion.textContent = "Creada: " + creada;

  const acciones = document.createElement("div");
  acciones.className = "acciones";

  const btnCompletar = document.createElement("button");
  btnCompletar.textContent = "Completar";

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";

  btnCompletar.addEventListener("click", function () {
    titulo.classList.add("tachado");
    descripcion.classList.add("tachado");

    btnCompletar.style.display = "none";

    acciones.insertBefore(btnEliminar, acciones.firstChild);
  });

  btnEliminar.addEventListener("click", function () {
    lista.removeChild(li);
  });

  acciones.appendChild(btnCompletar);
  acciones.appendChild(btnEliminar);

  li.appendChild(titulo);
  li.appendChild(descripcion);
  li.appendChild(fechaCreacion);
  li.appendChild(acciones);

  lista.appendChild(li);

  nombreTarea.value = "";
  descTarea.value = "";
  fechaTarea.value = "";
});

btnBorrarTodo.addEventListener("click", function () {
  lista.innerHTML = "";
});
