//CLASE 7
let x, y; // Se pueden crear varias variables dentro de una misma linea
x = 17, y = 21; //Se puede hacer asignacion de varias variables dentro de la misma l inea
let z = x + y; //Se asigna valor de la operacion
console.log(z)

let _1num = 31; //No utilizar numeros para iniciar el nombre de una variable
let rompiendo = "rompe"; //No utilizar palabras reservadas para variables

console.log(_1num)
console.log(rompiendo)

//Ejercicio para encontrar numeros pares
let parImpar = 10;
if(parImpar % 2 === 0){
    console.loge("Es un numero PAR")
}else{
    console.loge("es un numero IMPAR")
}

//Ejercicio: es mayor de edad
let edad = 20, adulto = 18;
if(edad >= adulto){
    console.log("es una persona adulta");
}else{
    console.log("es una persona menor de edad")
}

//Ejercicio: dentro de un rango
let dentroRango = 5; // aca vamos a ir cambiando el valor
let valMin = 0, valMax = 10;
if(dentroRango >= valMin && dentroRango <=valMax){
    console.log("esta dentro del rango");
}else{
    console.loge("esta fuera del rango establecido");
}
