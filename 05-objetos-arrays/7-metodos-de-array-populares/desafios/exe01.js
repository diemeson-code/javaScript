/** Use o método reduce() para encontrar o produto de todos os números em um array. */

const myArray = [5,6,8,7,4,5];
const product = myArray.reduce((total, current) => total * current,1 );
console.log(product)