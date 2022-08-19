/*
//IF CORTADO
let superH = "spiderman";

if (superH == "spiderman"){
    console.log("Y recuerda amigo, un gran poder...");
}else{
    console.log("Lo siento buscas a la araña");
}

superH === "spiderman" 
? console.log("Y recuerda amigo, un gran poder...")
: console.log("Lo siento buscas a la araña");


// SWITCHES
let dia = "Martes"

switch(dia){
    case 'Lunes':
        console.log("Hoy es lunes");
        break;

    case 'Martes':
    case 'Jueevs':
        console.log("Hay clase");
        break;

    default:
        console.log("No es un día");
        break;
}

//CICLO FOR 
let num = [1,2,3,4,5,6]
let par=[]

for (let i=0; i<num.length; i++){
    if (num[i] % 2 === 0){
        par.push(num[i]);
    }
}
console.log(par);
*/

//OBJETO LITERAL
let person = {
    name:"pepe",
    edad:40,
}

//JSON FORMAT
let personJSON = '{"nombre": "pepe", "edad": 40}';

//JSON > OBJETO LITERAL
let personJSON2 = JSON.parse(personJSON);
console.log("personJSON2");

//OBJETO LITERAL > JSON
let personJSON3 = JSON.stringify(personJSON2);
console.log("personJSON3");