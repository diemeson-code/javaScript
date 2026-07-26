/*Laços de repetição: for, while
Lição Progress
100% Concluído

Na programação, muitas vezes nos deparamos com situações em que precisamos repetir uma mesma ação várias vezes. Pode ser algo tão simples quanto imprimir uma mensagem várias vezes, ou algo mais complexo, como processar uma coleção de dados. Fazer isso manualmente, escrevendo o mesmo código várias vezes, seria ineficiente e propenso a erros.

É aqui que entram os laços de repetição. Eles nos permitem repetir um bloco de código quantas vezes quisermos, com apenas algumas linhas de código. Os laços de repetição são fundamentais na programação moderna e são usados em praticamente todos os programas.

Em JavaScript, existem alguns tipos diferentes de laços, cada um com suas próprias características e usos. Nesta aula, vamos explorar os laços for e while, entender sua sintaxe, como usá-los, e aprender algumas melhores práticas e armadilhas comuns.

Prepare-se para entrar nos laços de repetição, uma habilidade essencial para qualquer desenvolvedor JavaScript. Os conceitos que você aprenderá aqui serão aplicáveis em muitas situações diferentes, e entender essas estruturas básicas abrirá portas para técnicas de programação mais avançadas.

For Loop
O laço for é um dos tipos de laços mais utilizados e conhecidos na programação JavaScript. É altamente flexível e pode ser usado em uma variedade de situações.

Sintaxe
A estrutura básica de um laço for é composta por três partes: inicialização, condição e incremento.


for (inicialização; condição; incremento) { 
   // Código a ser executado 
}
Inicialização: Esta parte é executada uma vez no começo do loop. Geralmente, é usado para declarar e inicializar uma variável que controlará o número de vezes que o loop será executado.
Condição: Esta expressão é avaliada antes de cada iteração do loop. Se a condição for verdadeira, o bloco de código dentro do loop é executado. Se for falsa, o loop termina.
Incremento: Esta parte é executada após cada iteração do loop, e é geralmente usada para atualizar a variável de controle.
Exemplo
Vamos olhar para um exemplo básico de como usar um laço for.


4
for (let i = 0; i < 5; i++) { 
   console.log(i); // Imprimirá os números de 0 a 4 
 
}
Melhores Práticas

Use nomes de variáveis significativos que expliquem o que o loop está fazendo.
Tenha cuidado com as condições infinitas. Certifique-se de que a condição do loop eventualmente se torne falsa, ou você criará um loop infinito que pode travar seu programa.
Erros Comuns
Esquecer de incrementar a variável de controle, levando a um loop infinito.
Usar uma variável que já foi declarada fora do loop, causando conflitos e comportamentos inesperados.
O laço for é uma ferramenta poderosa e versátil, e entender como ele funciona é fundamental para escrever código JavaScript eficiente e conciso. Ao seguir as melhores práticas e estar ciente dos erros comuns, você pode usá-lo com confiança em seus projetos.

For…of Loop
O laço for...of é uma adição mais recente ao JavaScript (introduzida no ECMAScript 2015), que simplifica o processo de iteração sobre elementos de objetos iteráveis como arrays, strings, mapas, conjuntos, etc. É especialmente útil quando você quer percorrer todos os elementos de um objeto iterável sem se preocupar com a sua estrutura.

Sintaxe
A sintaxe do laço for...of é bem mais simples em comparação com o laço for clássico.


for (const elemento of objetoIterável) { 
   // Código a ser executado 
}
Elemento: A variável que representa o valor atual na sequência de valores do objeto iterável.
Objeto Iterável: O objeto que você deseja iterar.
Exemplo
Vamos ver um exemplo simples usando um array.


const frutas = ['maçã', 'banana', 'uva']; 
 
for (const fruta of frutas) { 
   console.log(fruta); // Imprimirá 'maçã', 'banana', 'uva' 
}
Você também pode usar o for...of para iterar sobre uma string.


const nome = 'JavaScript'; 
 
for (const letra of nome) { 
   console.log(letra); // Imprimirá cada letra individualmente 
}
Melhores Práticas
Prefira usar for...of quando você precisa percorrer todos os elementos de um objeto iterável, e você não está interessado no índice do elemento.
Utilize const quando você não planeja reatribuir a variável dentro do loop, para aumentar a clareza e evitar erros acidentais.
Erros Comuns
Tentar usar for...of em objetos que não são iteráveis, como objetos literais comuns.
O laço for...of é uma forma conveniente e moderna de iterar sobre objetos iteráveis, tornando seu código mais limpo e legível.

While Loop
O laço while é uma estrutura de controle de fluxo que permite repetir um bloco de código enquanto uma condição específica for verdadeira. É especialmente útil quando você não sabe quantas vezes o código precisa ser repetido, já que o número de iterações é determinado pela condição.

Sintaxe
Aqui está a sintaxe básica do laço while:



while (condição) { 
   // Código a ser executado enquanto a condição for verdadeira 
}
Condição: A expressão avaliada antes de cada iteração. Se a condição for verdadeira, o código dentro do bloco será executado.
Exemplo
Vamos ver um exemplo simples em que queremos imprimir números de 1 a 5.


let contador = 1; 
while (contador <= 5) { 
   console.log(contador); // Imprimirá os números de 1 a 5 
   contador++; 
}
Melhores Práticas
Certifique-se de que a condição no laço while eventualmente se torne falsa, para evitar um loop infinito.
Evite escrever códigos complexos e difíceis de seguir dentro do loop; mantenha-o simples e claro.
Erros Comuns
Loop Infinito: Se a condição nunca se tornar falsa, o laço while continuará para sempre, o que pode travar o programa. Sempre tenha uma maneira de interromper o loop.
Dicas para Evitar Loops Infinitos
Sempre atualize as variáveis que estão sendo testadas na condição, para garantir que a condição possa se tornar falsa em algum momento.
Teste o código cuidadosamente, especialmente se a condição for complexa.
O laço while é uma ferramenta poderosa, mas requer atenção especial para evitar erros como loops infinitos. Ele é útil quando você precisa de uma iteração flexível e baseada em condição.

Do…While Loop
O laço do...while é semelhante ao laço while, mas com uma diferença crucial: o bloco de código dentro do laço é executado pelo menos uma vez, mesmo que a condição seja falsa desde o início. A condição é avaliada apenas após a execução do bloco de código.

Sintaxe
Aqui está a sintaxe básica do laço do...while:


do { 
   // Código a ser executado pelo menos uma vez 
} while (condição);
Condição: A expressão avaliada após cada iteração. Se a condição for verdadeira, o código dentro do bloco será executado novamente.
Exemplo
Vamos ver um exemplo simples que ilustra a diferença chave entre while e do...while.

let contador = 6; 
 
do { 
   console.log(contador); // Imprimirá 6 uma vez 
   contador++; 
} while (contador <= 5);
Mesmo que a condição seja falsa desde o início (contador é 6, então a condição é falsa), o bloco de código ainda é executado uma vez.

Melhores Práticas
Use o laço do...while quando o código dentro do loop precisa ser executado pelo menos uma vez.
Como no laço while, certifique-se de evitar loops infinitos, atualizando as variáveis na condição conforme necessário.
Erros Comuns
Loop Infinito: A mesma precaução do laço while se aplica aqui.
O laço do...while é útil em cenários em que você precisa garantir que um bloco de código seja executado pelo menos uma vez, independentemente da condição.

Com isso, finalizamos a nossa discussão sobre os laços de repetição em JavaScript. Vimos como cada laço funciona, com exemplos de uso, melhores práticas e erros comuns. Esses conceitos são fundamentais para qualquer desenvolvedor JavaScript e servem como blocos de construção para muitos programas.

Lembre-se de praticar esses exercícios abaixo por conta própria para solidificar seu entendimento dos conceitos e espero você na próxima aula.

Exercícios
For Loop Básico: Escreva um programa que use um laço for para imprimir os números de 1 a 10.
Iterando um Array com For…of: Use o laço for...of para iterar sobre um array de strings e imprimir cada string.
While Loop com Controle de Fluxo: Escreva um laço while que imprima os números ímpares de 1 a 20, mas pare a iteração quando chegar a 15.
Do…While com Input do Usuário: Use o laço do...while para perguntar ao usuário um número entre 1 e 10 até que ele digite o número correto. (Dica: Você pode precisar de uma biblioteca como readline-sync para a entrada do usuário).
Aninhamento de Laços: Crie um laço aninhado para imprimir uma matriz 5×5 de asteriscos.
Desafio – Fibonacci com For Loop: Use um laço for para calcular os primeiros 10 números da sequência de Fibonacci.
 */