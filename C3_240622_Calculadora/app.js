let sumar = require("./sumar");
let restar = require("./restar");
let multiplicar = require("./multiplicar");
let dividir = require("./dividir");

var operaciones = [sumar,restar,dividir,multiplicar]

function calculadora(operacion,n1,n2){
    switch (operacion){
        case 'suma':
            console.log(operaciones[0](n1,n2));
            break;
        case 'resta':
            console.log(operaciones[1](n1,n2));
            break;
        case 'division':
            console.log(operaciones[2](n1,n2));
            break;
        case 'multiplicacion':
            console.log(operaciones[3](n1,n2));
            break;
        default:
            console.log("No existe tu operación"); 
    }
}

calculadora("suma",10,20);
calculadora("resta",10,20);
calculadora("division",0,10);
calculadora("multiplicacion",10,0);