/**Aplique o método .reduce() para somar todos os elementos de um array [1, 2, 3, 4] */

const numbers = [1, 2, 3, 4];
const somar = numbers.reduce((acumulador,numeroAtual) => {
   return acumulador + numeroAtual},0);
console.log(somar)

/**O que significa reduce?

A palavra reduce em inglês significa reduzir.

No JavaScript, o reduce() pega vários valores de um array e os transforma em um único valor.

Por exemplo:

[1, 2, 3, 4]

vira:

10

Porque ele somou todos os números.

Também poderia virar:

uma multiplicação;
uma média;
um objeto;
uma string.

O importante é que o resultado final é um único valor.

O código
const numbers = [1, 2, 3, 4];

const soma = numbers.reduce((acumulador, numeroAtual) => {
    return acumulador + numeroAtual;
}, 0);

console.log(soma);

Agora vamos linha por linha.

Primeira linha
const numbers = [1, 2, 3, 4];

Você criou um array.

Na memória ele fica assim:

Índice      0   1   2   3

Valor      [1] [2] [3] [4]
Segunda linha
numbers.reduce(...)

Aqui você está dizendo ao JavaScript:

"Passe por todos os números desse array."

Ou seja:

1
↓

2
↓

3
↓

4

O reduce() vai visitar um por um.

O que é esta parte?
(acumulador, numeroAtual)

São dois parâmetros da função.

(acumulador, numeroAtual)

Vamos entender cada um.

O acumulador

Imagine um cofrinho.

No começo ele está vazio.

🪙

Valor: 0

O acumulador serve para guardar o resultado da soma.

Sempre que um número novo aparece, ele é colocado dentro do acumulador.

O número atual

O número atual é simplesmente o elemento que o reduce() está lendo naquele momento.

Primeiro ele lê:

1

Depois:

2

Depois:

3

Depois:

4
O que significa este zero?
}, 0);

Esse zero é muito importante.

Ele diz:

Comece o acumulador com 0.

Ou seja:

acumulador = 0
Primeira volta

O JavaScript olha para o primeiro número.

1

Então temos:

acumulador = 0
numeroAtual = 1

Agora ele executa:

return acumulador + numeroAtual;

Ou seja:

0 + 1

Resultado:

1

Agora o acumulador passa a valer:

acumulador = 1
Segunda volta

Agora ele vai para o próximo número.

2

Temos:

acumulador = 1
numeroAtual = 2

Ele faz:

1 + 2

Resultado:

3

Agora:

acumulador = 3
Terceira volta

Agora:

3

Temos:

acumulador = 3
numeroAtual = 3

Ele faz:

3 + 3

Aqui costuma surgir a dúvida:

"Ele está somando o 3 com ele mesmo?"

Não.

O primeiro 3 é o acumulador.

Esse 3 veio da soma:

1 + 2 = 3

O segundo 3 é o terceiro número do array.

Então, na verdade, ele está fazendo:

(1 + 2) + 3

Resultado:

6

Agora:

acumulador = 6
Quarta volta

Agora o último número.

4

Temos:

acumulador = 6
numeroAtual = 4

Ele faz:

6 + 4

Resultado:

10

Agora:

acumulador = 10

Como não existem mais números, o reduce() termina.

A tabela completa
Volta	Acumulador antes	Número atual	Soma	Acumulador depois
1	0	1	0 + 1	1
2	1	2	1 + 2	3
3	3	3	3 + 3	6
4	6	4	6 + 4	10

Resultado final:

10
Pense em uma mochila 🎒

Imagine que você está andando com uma mochila.

Ela começa vazia.

🎒 = 0

Você encontra o número 1.

🎒 + 1

Agora a mochila tem:

1

Depois encontra o 2.

🎒 + 2

Agora ela tem:

3

Depois encontra o 3.

🎒 + 3

Agora ela tem:

6

Depois encontra o 4.

🎒 + 4

Agora ela tem:

10

No final da caminhada, a mochila guarda 10.

O que o return faz?

O return devolve o novo valor do acumulador.

Quando você escreve:

return acumulador + numeroAtual;

o JavaScript entende:

"Guarde essa soma para usar na próxima volta."

Por isso o acumulador vai mudando:

0

↓

1

↓

3

↓

6

↓

10
Uma dica para quem está aprendendo

Não tente decorar o reduce(). Sempre pense em duas perguntas:

O que o acumulador está guardando? (No seu exemplo, a soma.)
O que o número atual representa? (O elemento que está sendo lido naquele momento.)

Quando você responde essas duas perguntas, o reduce() fica muito mais fácil de entender.

Pelas perguntas que você tem feito, percebo que você aprende melhor vendo a execução acontecer passo a passo. Então, nas próximas explicações de JavaScript, posso mostrar a execução em forma de tabela e ir atualizando as variáveis a cada linha do código. Isso costuma ajudar bastante a visualizar o que o programa está fazendo. */