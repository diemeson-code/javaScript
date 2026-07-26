/**Você se lembra quando discutimos como os módulos são essenciais para organizar e estruturar nosso código? Pois é, hoje é o dia de colocar esses conhecimentos em prática. Bora?

Criando um Módulo Simples
Estrutura de um Módulo
A estrutura de um módulo é bem simples, especialmente em JavaScript moderno (ECMAScript 6 e acima). Você tem um arquivo .js separado em que você coloca todas as funções, variáveis e lógica que pertencem a um mesmo “conceito” ou “tópico”.

Exemplo Prático de Criação de Módulo
Vamos criar um módulo simples que lida com operações aritméticas básicas, como adição e subtração. Você pode criar um novo arquivo chamado arithmeticModule.js e adicionar o seguinte código:// arithmeticModule.js const add = (a, b) => a + b; const subtract = (a, b) => a – b; // Código adicional aqui…

Neste arquivo, definimos duas funções: add para adição e subtract para subtração. Estas funções são agora parte do nosso módulo de aritmética.

Exportando Funções e Variáveis
Até agora, ninguém fora deste arquivo pode usar essas funções. Precisamos exportá-las para torná-las acessíveis em outros arquivos. Utilizamos a palavra-chave export para isso:// arithmeticModule.js export const add = (a, b) => a + b; export const subtract = (a, b) => a – b;

Pronto! Agora, as funções add e subtract estão prontas para serem importadas e utilizadas em outros módulos.

Importando um Módulo
Sintaxe de Importação
Agora que você já exportou algumas funções e variáveis do seu módulo, você precisa saber como acessá-las em outros arquivos, certo? Em JavaScript moderno, a palavra-chave import vem ao resgate.

Importando Funções e Variáveis Específicas
Para importar algo específico de um módulo, você usa a seguinte sintaxe:import { nomeDaFunção } from ‘caminho/do/modulo’;

Por exemplo, se você deseja importar a função add do módulo arithmeticModule.js, você faz o seguinte:import { add } from ‘./arithmeticModule’;

Exemplo Prático de Importação de Módulo
Suponhamos que temos outro arquivo JavaScript chamado main.js. Para usar a função add do nosso módulo arithmeticModule, podemos fazer o seguinte:// main.js import { add, subtract } from ‘./arithmeticModule’; console.log(add(5, 3)); // Output: 8 console.log(subtract(5, 3)); // Output: 2

Agora que você já sabe como criar e importar módulos em um exemplo simples, imagine um projeto grande onde você tem dezenas ou centenas de funções e componentes. O uso de módulos torna-se ainda mais crucial para manter tudo organizado e facilmente gerenciável.

Importação de Módulos Built-in e Módulos de Terceiros
Módulos Built-in
JavaScript tem uma série de módulos built-in que você pode usar sem ter que instalar qualquer pacote externo. Por exemplo, o módulo fs (File System) no Node.js é um módulo built-in para trabalhar com o sistema de arquivos.

Exemplo Prático:// Importando o módulo fs em Node.js const fs = require(‘fs’); ex3.js // Lendo um arquivo de texto fs.readFile(‘example.txt’, ‘utf8’, (err, data) => { if (err) { console.error(‘Erro ao ler o arquivo:’, err); return; } console.log(‘Conteúdo do arquivo:’, data); });

Módulos de Terceiros
Esses são os módulos que não vêm embutidos na linguagem JavaScript, mas são instalados separadamente, geralmente via gestores de pacotes como npm (Node Package Manager).

Exemplo Prático:

Para demonstrar isso, vamos usar o pacote axios, um cliente HTTP muito usado em JavaScript.

Primeiro, instale o pacote:npm install axios

Depois, você pode importar e usar no seu código:// Importando o módulo axios import axios from ‘axios’; // Fazendo uma requisição GET axios.get(‘https://api.example.com/data’) .then(response => { console.log(‘Dados recebidos:’, response.data); }) .catch(error => { console.log(‘Erro na requisição:’, error); });

Ambos os tipos de módulos são extremamente úteis e você provavelmente vai encontrar situações onde você vai querer usar um, outro ou ambos em seus projetos. É essencial saber como importá-los e utilizá-los eficazmente.

Conclusão
Nesta aula, você aprendeu os fundamentos de como criar e importar módulos em JavaScript moderno. Vimos como você pode exportar funções e variáveis de um módulo e importá-las em outro arquivo. Isso não apenas torna o seu código mais limpo e fácil de manter, mas também reforça os princípios de modularidade e reusabilidade. Agora deixei uns exercicios para você aqui embaixo e vejo você no próximo modulo, pois o modulo sobre módulos terminou!

Exercícios Práticos
Crie um Módulo de Matemática Simples:
Crie um arquivo chamado simpleMath.js.
Dentro deste arquivo, escreva funções para adição, subtração, multiplicação e divisão.
Exporte todas essas funções.
Importe o Módulo de Matemática Simples em um novo arquivo:
Crie um novo arquivo JavaScript chamado useSimpleMath.js.
Importe as funções do módulo simpleMath.js.
Teste todas as funções e log o resultado no console.
Crie um Módulo de String:
Crie um novo módulo que exporta funções como toUpperCase, toLowerCase e capitalize.
Teste importando essas funções em um novo arquivo.
Desafio Avançado – Módulo de Utilitários:
Crie um módulo que tenha uma mistura de funções e variáveis. Por exemplo, uma função para gerar um número aleatório entre um intervalo, outra para formatar uma data etc.
Importe esse módulo em um novo arquivo e teste todas as suas funcionalidades.
Olá pessoal! Hoje vamos falar sobre o Módulo 11 do nosso curso de Javascript Completo que trata de Criando e importando módulos.

Vamos começar entendendo o que são módulos!

Módulos são códigos Javascript que podem ser usados em diferentes partes do seu projeto, como uma espécie de pacote de funcionalidades que você pode exportar e importar para outro lugar.

Dessa forma, ao invés de reescrever o mesmo código em várias partes do seu programa, você pode apenas importar o que precisa de um único módulo.

Vamos ver um exemplo disso no código?

*/

//Módulo
 
let meuNome = 'José';
 
function dizerOi(){
 console.log('Oi, meu nome é ' + meuNome + '!');
}
 
export { meuNome, dizerOi }
 
//Código
 
import { meuNome, dizerOi } from './modulo';
 
dizerOi();
 
//Saída
 
// Oi, meu nome é José!

/**Veja como foi fácil? Exportamos as variáveis e funções que queremos usar no nosso módulo, e então importamos e usamos essas variáveis e funções no nosso código principal.

Espero que tenham gostado do episódio de hoje! Até a próxima! */