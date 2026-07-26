// Escreva uma função que use every() para verificar se todos os elementos de um array são números.

function verificarSeSaoNumeros(array) {
    return array.every(elemento => typeof elemento === 'number');
}

const numeros = [1, 2, '3', 4, 5];
console.log(verificarSeSaoNumeros(numeros)); // false
/*🔍 O que o every() faz

O .every():

percorre o array inteiro
testa cada elemento
retorna:
true → se todos passarem
false → se um único falhar */