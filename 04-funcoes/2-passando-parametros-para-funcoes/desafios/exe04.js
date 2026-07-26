/**Análise de Código: Analise o seguinte código e explique o que está acontecendo em relação à passagem por valor e referência. Se possível, identifique e corrija qualquer erro no código: */
function alterarValores(a, b) {
  a = 50;
  b.prop = 'novo';
}
 
let x = 10;
let y = { prop: 'original' };
alterarValores(x, y);
console.log(x, y.prop); // O que será impresso?