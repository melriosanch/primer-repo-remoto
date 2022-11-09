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
const obtenerNombre = async () => {
    try {

    let nombres = await nombre();
    console.log(nombres);
} catch (error){
    alert(error)
}
}
obtenerNombre()
