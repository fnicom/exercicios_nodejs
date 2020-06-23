// ## Importe a biblioteca ##
let rl = require('readline-sync');

let mascara = rl.question("Você está usando mascara ao sair de casa? (Sim ou Não)");

let lavMao = rl.question("Está lavando as mãos frequentemente? (Sim ou Não)")

//Operador ternario
let Result = mascara === lavMao ? "Parabéns" : "Deixa de ser porco"; 
console.log(Result)






// ## Faça o código ##
