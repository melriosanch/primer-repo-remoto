/*declarar varibles 2 let y var 

string
number
boolean
bignit
undefined
symbol
*/

let miVariable = prompt("Cual es tu nombre: ");

function saludoPer() {
  //alert(miVariable);
}

function suma() {
  // let num = parseInt (prompt( "el valor de numero 1"))
  // let num2 = parseInt (prompt ("el valor de numero 2"))
  let num = 5;
  let num2 = 6;
  let resultado = num + num2;
  return resultado;
}

//let r = suma ();
//alert(suma());

console.log("el resultado de la suma " + suma());

function resta() {
  let num = 10;
  let num2 = 2;
  return num - num2;
}
console.log(" el resultdo de la resta " + resta());

function mult() {
  let num = 4;
  let num2 = 5;
  return num * num2;
}

console.log("el resultado de la multiplicación " + mult());

function div() {
  let num = 30;
  let num2 = 5;
  if (num2 != 0) {
    return num / num2;
  }
  console.log("el denominador es 0");
}
console.log("el resultado de la división es " + div());

function residuo() {
  let num1 = 7;
  let num2 = 2;
  let resultado = num1 % num2;
  return resultado;
}
console.log("el residuo queda como " + residuo());

function adicionales() {
  let num1 = 7;
  num1 /= num1;
  return num1;
}
console.log(" el numero adicional es " + adicionales());

function logico() {
  let valido = 5;
  let valido2 = 3;
  if (valido > valido2) {
    console.log("el mayor es : " + valido);
  }
}

//llamar a la funcion
logico();

function edad() {
  let miEdad = 18;
  if (miEdad >= 18) {
    console.log("eres mayor de edad");
  } else {
    console.log("No eres mayor de edad");
  }
}

edad();
// solo llamar la funcion fuera de ella misma en pocas palabras es como si quisieras comerte una dona si esta dentro de la función sige en la caja y no puedes comértela y si la sacas ya podrias

//los operdores logicos hcaen estructuras de controles mas grandes and or, and &&, or ||

function conjunciones() {
  let valor1 = true;
  let valor2 = false;
  if (valor1 && valor2) {
    console.log("el valor1 y el valor2 son verdaderos");
  } else {
    console.log("Un valor es falso");
  }
}
conjunciones();

function disyuncion() {
  let valor1 = false;
  let valor2 = true;
  if (valor1 || valor2) {
    console.log("el operador or es verdadero");
  } else {
    console.log("el operador or es falso");
  }
}
disyuncion();

function negacion() {
  let valor1 = false;
  if (!!valor1) {
    console.log("el valor es " + valor1);
  } else {
    console.log("el valor negado es " + valor1);
  }
}
negacion();


