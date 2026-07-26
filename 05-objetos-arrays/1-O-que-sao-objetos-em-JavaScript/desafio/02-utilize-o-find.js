// Utilize o find() para obter o primeiro número ímpar em um array de números.
const numeros  = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
const primeiroImpa = numeros.find(numero => numero % 2 !== 0);
console.log(primeiroImpa)

/*🔍 Como funciona o find()
Percorre o array
Para no primeiro elemento que atende a condição
Retorna esse valor

👉 Diferente do filter():

find() → retorna um único valor
filter() → retorna um array */