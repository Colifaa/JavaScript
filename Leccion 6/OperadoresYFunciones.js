 //CLASE 9 
    //convertir string a number
    let miNumero = "18>";//es una cadena
    console.log(typeof miNumero); //String
    let edad2 = Number(miNumero);//esta es una funcion
    console.log(typeof edad2);
    if(edad2 >= 18){
        console.log("puede votar")
    }else{
        console.log("muy joven para votar"); // muy joven para votar

        let resultado3 = edad2 >= 18 ? "puede votar" : "muy joven para votar";
        console.log(resultado3); //puede votar


    }
