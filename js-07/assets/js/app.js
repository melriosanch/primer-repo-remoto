const titulo = document.getElementById('titulo');

const parrafo = document.getElementsByClassName ('parrafo');

titulo.textContent = "Hola"
parrafo[0].innerHTML ="Soy un parrafo"

console.log (titulo.textContent);
console.log (parrafo[1].textContent);

//parrafo[1].style.color = "pink";
//parrafo[1].style.backgroundColor = "grey";
//console.log( parrafo[1].classList.contains('coloresFeos'));
parrafo[1].classList.add('coloresFeos');

//crear elementos html 
const padre = document.getElementById ("padre")

const enlace = document.createElement("a");
enlace.href = "http://google.com";
enlace.textContent = "Ir a google";

//document.body.appendChild(enlace);

//document.body.insertAdjacentElement("beforeend", enlace)
PannerNode.appendChild(enlace)


console.log(document.body)