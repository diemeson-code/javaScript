/* 2.Números:
Escreva um script que calcule a média de três números.
Investigue o que acontece quando você tenta somar um número a uma string. */
let n1 = 5;
let n2 = 5;
let n3 = 10;
media = (n1 + n2 + n3) /3
// console.log(`A média de ${n1} e ${n2} e ${n3} e igual ${media}`);
console.log(`A média é ${media.toFixed(2)}`);

let texto = "Santos";
let numero = 56;
let soma =  texto + numero
console.log(soma)

/* Resumo:
Quando somamos uma string com um número, o JavaScript transforma o número em texto.
O operador + faz concatenação quando existe uma string.*/