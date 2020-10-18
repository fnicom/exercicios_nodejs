// ## Importe a biblioteca ##

let rs = require('readline-sync');

let  userUm = rs.question("Informe seu nome: \n");

let  askUm = rs.question("Digite qualquer coisa: \n");

let  userDois = rs.question("Informe seu nome: \n");

let  askDois = rs.question("Digite qualquer coisa: \n");

console.log(userUm + " voce digitou: " + askUm.length, "caracteres!");

console.log(userDois + " voce digitou: " + askDois.length, "caracteres!");

if (askUm.length > askDois.length) { 

    console.log(`${userUm} digitou mais caracteres!`)
    
} if (askDois.length > askUm.length) {

    console.log(`${userDois} digitou mais caracteres!`)

} else  {

    console.log("Os dois digitaram a mesma quantidade de caracteres!!! \n")

} 

// ## Faça o código ##
