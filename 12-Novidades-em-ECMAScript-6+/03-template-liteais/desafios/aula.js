/**Nesta aula, iremos reforçar um conceito crucial em JavaScript que você já foi apresentado anteriormente: os Template Literals. Esse recurso é particularmente útil e você verá como ele pode tornar seu código mais limpo e eficiente. Vamos mergulhar em exemplos práticos mais avançados que ajudarão você a entender quando e como usar esse recurso de forma eficaz.

Revisão dos Conceitos Anteriores
Recapitulação rápida do que foi aprendido sobre Template Literals em aulas anteriores: Você já sabe que Template Literals são delimitados por crases e permitem a inserção de expressões, tornando a manipulação de strings mais eficiente.
A importância de reforçar esse conceito: Como você verá, usar Template Literals eficazmente pode reduzir erros e tornar o seu código mais legível.
Exemplos Práticos Avançados
Como Template Literals tornam a concatenação mais eficiente: Ao invés de usar o operador +, você pode inserir variáveis diretamente na string.
1
2
let nome = "Roger";
console.log(`Olá, ${nome}!`);
Uso avançado de expressões ${}: Não é apenas para variáveis; você pode inserir qualquer expressão válida dentro das chaves.
1
console.log(`O resultado é ${1 + 2}.`);
Praticidade x Concatenação Clássica
Revisão das vantagens: Menos propensas a erros de concatenação, mais legíveis.
Quando reverter ao método clássico: Em situações onde a compatibilidade com versões mais antigas do JavaScript é uma necessidade.
Recapitulamos os conceitos-chave de Template Literals e exploramos exemplos que você pode encontrar em cenários reais. Agora, é sua vez de colocar esses conceitos em prática. Boa sorte com os exercícios!

Exercício 1: Criação de String com Dados de Usuário
Objetivo: Utilizar Template Literals para criar uma string que apresente as informações de um usuário.

Código inicial:
1
let nome = "João";
let idade = 30;
let email = "joao@email.com";
Tarefa: Utilize Template Literals para criar uma string que diga: “O usuário João tem 30 anos e seu e-mail é joao@email.com.”


Exercício 2: Refatoração de Código
Objetivo: Refatorar um código que utiliza concatenação clássica para usar Template Literals.

Código a ser refatorado:
1
2
3
function cumprimento(nome, hora) {
  return "Olá " + nome + ", são " + hora + " horas.";
}
Tarefa: Refatore o código acima para utilizar Template Literals.
Exercício 3: Criar um Simples Template HTML
Objetivo: Utilize Template Literals para criar um simples template HTML.

Tarefa: Dado um objeto com título e conteúdo, crie um template HTML utilizando Template Literals.
Exemplo de objeto:

const post = {
  titulo: "Meu Primeiro Post",
  conteudo: "Este é o conteúdo do meu primeiro post."
};
 */