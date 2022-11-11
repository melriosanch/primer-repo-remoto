/* 
const foo = () => console.log ("first");
const bar = () => setTimeout (() => console.log ("second"), 500);
const baz = () => console.log ("third")

bar(); second
foo();first
baz(); third

-------------------


const foo = () => console.log ("first");
const bar = () => setTimeout (() => console.log ("second"), 2000);
const baz = () => console.log ("third")

bar(); 
foo();
baz(); 

*/ 

const nombre = () => {
    const nombres = ["Pepe", "Pancho", "María"];

    

    /* setTimeout(() => {
        return nombres;
    }, 0); */

    return new Promise((resolve, reject) => { //resolve -- proceso exitoso
        setTimeout(() => {
                                //reject -- proceso no exitoso
           if(true){
            resolve(nombres);
           }else{
            reject("No hay nombres");
           }
           
        }, 3000)
    });

}
//servidor 


//console.log(nombre()[0]);

//nombre().then(nombres => console.log(nombres)).catch(error => console.warn(error));


/*const url = 'https://pokeapi.co/api/v/pokemon/25' 
const pokedex = () => {
    fetch (url)
    .then (datos =>  datos.json())
    .then (pokemon => console.log(pokemon))
    .catch (error => console.log (error))
};

//azucar sintactics
//codigo que se creo para facilitar el trabajo de los programadores
//async -- await
/* 
async function obtenerNombre (){

}
*/
/*const obtenerNombre = async () => {
    try {

    let nombres = await nombre();
    console.log(nombres);
} catch (error){
    alert(error)
}
}
obtenerNombre()*/

const cartaPokemon = document.getElementById('pokemon');
const nombrePokemon = document.getElementById('nombre');
const imagen = document.getElementById('img');
const form = document.getElementById('form')



const pokedex = async (numero) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${numero}`;
    try {

        const respuesta = await fetch(url);
        const pokemon = await respuesta.json();
        
        console.log(pokemon.name);

        const datos = {
            nombre: pokemon.name,
            imagen: pokemon.sprites.other['official-artwork'].front_default,
        }

        console.log(datos.imagen);

        nombrePokemon.textContent = datos.nombre;
        imagen.innerHTML = `
            <img src="${datos.imagen}" alt="imagen de ${datos.nombre}" width="250"/>
        `;
        
        
    } catch (error) {


        
    }
}

pokedex();

form.addEventListener('submit', (evento)=>{
    //codigo
    evento.preventDefault();
    const valor = document.getElementById('idP').value;
    console.log(valor)
    pokedex(valor);
   // console.log(evento.target)
   form.reset()

});


