/**Trabalhar com APIs e requisições HTTP não está isento de desafios. Erros podem ocorrer por diversas razões: servidores podem ficar fora do ar, dados podem estar incorretos, ou a autenticação pode falhar. Nesta aula, abordaremos o tratamento de erros e exceções em requisições HTTP, um tópico crucial para qualquer desenvolvedor que busca criar aplicações resilientes e amigáveis ao usuário.

Tipos Comuns de Erros
Erros do Cliente: 4xx (ex: 404 Not Found, 403 Forbidden)
Erros do Servidor: 5xx (ex: 500 Internal Server Error)
Erros de Rede
Erros de Timeout
Tratando Erros com Fetch
O método fetch tem uma peculiaridade: ele não rejeita a promessa em caso de erros HTTP, mas apenas em caso de falhas de rede. Vejamos como tratar isso: */

fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.log('Fetch error: ', error));

/**Usando Bibliotecas Externas
Bibliotecas como Axios facilitam o tratamento de erros e exceções em requisições HTTP. Axios, por exemplo, rejeita a promessa tanto em erros HTTP quanto em falhas de rede. */

axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    if (error.response) {
      console.log('Data:', error.response.data);
      console.log('Status:', error.response.status);
    } else if (error.request) {
      console.log('Error Request:', error.request);
    } else {
      console.log('Error:', error.message);
    }
  });

/**Boas Práticas
Sempre inclua tratamento de erro em suas requisições HTTP.
Utilize logs para rastrear e diagnosticar problemas.
Informe o usuário final em caso de erros, de forma clara e amigável.
Conclusão
Aprender a gerenciar erros e exceções em requisições HTTP é um passo fundamental para qualquer desenvolvedor que quer criar aplicações mais robustas e confiáveis. Este conhecimento permitirá não apenas melhorar a experiência do usuário, mas também facilitará a manutenção e o diagnóstico de problemas em seus projetos. */
