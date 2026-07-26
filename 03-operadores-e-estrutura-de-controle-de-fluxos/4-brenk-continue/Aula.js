
/** Olá! hoje vamos ver os comandos “Break” e “Continue”. Estes são dois conceitos poderosos que nos ajudam a controlar o fluxo de nossos laços de repetição

Ja vimos um pouco sobre o uso do break dentro do switch, mas ele é util não só la. Alguma vez você já quis parar um laço no meio do caminho, se certas condições forem atendidas? Ou talvez você queira pular uma iteração particular e continuar com a próxima? Essas são situações onde “Break” e “Continue” entram em cena!

Nesta aula, vamos explorar o que são esses comandos, quando e como usá-los, e quais são as melhores práticas para incorporá-los em seus códigos. Vamos também ver exemplos práticos e exercícios desafiadores para você praticar esses conceitos.

Preparados? Então vamos lá! 🚀

2. O Comando Break:
O comando “Break” é uma ferramenta valiosa quando se trabalha com laços de repetição. Ele nos permite sair de um laço imediatamente, sem esperar que o laço complete todas as suas iterações.

2.1 Sintaxe Básica:
Aqui está a sintaxe básica de como utilizar o “Break”:
*/
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Interrompe o laço quando i é igual a 5
  }
  console.log(i); // Imprime os números de 0 a 4
}

/*
2.2 Quando Usar:
O “Break” é comumente usado quando você precisa sair do laço assim que uma condição específica for atendida. Pode ser uma maneira eficiente de economizar recursos computacionais.

2.3 Erros Comuns e Como Evitá-los:
Usar “Break” fora de um laço causará um erro.
Usar “Break” de maneira excessiva pode tornar o código confuso.
2.4 Boas Práticas:
Use “Break” com moderação e somente quando necessário.
Comente o código para explicar por que o “Break” está sendo usado.
3. O Comando Continue:
O comando “Continue” é usado dentro de um laço para pular a iteração atual e continuar com a próxima. Ele pode ser útil para pular partes de código sob certas condições sem sair do laço.

3.1 Sintaxe Básica:
Aqui está a sintaxe básica de como utilizar o “Continue”:

1
*/
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; // Pula a iteração quando i é igual a 5
  }
  console.log(i); // Imprime os números de 0 a 4 e 6 a 9
}
/*
3.2 Quando Usar:
Utilize o “Continue” quando quiser pular uma iteração específica do laço, mas ainda desejar continuar as demais iterações.

3.3 Comparação com Break:
Enquanto “Break” sai do laço completamente quando uma condição é atendida, “Continue” apenas pula a iteração atual e continua com as próximas.

3.4 Erros Comuns e Como Evitá-los:
Usar “Continue” fora de um laço causará um erro.
Usá-lo de maneira excessiva pode tornar o código confuso.
3.5 Boas Práticas:
Use “Continue” com moderação.
Comente o código para explicar por que o “Continue” está sendo usado.
Nesta aula, abordamos os comandos break e continue em JavaScript, dois recursos poderosos que nos permitem controlar o fluxo dentro de estruturas de repetição.

O break é utilizado para sair de um laço quando uma condição específica é atendida, enquanto o continue permite pular a iteração atual e continuar com a próxima. Ambos têm usos práticos e podem tornar o código mais eficiente e legível quando usados corretamente.

Contudo, é crucial entender onde e como utilizar esses comandos, pois o uso indevido pode levar a erros e tornar o código confuso.

Os exercícios a seguir ajudarão você a aplicar e solidificar o conhecimento adquirido.

Exercícios:

Exercício com Break: Escreva um laço que percorra números de 1 a 100 e use o break para sair do laço quando encontrar o primeiro número que seja divisível por 7.
Exercício com Continue: Modifique um laço for para percorrer uma matriz de números e use o continue para pular números negativos, imprimindo apenas os números positivos.
Comparando Break e Continue: Crie dois laços: um que utilize o break e outro que utilize o continue. Ambos devem percorrer uma matriz de números e atuar quando encontrar um número específico. Compare como cada comando afeta o laço.
Desafio – Combinação dos Dois: Escreva um laço que percorra uma matriz de caracteres. Use o continue para pular vogais e o break para terminar o laço se encontrar um número.
Não se esqueça de testar seus códigos e refletir sobre os resultados. Praticar esses conceitos ajudará você a se tornar mais habilidoso no uso de estruturas de controle de fluxo em JavaScript.

*/