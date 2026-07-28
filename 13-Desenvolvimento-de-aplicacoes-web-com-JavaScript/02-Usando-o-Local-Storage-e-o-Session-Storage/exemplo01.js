// Salvar um item
localStorage.setItem('nome', 'Roger');
 
// Salvar um objeto
const pessoa = { nome: 'Roger', idade: 38 };
localStorage.setItem('pessoa', JSON.stringify(pessoa));