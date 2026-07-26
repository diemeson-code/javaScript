/**Do…While com Input do Usuário: Use o laço do...while para perguntar ao usuário um número entre 1 e 10 até que ele digite o número correto. (Dica: Você pode precisar de uma biblioteca como readline-sync para a entrada do usuário). */
const readline = require('readline-sync');

let numero;


do{
    numero = Number(
    readline.question('Digite um numero entre 1 e 10:')
    );
    console.log(numero)
    numero++;
}while(numero < 1 || numero > 10 );