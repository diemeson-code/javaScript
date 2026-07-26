// Arrays Multidimensionais: Crie um array bidimensional contendo informações sobre três produtos
// (nome, preço, e disponibilidade). Acesse um valor específico e explique como você o fez.

let produto = [
    ['Notebook',3500 ,true],
    ['Teclado',150,true],
    ['Mause',50,false]
];
console.log(produto)
console.log(produto[1][1])//Acessando um valor específico do Mouse:


let produtos = [
  {nome: 'Notebook', preco: 3500, disponivel: true},
  {nome: 'Mouse', preco: 80, disponivel: true},
  {nome: 'Teclado', preco: 150, disponivel: false}
];
console.log(produtos[2])