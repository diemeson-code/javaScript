/**Análise de Código: Analise o seguinte código e explique o que ele faz e como a Closure está sendo utilizada: */

function counter() {
  var count = 0;
  return function() {
    count++;
    return count;
  };
}
 
var myCounter = counter();
console.log(myCounter(4)); // 1console.log(myCounter()); // 2