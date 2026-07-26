/*Bem-vindo de volta! Hoje, nós vamos nos aprofundar nas ferramentas essenciais para desenvolvedores: o console do navegador, o depurador de código e o linting. Elas são cruciais para ajudá-lo a criar código eficiente e a encontrar problemas rapidamente.

Console do Navegador: Vamos começar com o console do navegador. É aqui que seu código JavaScript pode imprimir saídas e onde você pode executar instruções JavaScript em tempo real. Para acessar o console, você pode clicar com o botão direito na página, selecionar “Inspecionar” e ir para a aba “Console”. Digamos, por exemplo, que você queira ver o resultado da expressão 2+2. Basta digitar no console e pressionar Enter. O resultado aparecerá logo abaixo.

O console é especialmente útil para depurar. Você pode usar o comando console.log() em seu código para imprimir qualquer coisa – desde uma string simples até o valor atual de uma variável.

Depurador de Código: Em seguida, temos o depurador de código. Esta é uma ferramenta vital que permite que você inspecione seu código enquanto ele é executado. No VSCode, por exemplo, você pode clicar na barra lateral esquerda e selecionar o ícone que parece um inseto para acessar o depurador. A partir daí, você pode adicionar pontos de interrupção ao seu código, que irão pausar a execução do programa.

Digamos que você tenha uma função que não está retornando o que você espera. Você pode colocar um ponto de interrupção na linha antes do retorno, e quando o código for executado, ele irá parar nesse ponto, permitindo que você inspecione os valores das variáveis naquele momento.

Linting e a Instalação do NPM:

Finalmente, temos o linting. Linting é o processo de analisar automaticamente o seu código em busca de erros de programação, bugs, estilos não padronizados e construções suspeitas. No JavaScript, uma das ferramentas de linting mais populares é o ESLint.

Para instalar o ESLint, primeiro precisamos de uma ferramenta chamada NPM, que significa Node Package Manager. NPM é uma ferramenta que permite instalar e gerenciar pacotes de software, que são como extensões ou plugins para seu código. Esses pacotes podem variar de bibliotecas úteis a ferramentas como o ESLint que ajudam a melhorar a qualidade do seu código.

Aqui está um passo a passo para instalar o NPM e o ESLint:

Primeiro, você precisará instalar o Node.js, que vem com o npm. Você pode baixar o Node.js do site oficial. Escolha a versão “LTS”, que significa “Long Term Support”, porque é mais estável.
Após a instalação, você pode verificar se o Node.js e o NPM foram instalados corretamente abrindo seu terminal e digitando os comandos node -v e npm -v. Você deverá ver a versão de cada um exibida.
Agora que você tem o npm instalado, você pode instalar o ESLint. No terminal, navegue até a pasta do seu projeto e digite npm install eslint --save-dev. Isso instalará o ESLint apenas para o projeto atual e o salvará na lista de dependências de desenvolvimento.
Uma vez instalado, o ESLint irá analisar seu código e destacar possíveis problemas. Por exemplo, se você tiver uma variável declarada mas nunca usada, o ESLint irá marcar isso como um problema.
Conclusão: O uso eficaz dessas ferramentas é um dos pilares da programação em JavaScript. No início, pode parecer muito para absorver, mas à medida que você continua a usar essas ferramentas, você ficará cada vez mais confortável. Agora, você está mais preparado para aprofundar no código JavaScript, que é exatamente o que faremos na próxima aula, mas antes tem 2 exercicios aqui na descrição para você praticar o que vimos nessa aula!

Exercícios:

Abra o console do navegador em uma nova aba, tente executar algumas expressões simples como ‘Hello, World!’, 2+2, ou um pequeno bloco de código.
Tente usar o depurador em um arquivo JavaScript, defina um ponto de interrupção e inspecione os valores das variáveis. */