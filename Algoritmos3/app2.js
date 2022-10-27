//propiedades de arreglos 
//length

const frutas = ["🍐","Manzana", "Guayaba","Platano"]
console.log (frutas);

console.log (frutas.length);

//metodos - acciones


//push ()

let num = frutas.push ("Sandia", "limon");
console.log (frutas);
console.log (num);

//unshift () - agrega al inicio 
frutas.unshift ("Guanabana");
console.log (frutas)

//metodos para quitar elementos al final
//pop

 let elemento = frutas.pop()
console.log (frutas)
console.log (elemento)

//shift 

let elemento2 = frutas.shift ()
console.log (frutas)
console.log (elemento2)

//frutas.indexOf();


console.log (frutas.lastIndexOf('Manzana'))
console.log (frutas.lastIndexOf('Platano'))

//reverse 
frutas.reverse();
console.log (frutas);

frutas.reverse()
console.log (frutas)

//sort
frutas.sort();
console.log (frutas)

const numeros =[4, 567, 2, 4566, 45, 76, 1];
numeros. sort();
console.log (numeros);

//numeros.sort ((a,b) =>  a-b )

numeros.sort (function order (a,b) {return a - b } )//function call back
console.log (numeros)