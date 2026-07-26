/**Exercício 3: Criar um Simples Template HTML
Objetivo: Utilize Template Literals para criar um simples template HTML.

Tarefa: Dado um objeto com título e conteúdo, crie um template HTML utilizando Template Literals.
Exemplo de objeto: */

const post = {
  titulo: "Meu Primeiro Post",
  conteudo: "Este é o conteúdo do meu primeiro post."
};

const templateHTML = `
  <article>
    <h1>${post.titulo}</h1>
    <p>${post.conteudo}</p>
  </article>
`;
document.getElementById("post").innerHTML = templateHTML
