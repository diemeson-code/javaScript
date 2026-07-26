/*
O escopo de uma variável é a parte do código onde a variável é efetivamente acessível. Temos dois tipos 
principais de escopo: global e local.

Escopo global: Uma variável declarada fora de qualquer função ou bloco de código tem um escopo global. 
Isso significa que ela é acessível de qualquer lugar do seu código.
*/
var globalVar = "Eu sou global!";

function testFunction() {
  console.log(globalVar);
}

testFunction();

/*
Escopo local (ou de função): Uma variável declarada dentro de uma função tem um escopo local.
*/
/*
function testFunctionLocal() {
  var localVar = "Eu sou local!";
  console.log(localVar);
}

testFunctionLocal();*/