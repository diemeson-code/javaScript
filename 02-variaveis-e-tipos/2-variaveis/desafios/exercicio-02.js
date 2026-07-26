/* Exercício 2: Compreendendo Escopos
 1 -> Dentro de uma função chamada mostrarNome, declare uma variável let chamada sobrenome e tente acessar essa 
variável fora da função. O que acontece?*/
function mostrarNome(nome){
    let sobrenome = "Santos";
    console.log(nome,sobrenome);
}

mostrarNome("Diemson");

/* Dica importante (nível acima) Se você quiser usar esse valor fora, precisa retornar: */
/*
function mostrarNome2(nome){
    let sobrenome = "Santos";
    return sobrenome;
}
let resposta = mostrarNome2("Diemson");
console.log(resposta);*/



// 2 -> Declare uma variável var chamada cidade fora de qualquer função. Crie uma função chamada
//  mostrarCidade etente acessar e imprimir a variável cidade dentro dessa função.

var cidade = "Belém";
function mostrarCidade(){
    console.log(cidade);
}

mostrarCidade();

// 3 -> Dentro de um bloco if, declare uma variável let chamada bairro. Tente acessar essa variável 
// fora do bloco if.

if(true){
    let bairro = "Centro";
    console.log(bairro)
}
console.log(bairro)

// O que você observa?
//Objetivo: Entender a diferença entre escopos global, local (ou de função) e de bloco. */