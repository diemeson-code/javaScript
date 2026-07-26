/**Ao trabalhar com requisições HTTP, o tratamento de erros é uma parte crítica e inevitável do desenvolvimento. Não importa o quão perfeito seja o seu código, você não pode controlar todos os aspectos de uma rede ou os dados que está solicitando. Portanto, a possibilidade de ocorrerem erros sempre estará presente. Nesta aula, exploraremos como lidar com esses erros efetivamente usando JavaScript moderno.

Introdução ao Tratamento de Erros em Requisições
Importância do Tratamento de Erros
O tratamento adequado de erros não apenas previne que sua aplicação pare de funcionar inesperadamente, mas também permite que você forneça mensagens úteis e feedback para o usuário. Se algo der errado durante uma requisição, como uma falha de conexão ou um erro no servidor, é importante que o usuário seja informado de maneira clara e útil.

Como os Erros Podem Ocorrer
Erros durante requisições HTTP podem ocorrer por várias razões, incluindo:

Erros de Conexão: Falhas na rede ou perda de conexão com a internet.
Erros no Servidor: Problemas no servidor que está sendo acessado, como erros de configuração ou sobrecarga.
Dados Inválidos: A requisição pode conter dados inválidos ou o servidor pode retornar uma resposta inesperada.
Códigos de Status HTTP: Os códigos de status HTTP, como 404 (Not Found) ou 500 (Internal Server Error), indicam tipos específicos de erros.
O tratamento desses erros envolve a captura e o gerenciamento dessas situações, permitindo que o código continue a ser executado e fornecendo feedback apropriado.

2. Usando o Método .catch com Fetch
Ao utilizar o método fetch, podemos empregar a abordagem de Promises para tratar erros. O método .catch é uma parte fundamental dessa abordagem.

Utilização Básica de .catch
Quando uma Promise é rejeitada, ela pode ser capturada usando o método .catch. Este método é encadeado após o .then e é executado se ocorrer um erro em qualquer parte da cadeia de Promises.

1
2
3
4
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Houve um erro!', error));
No exemplo acima, se ocorrer um erro em qualquer etapa da cadeia de Promises, o código dentro do .catch será executado, permitindo que você lide com o erro de forma adequada.

Exemplos Práticos
Aqui está um exemplo que usa uma URL inválida:

1
2
3
4
fetch('https://api.invalid-url.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => alert('Houve um erro ao buscar os dados!'));
No exemplo acima, o método .catch captura o erro causado pela URL inválida e mostra um alerta ao usuário.

3. Tratamento de Erros com Async/Await
O padrão async/await facilita a escrita de código assíncrono, tornando-o mais legível e compreensível. Ele também simplifica o tratamento de erros usando a estrutura try/catch.

Uso de try e catch com async/await
Em uma função assíncrona, você pode colocar o código dentro de um bloco try, e qualquer erro que ocorra dentro desse bloco será capturado pelo bloco catch correspondente.

O mesmo exemplo anterior pode ser reescrito usando async/await:

1
2
3
4
5
6
7
8
9
10
11
async function fetchData() {
  try {
    const response = await fetch('https://api.invalid-url.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Houve um erro ao buscar os dados!', error);
  }
}
 
fetchData();
O tratamento de erros com async/await e try/catch oferece uma maneira mais clara e organizada de lidar com possíveis falhas em suas requisições, ajudando a criar uma melhor experiência para o usuário final.

4. Códigos de Status HTTP e Seus Significados
Os códigos de status HTTP são uma parte essencial da comunicação entre cliente e servidor. Eles fornecem informações sobre o resultado de uma requisição.

Códigos Comuns de Status HTTP
200 OK: A requisição foi bem-sucedida.
201 Created: A requisição foi bem-sucedida, e um recurso foi criado.
400 Bad Request: A requisição foi malformada ou inválida.
401 Unauthorized: A requisição requer autenticação.
404 Not Found: O recurso solicitado não foi encontrado.
500 Internal Server Error: Um erro inesperado ocorreu no servidor.
Como Lidar com Diferentes Códigos de Status
Você pode usar o objeto response para verificar o código de status e lidar com diferentes casos.

1
2
3
4
5
6
7
8
9
10
11
12
fetch('https://api.example.com/data')
  .then(response => {
    if (response.status === 200) {
      return response.json();
    } else if (response.status === 404) {
      throw new Error('Recurso não encontrado');
    } else {
      throw new Error('Algo deu errado');
    }
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));
5. Boas Práticas ao Trabalhar com Tratamento de Erros
Tratar erros adequadamente é vital para oferecer uma experiência de usuário suave e profissional.

Técnicas Recomendadas
Fornecer feedback claro ao usuário.
Não expor detalhes técnicos desnecessários.
Logar erros para análise e correção futura.
Utilizar estratégias de re-tentativa quando apropriado.
Considerações Sobre a Experiência do Usuário
Pensar na experiência do usuário ao lidar com erros pode transformar uma situação frustrante em uma oportunidade para demonstrar profissionalismo e atenção aos detalhes.

6. Conclusão
Este módulo abordou os aspectos essenciais do tratamento de erros em requisições HTTP. Revise os conceitos aprendidos e pratique através dos exercícios fornecidos.

Seu entendimento sobre como lidar com erros em código assíncrono é uma habilidade valiosa no desenvolvimento moderno de aplicações web.

Obrigado por acompanhar este módulo! Nos vemos no próximo!

Exercícios Práticos
Nesta seção de exercícios, você terá a chance de praticar os conceitos aprendidos neste módulo. Cada desafio é projetado para reforçar sua compreensão sobre tratamento de erros em requisições HTTP.

Exercício 1: Tratamento Básico de Erros com .catch
Faça uma requisição GET a uma API de sua escolha.
Implemente um tratamento de erros utilizando o método .catch.
Mostre uma mensagem amigável ao usuário caso algo dê errado.
Exercício 2: Trabalhando com Diferentes Códigos de Status HTTP
Faça uma requisição GET a uma URL que você sabe que não existe (por exemplo, uma URL que retorna 404).
Implemente um tratamento específico para o código de status 404 e mostre uma mensagem personalizada.
Implemente tratamentos para outros códigos de status, como 200, 400 e 500.
Exercício 3: Tratamento de Erros com Async/Await
Refatore o código do Exercício 2 para utilizar async/await.
Utilize try/catch para tratar os erros.
Mostre mensagens específicas para diferentes códigos de status.
Exercício 4: Boas Práticas no Tratamento de Erros
Para um dos exercícios anteriores, adicione uma estratégia de re-tentativa caso a requisição falhe.
Pense na experiência do usuário e aprimore a forma como os erros são apresentados.
Considere logar os erros de uma maneira que ajudaria na análise e correção futura.
Lembre-se, a prática é a chave para internalizar esses conceitos. Trabalhe através desses desafios e não hesite em revisar o material do módulo se tiver dúvidas. Boa sorte */