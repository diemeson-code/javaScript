// Tipos Múltiplos em Arrays: Declare um array contendo elementos de diferentes tipos e discuta um 
// cenário em que isso possa ser útil.




let produto = {nome: 'Notebook',preco: 3500,disponivel: true};
console.log(produto.nome);
console.log(produto.preco);
console.log(produto.disponivel);



console.log(produto['nome']);
console.log(produto['preco']);
console.log(produto['disponivel']);


// Se fosse array, aí sim:
let produtos = ['Notebook', 3500, true];

console.log(produtos[0]); // funciona