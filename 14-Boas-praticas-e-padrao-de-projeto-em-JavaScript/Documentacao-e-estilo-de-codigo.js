
/**No desenvolvimento de software, o código é apenas uma parte do projeto. Tão importante quanto escrever código é torná-lo legível e compreensível para outros desenvolvedores (e para você mesmo, no futuro). Um código bem documentado e com um estilo consistente é mais fácil de entender, de manter e de escalar.

A Importância da Documentação
Por que documentar seu código?
Documentar o código não é apenas uma cortesia para outros desenvolvedores; é uma prática essencial que pode salvar muito tempo durante a fase de manutenção de um projeto. Documentação eficaz serve como um guia, oferecendo insights sobre o que o código faz, como ele faz e por que foi escrito dessa forma.

Comentários em linha vs Comentários de bloco
Comentários em linha são usados para explicações curtas e pontuais, geralmente dentro de uma função ou loop. Eles são precedidos por  //. */

	
let i = 0; // Inicializa a variável i

// Comentários de bloco são mais apropriados para descrições mais longas e detalhadas. Eles são envoltos em /* */

/*
Esta função calcula o quadrado de um número.
Ela recebe um número como argumento e retorna o quadrado desse número.
*/
function square(num) {
  return num * num;
}

/**JSDoc: Documentação em JavaScript
O que é JSDoc e como utilizá-lo
JSDoc é uma linguagem de marcação para comentários de documentação em JavaScript. Ele é usado para criar uma documentação legível para métodos, classes, parâmetros e mais, diretamente no código. Ferramentas podem então gerar uma documentação HTML externa ou outros formatos de documentação com base nos comentários JSDoc.

Exemplo prático de como adicionar JSDoc em uma função ou módulo
Para documentar uma função com JSDoc, você adiciona um comentário de bloco acima da declaração da função com a notação JSDoc específica. Aqui está um exemplo: */

/**
 * Calcula e retorna o quadrado de um número.
 *
 * @param {number} num - O número a ser elevado ao quadrado.
 * @returns {number} O quadrado do número fornecido.
 */
function square(num) {
  return num * num;
}

/**Neste exemplo, @param descreve o parâmetro que a função aceita e @returns descreve o valor que a função retorna. Isso ajuda outros desenvolvedores a entenderem rapidamente o que a função faz, quais argumentos ela aceita e o que ela retorna.

Estilo de Código
O que é estilo de código e por que é importante
Estilo de código é um conjunto de regras e convenções que um desenvolvedor ou equipe de desenvolvedores segue para escrever código mais claro e consistente. A importância do estilo de código é muitas vezes subestimada. Um estilo de código coerente torna o código mais legível e compreensível, facilitando a colaboração entre membros da equipe e a manutenção a longo prazo do projeto.

Exemplos de estilos comuns: Camel Case, Snake Case, etc.
Camel Case (camelCase): Cada nova palavra começa com uma letra maiúscula, exceto a primeira. Utilizado frequentemente em JavaScript para nomear variáveis e funções.
Exemplo: myVariableName
Pascal Case (PascalCase): Similar ao Camel Case, mas a primeira letra também é maiúscula. Utilizado em JavaScript principalmente para nomear classes.
Exemplo: MyClassName
Snake Case (snake_case): Todas as palavras são em minúsculas e separadas por underscores. Este estilo é comumente usado em linguagens como Python e em arquivos de configuração.
Exemplo: my_variable_name
ESLint: Mantendo o Estilo de Código
Introdução ao ESLint
ESLint é uma ferramenta de análise de código estática para identificar padrões problemáticos ou divergências de estilo de código em JavaScript. Ele é altamente configurável e pode ser ajustado para aderir às regras de estilo de código de sua escolha.

Configurando e executando ESLint em um projeto
Para instalar ESLint, você pode usar npm:

npm install eslint --save-dev
Após a instalação, você pode criar um arquivo de configuração .eslintrc para definir suas regras. Aqui está um exemplo básico de um arquivo .eslintrc.json:

 */

/** 
{
  "extends": "eslint:recommended",
  "rules": {
    "indent": ["error", 2],
    "quotes": ["error", "double"],
    "semi": ["error", "always"]
  }
}*/

/**Para executar ESLint, você pode adicionar um script npm no seu package.json:

1
2
3
4
5
{
  "scripts": {
    "lint": "eslint ."
  }
}
E executar com:

1
npm run lint
Exemplo prático de aplicação do ESLint
Imagine que você tem o seguinte código JavaScript:

1
var x=5
Após rodar ESLint com a configuração anterior, ele apontará vários erros:

O uso de var em vez de let ou const
A falta de espaços em torno do operador =
A falta de um ponto e vírgula no final da linha
Ao corrigir essas questões, seu código ficará mais limpo e em conformidade com as regras de estilo definidas.

Nesta aula, abordamos vários aspectos fundamentais para melhorar a qualidade do seu código. Começamos discutindo a importância da documentação e como ela pode tornar seu código mais acessível e manutenível. Apresentamos o JSDoc como uma ferramenta útil para documentar seu código JavaScript de forma mais formal.

Em seguida, mergulhamos no tópico do estilo de código, discutindo por que um estilo de código consistente é vital para qualquer projeto. Exploramos algumas das convenções de nomenclatura mais comuns, como Camel Case e Snake Case. Finalmente, apresentamos o ESLint como uma ferramenta indispensável para ajudar você e sua equipe a manter um estilo de código coerente.

Esperamos que você aplique estas práticas em seus futuros projetos. A adoção dessas técnicas não só fará de você um melhor desenvolvedor, mas também facilitará a colaboração com outros desenvolvedores e contribuirá para a longevidade e sucesso do seu projeto.

Então, mãos à obra! Aplique o que você aprendeu hoje e note a diferença que pequenos ajustes na documentação e estilo de código podem fazer. */