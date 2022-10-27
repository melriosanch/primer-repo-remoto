
const personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];


console.log (personas)


//recortar Dani

personas.splice(1,1)
console.log (personas)

//cambiar uno o varios elementos 

personas.splice(1,1, "Manuel")
//console.log (personas)

//agregar a Luis al principio del arreglo
personas.splice(0,0, "Luis")
console.log (personas)

//agregar mi nombre al final del arreglo
personas.push ("Melissa")
console.log (personas)

//ver la posicion de Maria

console.log (personas.indexOf("Maria"))

//ver la posicion de tu nombre 

console.log (personas.indexOf("Melissa"))






