let arr = [
    [1, 2, 3,],
    [4, 5, 6], 
    [7, 8, 9]
];
let contador = 0
while (contador < 10){
contador =contador + 1;
console.log (contador)
}
console.log (contador);


/* 
while (contador < 10) {
    console.log )contador);
    contador = contador + 1;}

    do {
        console.log )(contador);
        contador ++;
    }

    }


}

/*for (let fila = 0; fila <= 2; fila++){
    for (let columna =0; columna<=2; columna++ ){

    console.log (arr [fila][columna]);

    }
    console.log("-------------")

}*/

let fila = 0;
do {

    for (let columna = 0; columna <= 2; columna++) {

        console.log (arr [fila][columna]);
    }
    fila++;
    console.log ("---------");
} while (fila <= 0)