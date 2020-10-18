// ## Importe a biblioteca ##
let rs = require("readline-sync");

let mask = rs.question("Está usando mascara quando sai de casa? ");

let lavMao = rs.question("Esta lavando as mãos quando sai de casa? ");

if (mask == "sim" && lavMao == "sim") {
    console.log("Parabens \n");
} else {
    console.log("ta vacilando ein \n");
}








// ## Faça o código ##
