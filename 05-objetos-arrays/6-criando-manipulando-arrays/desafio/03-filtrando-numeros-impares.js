// Filtrando Números Ímpares: Utilize o método filter() para criar um array 
// contendo apenas os números ímpares de um array dado.
/*
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = number.filter(numero => numero % 2 !== 0);
console.log(oddNumbers);*/



//Versão alternativa (mostra mais domínio)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isOdd(numero) {
  return numero % 2 !== 0;
}

const oddNumbers = numbers.filter(isOdd);

console.log(oddNumbers);