const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite sua altura em metros (ex: 1.85): ", (alturaStr) => {
    rl.question("Digite seu peso em kg (ex: 75): ", (pesoStr) => {
        let altura = parseFloat(alturaStr);
        let peso = parseFloat(pesoStr);

        const imc = peso / (altura * altura);

        let resultado = "O seu IMC é " + imc.toFixed(2) + " e você está ";

        if (imc < 18.5) {
            resultado += "abaixo do peso";
        } else if (imc <= 24.9) {
            resultado += "no peso certo";
        } else if (imc <= 29.9) {
            resultado += "com sobrepeso";
        } else if (imc <= 34.9) {
            resultado += "com Obesidade Grau I";
        } else if (imc <= 39.9) {
            resultado += "com Obesidade Grau II";
        } else {
            resultado += "com Obesidade Grau III";
        }

        console.log(resultado);
        rl.close();
    });
});
