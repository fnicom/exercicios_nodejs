// ## Importe a biblioteca ##
let rl = require('readline-sync');

let largura = rl.questionInt("Digite a Largura ");

let comprimento = rl.questionInt("Digite o comprimento ");


// questionInt converte para Inteiro
//largura = Number(largura);
//comprimento = Number(comprimento);

//let calc = largura * comprimento

comprimento = largura * comprimento

console.log(`A área do quadrado é ${comprimento}`);




// ## Faça o código ##
