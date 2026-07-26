/** -> 1 Crie um gerador que receba um array de URLs e faça chamadas fetch para cada uma. */

function* buscarUrls(urls) {

    for (const url of urls) {
        yield fetch(url);
    }

}

const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3"
];

const gerador = buscarUrls(urls);

gerador.next().value.then(resposta => resposta.json()).then(dados => console.log(dados));

gerador.next().value.then(resposta => resposta.json()).then(dados => console.log(dados));

gerador.next().value.then(resposta => resposta.json()).then(dados => console.log(dados));