/**Utilize o método .map() para criar um novo array contendo o quadrado de cada 
 * número de um array inicial [1, 2, 3, 4]. */

const numbers = [1, 2, 3, 4];
const quadrado = numbers.map(x => x * x );
console.log(quadrado)