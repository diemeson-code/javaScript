/**Nesta aula, vamos focar na criação de expressões regulares, explorando a sintaxe básica e trabalhando com exemplos práticos. Utilizaremos o site regex101 como uma ferramenta de apoio para testar e validar as expressões regulares criadas. É uma plataforma intuitiva que fornece feedback em tempo real sobre a correspondência e funcionamento das suas regex, facilitando o aprendizado.

Vamos começar com a sintaxe básica das expressões regulares?

Expressões regulares são construídas usando uma combinação de caracteres especiais e literais. Cada caractere tem um significado específico, e quando combinados, eles formam um padrão que descreve uma ou mais strings. Vamos examinar a sintaxe básica das expressões regulares:

Caracteres Literais: São os caracteres comuns que correspondem a si mesmos, como letras e números.
Metacaracteres: São caracteres especiais que têm um significado especial, como ., ?, *, +, {}, [], (), ^, $, |, e . Por exemplo, o ponto . corresponde a qualquer caractere, exceto uma quebra de linha.
Classes de Caracteres: Usando colchetes, você pode definir um conjunto de caracteres para correspondência. Por exemplo, [abc] corresponderá a qualquer caractere ‘a’, ‘b’, ou ‘c’.
Quantificadores: Permitem especificar quantas vezes um elemento pode ocorrer. Por exemplo, a* corresponderá a zero ou mais ocorrências da letra ‘a’.
Grupos de Captura: Usando parênteses, você pode criar grupos de captura. Isso permite aplicar quantificadores a toda uma sequência, como (ab)*, que corresponderá a zero ou mais ocorrências de ‘ab’.
Ancoragem: Os caracteres ^ e $ correspondem ao início e ao fim de uma linha, respectivamente.
Escape: O caractere de barra invertida é usado para escapar um metacaractere, fazendo com que ele seja tratado como um caractere literal.
Flags: As flags são caracteres que modificam a pesquisa. Por exemplo, a flag i faz a pesquisa ser insensível a maiúsculas e minúsculas.
Aqui estão alguns exemplos de expressões regulares:

/abc/: Corresponde à string exata “abc”.
/[A-Za-z]/: Corresponde a qualquer letra maiúscula ou minúscula.
/^d{2,4}$/: Corresponde a uma string contendo de 2 a 4 dígitos e nada mais.
Sinta-se à vontade para testar essas e suas próprias expressões regulares no regex101, onde você pode ver como elas funcionam em tempo real.

Construindo Padrões Comuns (com Exemplos)
Vamos observar alguns padrões comuns em expressões regulares e fornecer exemplos de texto que podem ser testados usando esses padrões:

Email:
Regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/
Exemplos de Teste:
Válido: john.doe@example.com
Inválido: john.doe@.com
URL:
Regex: /^(https?://)?(www.)?([a-zA-Z0-9]+).([a-zA-Z]{2,})(.[a-zA-Z]{2,})?$/
Exemplos de Teste:
Válido: https://www.example.com, www.example.co.uk
Inválido: ://www.example.com
Número de Telefone:
Regex: /(d{2}) d{4,5}-d{4}/
Exemplos de Teste:
Válido: (41) 9874-1771, (41) 99874-1771
Inválido: (41) 98741771
Data (formato DD/MM/AAAA):
Regex: /^(0[1-9]|[12]d|3[01])/(0[1-9]|1[0-2])/(19|20)dd$/
Exemplos de Teste:
Válido: 31/12/2020
Inválido: 30/02/2020
Senha Forte:
Regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$/
Exemplos de Teste:
Válido: P@ssw0rd
Inválido: password123
Você pode copiar e colar esses exemplos de teste no site regex101 e experimentar com os padrões de expressão regular fornecidos. Isso fornecerá uma compreensão prática de como esses padrões funcionam e ajudará a adaptá-los conforme necessário.

Flags em Expressões Regulares
Flags são caracteres especiais que controlam o comportamento de uma expressão regular. Elas podem ser adicionadas no final da expressão regular e alteram como a expressão é aplicada ao texto. As flags são altamente úteis e permitem que as expressões regulares sejam ainda mais versáteis. Vamos observar algumas das flags mais comuns:

g – Global: Procura todas as correspondências, não apenas a primeira.
Exemplo: /abc/g encontrará todas as ocorrências de “abc” no texto, não apenas a primeira.
i – Case Insensitive: Ignora a diferença entre maiúsculas e minúsculas.
Exemplo: /abc/i irá corresponder a “abc”, “ABC”, “AbC”, etc.
m – Multiline: Trata as linhas de início (^) e fim ($) como o começo e o fim de cada linha, e não apenas o começo e o fim do texto inteiro.
Exemplo: /^abc/m irá corresponder a “abc” no início de qualquer linha do texto, não apenas no início do texto inteiro.
s – DotAll: Faz com que o caractere ponto (.) corresponda a qualquer caractere, incluindo quebras de linha.
Exemplo: /a.b/s irá corresponder a “anb”, onde n é uma quebra de linha.
u – Unicode: Trata o padrão como uma sequência Unicode, permitindo que ele corresponda a caracteres de código superior a uFFFF.
Exemplo: /^u{1F600}$/u irá corresponder ao emoticon 😀.
y – Sticky: Realiza a correspondência na posição exata da última correspondência, permitindo busca “pegajosa” em textos.
Exemplo: /abc/y irá corresponder a “abc” apenas se for a próxima correspondência exata no texto.
Exemplos Práticos
Vamos observar alguns exemplos práticos de como usar expressões regulares no JavaScript, aproveitando o que aprendemos sobre sintaxe, padrões e flags.

Validar um Endereço de E-mail: */

let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
let email = "example@example.com";
let isValidEmail = emailPattern.test(email);
console.log(isValidEmail); // true

/**Encontrar Todas as Palavras com Letras Maiúsculas: */
javascript
let pattern = /b[A-Z]+b/g;
let text = "Hello WORLD, this is A TEST.";
let matches = text.match(pattern);
console.log(matches); // ["WORLD", "A", "TEST"]

/**Substituir Todas as Ocorrências de um Termo Específico (Ignorando Maiúsculas e Minúsculas):
 */
javascript
let pattern = /javascript/gi;
let text = "JavaScript is a language. JAVASCRIPT is popular.";
let newText = text.replace(pattern, "TypeScript");
console.log(newText); // "TypeScript is a language. TypeScript is popular."

/**Validar uma Data no Formato DD/MM/AAAA: */
/**javascript
let datePattern = /^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/(19|20)dd$/;
let date = "25/12/2023";
let isValidDate = datePattern.test(date);
console.log(isValidDate); // true */


/**Extrair Todos os Números de um Texto: */

javascript
let pattern = /d+/g;
let text = "The price is 123 and the discount is 45";
let numbers = text.match(pattern).map(Number);
console.log(numbers); // [123, 45]

/**Nesta aula nó Estudamos a sintaxe básica, diferentes padrões comuns e flags que modificam o comportamento das expressões regulares. Agora, é hora de você praticar o que aprendeu com alguns exercícios!

E assim que você terminar eu vejo você na próxima aula!

Exercícios Práticos
Validar um Número de Telefone: Escreva uma expressão regular que valide um número de telefone no formato (XX) XXXXX-XXXX, onde X é um dígito.
Encontrar URLs: Escreva uma expressão regular para encontrar todas as URLs em um texto.
Validar Nome de Usuário: Crie uma expressão regular que valide um nome de usuário. O nome de usuário deve começar com uma letra e pode conter letras, números, hifens e sublinhados. Deve ter entre 5 e 15 caracteres.
Substituir Tags HTML: Utilize expressões regulares para substituir todas as tags HTML em um texto por espaços em branco.
Verificar se uma Senha é Forte: Crie uma expressão regular que verifique se uma senha é forte. Uma senha forte deve ter pelo menos 8 caracteres, incluindo pelo menos um número, uma letra maiúscula e uma letra minúscula.
Extrair o Nome do Domínio de um E-mail: Utilize expressões regulares para extrair o nome do domínio de um endereço de e-mail.
Não se esqueça de testar suas soluções no regex101, e experimente com diferentes padrões e strings. Praticar com exemplos reais ajudará a solidificar sua compreensão das expressões regulares. */