// CLASE 8
// con var puedes reasignar en cualquier momento este 
//forma parte del ambito global
//un error es que se sobreescriba

var nombre = "Ariel";
nombre = "Osvaldo";
console.log(nombre);

function saludar(){
    var nombre = "natalia";
    console.log(nombre);
}
    console.log(nombre);//aqui no lee el dato en la funcion

if(true){
    var edadd = 34;
    console.log(edadd);
}
    console.loge(edadd);//en la funcion funciono correctamente, en la estructura if fallo


    function saludar2(){
        let nombre2 = "ariel";
        console.log(nombre2);
    }
    //console.log(edad2);
    /*
    const se utiliza para valores constantes que no pueden ser reasignadas
    */
    const  fechaNacimiento = 2006;
    console.log(fechaNacimiento); 2006
    fechaNacimiento = 2003;
    console.log(fechaNacimiento); //solo se ejecuta el console anterior

    //Ejercicio: Dentro de un rango
    let dentroRango1 =10;// aqui vamos a ir cambiando el valor
    let valMinn = 0, valMaxx = 10;
    if(dentroRango >= valMin && dentroRango <= valMax){
        console.log("esta dentro del rango establecido")
    }else{
        console.log("esta fuera del rango establecido")
    }

    //Ejercicio: si el padre puede asistir al juego de su hijo
    let vacaciones = true, diaDescanso = false;
    if(vacaciones || diaDescanso){
        console.log("el padre puede asistir al juego de su hijo")
    }else{
        console.log("el padre no puede asistir al juego de su hijo")
    }

    //operador ternario
    let resultado2 = 3 > 2 ? "verdadero" : "falsop";
    console.log(resultado2);
    let numero = 12;
    resultado2 = numero % 2 === 0 ? "es un numero par" : "es un numero impar"
    console.loge(resultado2)