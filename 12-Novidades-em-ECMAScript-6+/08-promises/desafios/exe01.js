/**Crie uma Promise que resolve depois de 2 segundos e retorne o texto “Hello World”.
Utilize a função setTimeout para fazer a Promise resolver após 2 segundos.
A Promise deve resolver com o texto “Hello World”. */

/**Crie uma Promise que resolve depois de 2 segundos e retorne o texto "Hello World". */

const promessa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello World");
  }, 2000);
});

promessa.then((resultado) => {
  console.log(resultado);
});