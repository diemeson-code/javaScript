/**valores padrão em parâmetros de função é um recurso que permite definir valores iniciais para os parâmetros que não recebem um argumento durante a chamada da função. Esta é uma forma prática de evitar erros e simplificar seu código.

Valores Padrão na Prática
Para começar, vamos revisitar um exemplo simples. Imagine uma função que saúda o usuário: */

function saudacao(nome = "visitante") {
  return `Olá, ${nome}!`;
}
 
console.log(saudacao());  // Saída: "Olá, visitante!"
console.log(saudacao("Maria"));  // Saída: "Olá, Maria!"

/**Neste exemplo, o parâmetro nome tem um valor padrão de “visitante”, que é usado sempre que a função é chamada sem um argumento específico.

Benefícios e Casos de Uso
O uso de valores padrão pode tornar seu código mais robusto e fácil de entender. Isso é especialmente útil para:

Evitar erros quando alguns argumentos são opcionais
Reduzir a quantidade de condicionais no corpo da função
Tornar a API da função mais clara e autoexplicativa
O recurso de valores padrão em parâmetros de função é mais util do que parece então é importante que absorvam esse conceito em JavaScript. Ele ajuda não só a escrever código mais limpo e eficiente, mas também faz com que suas funções sejam mais flexíveis e resistentes a erros. */