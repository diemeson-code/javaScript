const myArray = [1,2,3,4,5,6];
const numberImpar = myArray.find(number => number % 2 !== 0 );
console.log(numberImpar)
/**Como entender isso rápido:
% 2 === 0 → par
% 2 !== 0 → ímpar */