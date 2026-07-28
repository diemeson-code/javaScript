/**Bem-vindo à aula sobre Local Storage e Session Storage, duas das maneiras mais poderosas e eficientes de armazenar dados diretamente no navegador do usuário. Se você já se perguntou como manter dados entre diferentes sessões de navegação ou mesmo após o usuário fechar e reabrir o navegador, esta aula é para você.

Mas por que isso é importante? Em qualquer aplicação web interativa, há uma necessidade constante de armazenar informações de forma persistente. Pode ser algo tão simples quanto salvar as preferências do usuário ou tão complexo quanto manter um carrinho de compras em um site de comércio eletrônico. A capacidade de armazenar dados no cliente pode melhorar significativamente a experiência do usuário, permitindo que as aplicações sejam mais rápidas e responsivas.

Nesta aula, não só cobriremos os fundamentos de como usar essas tecnologias, mas também como aplicá-las em um contexto real, estendendo o projeto da calculadora que trabalhamos na aula anterior. Vamos descobrir como armazenar o histórico de cálculos e outras informações relevantes diretamente no navegador do usuário.

Portanto, prepare-se para explorar como você pode fazer suas páginas web mais dinâmicas e interativas com o uso de Local Storage e Session Storage.

Local Storage
Definição
O Local Storage é uma API de armazenamento da Web que permite armazenar informações de forma persistente no navegador do usuário. Ao contrário dos cookies, os dados armazenados no Local Storage não são enviados ao servidor a cada solicitação HTTP. Isso oferece uma solução de armazenamento mais eficiente, rápida e segura.

Vantagens:

Persistência: Os dados persistem mesmo depois de fechar a janela ou navegador.
Grande Capacidade de Armazenamento: Pode armazenar até 5-10 MB de dados, que é substancialmente mais do que o que os cookies podem armazenar.
Facilidade de Uso: Manipulação simples com métodos JavaScript como setItem, getItem, e removeItem.
Desvantagens:

Sem Expiração: Os dados não expiram automaticamente, o que pode ser uma desvantagem dependendo do caso de uso.
Segurança: Não é recomendado para armazenar informações sensíveis, como senhas ou tokens, pois as informações são armazenadas em texto simples.
Como Usar
Aqui estão alguns exemplos práticos de como usar o Local Storage com JavaScript:

Salvar Dados no Local Storage

1
2
3
4
5
6
// Salvar um item
localStorage.setItem('nome', 'Roger');
 
// Salvar um objeto
const pessoa = { nome: 'Roger', idade: 38 };
localStorage.setItem('pessoa', JSON.stringify(pessoa));
Recuperar Dados do Local Storage

1
2
3
4
5
6
7
8
// Recuperar um item
const nome = localStorage.getItem('nome');
console.log(nome); // Saída: Roger
 
// Recuperar um objeto
const pessoaJSON = localStorage.getItem('pessoa');
const pessoa = JSON.parse(pessoaJSON);
console.log(pessoa.nome); // Saída: Roger
Remover Dados do Local Storage

1
2
3
4
5
// Remover um item específico
localStorage.removeItem('nome');
 
// Limpar todo o armazenamento local
localStorage.clear();
Esses exemplos mostram as operações mais comuns que você executará com o Local Storage. No contexto do nosso projeto de calculadora, poderíamos usar o Local Storage para armazenar o histórico de cálculos do usuário.

Session Storage
Definição
O Session Storage é semelhante ao Local Storage em termos de API, mas com um ciclo de vida diferente. Enquanto os dados no Local Storage persistem mesmo quando o navegador é fechado e reaberto, os dados no Session Storage são apenas persistentes durante a duração de uma “sessão” de página. Isso significa que os dados são armazenados enquanto a janela ou aba do navegador está aberta e são apagados quando a janela ou aba é fechada.

Quando usar:

Dados Temporários: Útil para armazenar dados que são relevantes para uma única sessão ou fluxo de trabalho.
Segurança: Como os dados expiram quando a sessão termina, é ligeiramente mais seguro para armazenar informações que são sensíveis ao contexto.
State Management: Pode ser usado para gerenciar o estado do usuário ou aplicação temporariamente.
Como Usar
Vamos olhar para alguns exemplos práticos de como manipular Session Storage via JavaScript:

Salvar Dados no Session Storage

1
2
3
4
5
6
// Salvar um item
sessionStorage.setItem('username', 'Roger');
 
// Salvar um objeto
const user = { username: 'Roger', age: 38 };
sessionStorage.setItem('user', JSON.stringify(user));
Recuperar Dados do Session Storage

1
2
3
4
5
6
7
8
// Recuperar um item
const username = sessionStorage.getItem('username');
console.log(username); // Saída: Roger
 
// Recuperar um objeto
const userJSON = sessionStorage.getItem('user');
const user = JSON.parse(userJSON);
console.log(user.username); // Saída: Roger
Remover Dados do Session Storage

1
2
3
4
5
// Remover um item específico
sessionStorage.removeItem('username');
 
// Limpar todo o armazenamento da sessão
sessionStorage.clear();
Esses exemplos mostram como você pode manipular facilmente o Session Storage para diferentes propósitos. No contexto do nosso projeto de calculadora, por exemplo, você poderia usar o Session Storage para armazenar temporariamente cálculos que o usuário pode querer reutilizar apenas durante a sessão atual.

Diferenças entre Local Storage e Session Storage
Quadro Comparativo
Característica	Local Storage	Session Storage
Persistência	Permanente	Temporária
Escopo	Todo o domínio	Sessão da página
Limite de Armazenamento	5-10 MB	5-10 MB
Segurança	Menos seguro	Mais seguro
Aplicação Prática: Extendendo a Calculadora da Aula Anterior
Agora que conhecemos o Local Storage e o Session Storage, podemos estender nossa calculadora para incluir um histórico de cálculos. Vamos salvar esse histórico no Local Storage para que ele seja persistente entre as sessões do navegador.

Código Exemplo: Salvando histórico de cálculos no Local Storage

1
2
3
4
5
6
7
8
9
const history = [];
 
function saveToHistory(operation, result) {
  history.push({ operation, result });
  localStorage.setItem('calcHistory', JSON.stringify(history));
}
 
// Usar esta função depois de cada cálculo
saveToHistory('2 + 2', '4');
Exercícios
Adicione funcionalidade para salvar o histórico da calculadora no Local Storage.
Use localStorage.setItem para salvar o histórico após cada operação de cálculo.
Implemente uma opção para limpar o histórico da calculadora armazenado.
Forneça um botão que, quando clicado, usa localStorage.removeItem para eliminar o histórico de cálculos.
Utilize Session Storage para salvar uma “sessão” de cálculos que se perde quando o navegador é fechado.
Semelhante ao exercício 1, mas usando sessionStorage em vez de localStorage.
Experimente armazenar outras informações relevantes, como a última operação realizada ou configurações de usuário.
Você pode usar ambos localStorage e sessionStorage para diferentes tipos de dados conforme a necessidade.
Desenvolva uma função que recupera as configurações do usuário ao recarregar a página.
Ao carregar a página, use localStorage.getItem ou sessionStorage.getItem para recuperar as configurações e aplicá-las.
Ao completar estes exercícios, você não só terá uma compreensão mais profunda de como usar o Local Storage e o Session Storage, mas também terá uma calculadora web mais rica em funcionalidades.
 */