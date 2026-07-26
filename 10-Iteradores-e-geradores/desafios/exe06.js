/** -> 2 Desenvolva um gerador que simule um jogo de perguntas e respostas. Use yield para aguardar a resposta do jogador.*/

function* jogo() {

    const resposta1 = yield "Qual é a capital do Brasil?";

    if (resposta1 === "Brasília") {
        console.log("Resposta correta!");
    } else {
        console.log("Resposta errada!");
    }

    const resposta2 = yield "Quanto é 5 + 5?";

    if (resposta2 === 10) {
        console.log("Resposta correta!");
    } else {
        console.log("Resposta errada!");
    }

    yield "Fim do jogo!";
}

const gerador = jogo();

console.log(gerador.next().value);

console.log(gerador.next("Brasília").value);

console.log(gerador.next(10).value);