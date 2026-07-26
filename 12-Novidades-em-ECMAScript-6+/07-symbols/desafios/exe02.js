/**Symbols e Iteração: Crie um objeto com propriedades normais e symbol. Use um loop for...in e a função Object.keys() para exibir as propriedades do objeto. Note quais são visíveis e quais não são. */

const id = Symbol('id');
const user = {
   [id]:'u1',
   nome:'Santos',
   idade:30
}

// Exibe as propriedades com for...in
console.log("for...in:");
for (let key in user) {
   console.log(key,user[key]);
}

// Exibe as propriedades com Object.keys()

console.log("\nobject.keys():")
console.log(Object.keys(user));