// padre
let padre = document.getElementById("padre");

document.createElement("div");

// hijo1
let hijo1 = document.createElement("div");
hijo1.innerHTML = "paco paco";
padre.appendChild(hijo1);

//hijo2
let hijo2 = document.createElement("div");
hijo2.className = "circulo";
hijo2.innerHTML ="O";
padre.appendChild(hijo2);

//hijo22
let hijo22 = document.createElement("div");
hijo22.className = "circuloRojo";
hijo22.innerHTML ="O";
padre.appendChild(hijo22);

//hijo3 y nietos
// hijo 3 con ul
let hijo3 = document.createElement("div");
let ul = document.createElement("ul");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
hijo3.innerHTML = "Caballeros del Zodiaco:";
li1.innerHTML = "Seiya";
li2.innerHTML = "Sergiu";
ul.appendChild(li1);
ul.appendChild(li2);
hijo3.appendChild(ul);
padre.appendChild(hijo3);

//hijo4

/* 
cuadrado con fondo rosa con borde azul
*/

let hijo4 = document.createElement("div");
hijo4.className = "cuadradoRosa";
padre.appendChild(hijo4);