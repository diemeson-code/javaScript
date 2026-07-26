// Manipulação de Array: Utilize os métodos .push(), .pop(), e .slice() para alterar um array 
// de sua escolha e explique o resultado.

let filmes =[' Tubarão ', ' Ninja ', ' Suits ', ' Chamas da vingança ', ' A senha swordfish '];
filmes.push(' Matrix') // O push() -> Serve para adicinar um item na lista
console.log(`Após push: ${filmes.join('|')}`);
//console.log(filmes)

let remove = filmes.pop(); // pop() -> remove o último elemento
console.log(`Removido: ${remove}`)
console.log(`Após: ${filmes.join('|')}`);
//console.log(`Após: ${filmes}`);

//slice(início, fim) → cria uma cópia de parte do array sem alterar o original
let copia = filmes.slice(1,3);
console.log(`slice(copia):${copia.join(' | ')}`)
console.log(`array original${filmes.join(' | ')}`);