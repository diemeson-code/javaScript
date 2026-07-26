// Use o método reduce() para encontrar o produto de todos os números em um array. 
 const numeros  = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
 const produto  = numeros.reduce((acumulador, valor_atual) => acumulador * valor_atual, 1);
 console.log(produto);
