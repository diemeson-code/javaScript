/** No mundo do desenvolvimento JavaScript, trabalhar com operações assíncronas é algo bastante comum. Você pode se deparar com isso ao fazer uma requisição HTTP, ler um arquivo, ou até mesmo em operações de I/O. Uma das formas mais poderosas e flexíveis de lidar com essa asincronicidade é através do uso de Promises. Hoje, nesta aula de reforço, vamos nos aprofundar um pouco mais nos métodos e padrões que as Promises nos oferecem, para garantir que você possa utilizá-las com confiança em seus projetos.

Recapitulação
Promises são objetos que representam o estado eventual de uma operação assíncrona. Um objeto Promise pode encontrar-se em um de três estados: pendente (pending), resolvido (fulfilled) ou rejeitado (rejected). O principal objetivo é proporcionar uma maneira mais limpa e eficiente de lidar com operações assíncronas, evitando o temido “callback hell”.

Exemplo Prático de Uso de Promise.resolve e Promise.reject
Promise.resolve
O método Promise.resolve é uma maneira rápida de criar uma Promise que já inicia no estado de resolvida. Isso é útil quando você quer simular uma operação assíncrona que é resolvida instantaneamente. Veja o exemplo:*/

const myResolvedPromise = Promise.resolve("Data received");
 
myResolvedPromise.then((data) => {
  console.log(data);  // Output: "Data received"
});

/**Promise.reject
Da mesma forma, o método Promise.reject cria uma Promise que inicia diretamente no estado de rejeitada. Isso é útil para simular uma operação que falha imediatamente. */

const myRejectedPromise = Promise.reject("Data could not be received");
 
myRejectedPromise.catch((error) => {
  console.log(error);  // Output: "Data could not be received"
});

/**Esses métodos são úteis para simplificar o código e para criar Promises em cenários de teste, permitindo que você concentre seus esforços na lógica de como suas Promises são tratadas, em vez de se preocupar com sua criação.

Exemplo Prático de Promise.all e Promise.race
Promise.all
O método Promise.all aceita um array de Promises e retorna uma nova Promise que se resolve quando todas as Promises do array estão resolvidas ou se rejeita assim que uma delas é rejeitada. */

const promise1 = Promise.resolve("Promise 1 resolved");
const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'Promise 2 resolved'));
 
Promise.all([promise1, promise2]).then((values) => {
  console.log(values); // Output: ["Promise 1 resolved", "Promise 2 resolved"]
});

/**Promise.race
O método Promise.race também aceita um array de Promises, mas ele se resolve ou rejeita assim que a primeira Promise no array faz o mesmo. */

const promise1 = Promise.resolve("Promise 1 resolved quickly");
const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'Promise 2 resolved slowly'));
 
Promise.race([promise1, promise2]).then((value) => {
  console.log(value); // Output: "Promise 1 resolved quickly"
});

/**Encadeamento de Promises
Em JavaScript, é possível encadear Promises para criar fluxos de controle mais complexos. Isso é especialmente útil quando uma operação assíncrona depende do resultado de outra. */

const cleanRoom = () => {
  return new Promise((resolve) => {
    resolve("Cleaned the room");
  });
};
 
const removeGarbage = (message) => {
  return new Promise((resolve) => {
    resolve(`${message}, removed the garbage`);
  });
};
 
cleanRoom()
  .then((result) => removeGarbage(result))
  .then((finalResult) => console.log(`Finished: ${finalResult}`));

  /**Error Handling em Promises
.catch()
O método .catch() é utilizado para capturar qualquer rejeição que ocorra na Promise ou em qualquer Promise encadeada. */

const myPromise = Promise.reject("Promise rejected");
 
myPromise.catch((error) => console.log(error)); // Output: "Promise rejected"

/**.finally()
O método .finally() permite que você execute código após a Promise ser resolvida ou rejeitada, ideal para lógicas de limpeza ou finalização. */


const myFinalPromise = new Promise((resolve, reject) => {
  // some code here
});
 
myFinalPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log("Operation completed"));

 /**Dessa forma, você tem um controle completo sobre o fluxo de operações assíncronas em seus projetos, permitindo uma maior flexibilidade e robustez no seu código.

Nesta aula de reforço, revisamos os principais conceitos e métodos associados às Promises em JavaScript. Desde os métodos básicos como Promise.resolve e Promise.reject, até o encadeamento de Promises e tratamento de erros com .catch() e .finally(). O objetivo é proporcionar uma compreensão mais sólida sobre como gerenciar operações assíncronas eficientemente em seus projetos. Agora deixei uns exercícios para você aqui embaixo, então vai la, faz os exercícios e vejo você na próxima aula. 


Exercícios Práticos
Crie uma Promise que resolve depois de 2 segundos e retorne o texto “Hello World”.
Utilize a função setTimeout para fazer a Promise resolver após 2 segundos.
A Promise deve resolver com o texto “Hello World”.
Utilize Promise.all para resolver múltiplas Promises e retornar seus resultados.
Crie três Promises diferentes que resolvam em tempos diferentes (ex: 1s, 2s e 3s).
Utilize Promise.all para esperar que todas elas sejam resolvidas.
Imprima os resultados.
Utilize Promise.race para resolver a Promise mais rápida em um conjunto.
Novamente, crie três Promises com diferentes tempos de resolução.
Utilize Promise.race para identificar e retornar o resultado da Promise que resolve primeiro.
Implemente um encadeamento de Promises para simular um fluxo de controle.
Crie uma Promise que resolve para um número.
Encadeie uma segunda Promise que pega esse número, adiciona 2, e retorna o novo número.
Encadeie uma terceira Promise que pega o resultado da segunda, multiplica por 3, e retorna o novo número.
Adicione tratamento de erro em um fluxo de Promises.
Utilize o mesmo fluxo de controle do exercício 4.
Introduza um erro proposital em uma das Promises.
Utilize .catch() para capturar o erro e imprimir uma mensagem de erro.
Adicione também um bloco .finally() para executar um código que deve rodar independentemente do resultado (como limpar recursos, por exemplo).*/
