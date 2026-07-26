/**Expressões regulares, muitas vezes referidas como regex ou regexp, são uma ferramenta extremamente poderosa para trabalhar com texto. Utilizadas em quase todas as linguagens de programação, elas fornecem uma maneira concisa e flexível de identificar cadeias de caracteres, palavras ou padrões dentro do texto.

Por que e quando usar expressões regulares?
Busca e Substituição: Você pode usar expressões regulares para buscar padrões específicos em uma string e substituí-los por algo diferente, tudo de uma maneira programática e altamente personalizável.
Validação de Dados: Expressões regulares são amplamente usadas para validar o formato dos dados, como verificar se um e-mail ou número de telefone foi inserido corretamente.
Manipulação de Texto: Seja para extrair informações de logs ou processar grandes volumes de texto, expressões regulares fornecem a agilidade necessária para manipular e transformar o texto de acordo com suas necessidades.
Embora poderosas, expressões regulares podem ser complexas e muitas vezes intimidantes para iniciantes. A compreensão da sua sintaxe e funcionamento é essencial, e é exatamente isso que será explorado nesta aula.

O que são?
Expressões regulares são sequências de caracteres que formam um padrão de pesquisa. Esse padrão é utilizado para buscar ou substituir partes de uma string. Cada caractere dentro de uma expressão regular tem um significado específico, e juntos, eles descrevem o padrão que você está tentando corresponder.

Uma das melhores maneiras de aprender e trabalhar com expressões regulares é testá-las interativamente. Você pode escrever sua expressão regular, aplicá-la a alguma entrada de texto e ver as correspondências em tempo real.

Para esse fim, o site regex101.com é uma ferramenta excepcionalmente útil. Ele fornece um ambiente interativo onde você pode inserir a sua expressão regular, adicionar o texto alvo, e ver as correspondências e capturas detalhadamente.

Exemplos
/hello/i – Corresponde à palavra “hello”, independentemente da capitalização.
/^d{10}$/ – Corresponde a uma string que consiste exatamente em 10 dígitos.
/bwordb/ – Corresponde à palavra “word” como uma palavra inteira, não como parte de outra palavra.
Conclusão
Expressões regulares são uma ferramenta indispensável para programadores e desenvolvedores, permitindo a busca, manipulação e validação eficiente de textos. Embora sua sintaxe possa parecer complexa à primeira vista, com prática e compreensão, torna-se uma ferramenta poderosa e versátil.

Na próxima aula, vamos explorar como criar expressões regulares, proporcionando uma compreensão mais profunda e prática de como utilizá-las em suas aplicações JavaScript. */