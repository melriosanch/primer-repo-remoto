//forma 1
//1 llamar al contenedor
const imagen = document.getElementsByClassName('contenedor')[0];

//2- crear el elesmento

const nuevaImg = document.createElement("img");

// 3 -modiciar atributos
nuevaImg.src = "https://placeimg.com/200/200/nature";

nuevaImg.alt = "Imagen de naturaleza";

//4 - insertar el elemento
imagen.appendChild(nuevaImg);

/* Otra forma de crear elementos*/

//1 llamar al elemento padre
const imagen2= document.getElementById("img");

//2
imagen2.innerHTML= `
    <img src="https://placeimg.com/200/200/animals" alt="Imagen de animales"/>
`;











const nombres = ["Pedro", "Juan", "Sonia", "Miguel"];

//forma 1
const lista1 = document.getElementById ("lista1");

nombres.forEach((el) => {

    const li = document.createElement ("li");
    li.textContent =el 
    lista1.appendChild (li);


} )

//forma 2

const frutas = ["Manzana", "Limon", "Pera", "Uva" ];
const lista2 = document.getElementById ('lista2');
frutas.forEach ((el) =>{
lista2.innerHTML += `
<li>${el}</li>`

});







