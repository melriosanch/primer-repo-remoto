let Name="MelissaRanch";
console.log(Name);

function miNombre (){
    let nombre = "Melissa";
    console.log(nombre);
}

miNombre();

function funcion1(){
    let valor = 2;
    valor= valor + 3;
    return valor;
}
let resultado = funcion1();
console.log("el resultado es:" + resultado);

function funcion2(){
    let valor = 2;
    valor= valor + 3;
}
let resultado2 = funcion2();
console.log("el resultado es:" + resultado);

let varglobal = 5;
function funcion3(){
    let Varlocal = "el valor es:";
    console.log(Varlocal + varglobal);
}
    
funcion3();

function funcion4(valor = 4){
    let numero = 6;
    numero = numero * valor;
    return numero;
}

let salida = funcion4(2);
console.log("el producto es" + salida);

let suma =(x, y) => {return x+y};
let resultado3 = suma (5,3);
console.log("la suma es:" + resultado3);


let totalprice=(x,y,z) =>{
    return (x*z)+y
};    
let resultado4= totalprice(23.34,10,1.16)
console.log("el precio total es:" + resultado4);


