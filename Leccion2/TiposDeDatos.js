// Tipos de datos en JS
var nombre = "Jorge";
console.log(typeof nombre);
nombre = 7
console.log(typeof nombre);
nombre = 12.3
var numero = 3000;
console.log(typeof numero)

    var objeto = {
        name : "Jorge",
        apellido: "Mathez",
        Telefono: 2604224940
    
    }
    console.log(typeof objeto);

    //Datos Booleanos
    var bandera = true;
    console.log(bandera);

    //Tipo de dato funcion
    function miFuncion() {}

console.log(typeof miFuncion);  

// Tipo de dato Symbol
var simbolo = Symbol("mi simbolo")
console.log(typeof simbolo);

//Tipo de dato Clasico
class Persona {
constructor(nombre,apellido){
    this.nombre = nombre
    this.apellido = apellido
}
}

console.log(typeof Persona);

// Tipo de dato undefined
var x;
console.log(typeof x);

var y = null; // null no es un tipo de dato, pero su origen es de tipo object 
console.log(typeof y );

var juegos = ["Elden Ring","Dota2","Fifa19"]
console.log(juegos);
console.log(typeof juegos);

var z = "";
console.log(z);
console.log(typeof z);


        
    

