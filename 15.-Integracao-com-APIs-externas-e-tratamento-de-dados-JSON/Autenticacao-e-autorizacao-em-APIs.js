/**Bem-vindo à aula sobre Autenticação e Autorização em APIs. Nesta aula, vamos entender o papel crucial que a autenticação e autorização desempenham na interação segura com APIs. Isso é fundamental não apenas para a segurança dos dados, mas também para permitir uma comunicação eficaz e eficiente entre diferentes sistemas. Se você já se perguntou como sistemas distintos conseguem trocar informações de forma segura, você está prestes a descobrir.

Conceitos Básicos
O que é Autenticação?
Autenticação é o processo de verificar a identidade de um usuário, sistema ou aplicação que tenta acessar um recurso. É como um guarda de segurança que verifica sua identificação antes de permitir que você entre em um prédio. Em termos de API, a autenticação garante que você é quem diz ser.

O que é Autorização?
Autorização, por outro lado, é o processo de verificar se você tem permissão para fazer o que está tentando fazer. Usando a analogia do guarda de segurança novamente, a autorização seria o ato de verificar se você tem acesso permitido aos andares específicos ou salas do prédio. Em termos de API, a autorização acontece depois da autenticação e determina quais recursos você tem permissão para acessar ou modificar.

A Diferença Entre Autenticação e Autorização
Embora esses termos sejam frequentemente usados de forma intercambiável, eles são distintos. A autenticação acontece antes e é o processo de verificação de identidade. Uma vez que a identidade é confirmada, a autorização entra em jogo para determinar os níveis de acesso ou permissões. Pense na autenticação como o “login” e na autorização como as “permissões” que você recebe depois de fazer login com sucesso.

Métodos Comuns de Autenticação
API Keys: O que são e como funcionam
O que são:

As API Keys são essencialmente senhas geradas que permitem o acesso a uma API. Elas são usadas para identificar o chamador de uma API, seja ele um usuário individual ou um serviço.

Como funcionam:

Quando você faz uma solicitação a uma API que requer uma API Key, você inclui essa chave no cabeçalho da solicitação. O servidor, então, valida essa chave antes de processar a solicitação.

Exemplo: */

fetch("https://api.example.com/data", {
  headers: {
    "Authorization": "API-KEY 1234567890"
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log("Erro:", error));

/**Explicação do exemplo: No código acima, fazemos uma requisição HTTP usando a função fetch do JavaScript. A API Key (1234567890) é enviada no cabeçalho de Authorization.

OAuth: Explicação e usos comuns
Explicação:

OAuth (Open Authorization) é um protocolo de autorização padrão que permite que um usuário permita que uma aplicação terceira acesse seus dados em outra aplicação, tudo isso sem compartilhar suas credenciais de login.

Usos comuns:

É frequentemente usado para permitir que aplicativos acessem informações de plataformas como Google, Facebook e Twitter. Por exemplo, quando um site oferece a opção “Login com Google”, ele está usando OAuth para autenticar usuários.

Exemplo: */

const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(CLIENT_ID);
 
async function verify(token) {
  const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
  });
  const payload = ticket.getPayload();
  const userId = payload['sub'];
}

/**
Explicação do exemplo: No código acima, usamos o Google OAuth2 para autenticar o usuário. A função verify pega um token como argumento e verifica sua validade usando o CLIENT_ID.

JWT (JSON Web Tokens): Como e por que usar
Como e por que usar:

JWT é um padrão aberto para a transmissão segura de informações entre duas partes. O token é composto de um cabeçalho, um payload e uma assinatura, e pode ser usado tanto para autenticação quanto para troca de informações.

JWT é frequentemente usado porque o servidor não precisa manter um registro dos tokens emitidos. Cada token é autossuficiente, contendo todas as informações de que precisa. Isso o torna escalável e fácil de usar em sistemas distribuídos.

Exemplo:*/

const jwt = require('jsonwebtoken');
 
// Criação do token
const token = jwt.sign({ userId: 1 }, 'yourSecretKey', { expiresIn: '1h' });
 
// Verificação do token
jwt.verify(token, 'yourSecretKey', (err, decoded) => {
  if (err) {
    console.log('Token inválido');
  } else {
    console.log('Token válido:', decoded);
  }
});


/**Explicação do exemplo: No exemplo acima, usamos a biblioteca jsonwebtoken para criar e verificar um token JWT. A função jwt.sign cria um novo token com um userId e uma chave secreta. A função jwt.verify verifica a validade do token.

Conclusão
Nesta aula, discutimos a importância da autenticação e autorização quando se trabalha com APIs. Abordamos os conceitos básicos e nos aprofundamos nos métodos comuns de autenticação, como API Keys, OAuth e JWT, fornecendo exemplos práticos para cada um. Compreender esses métodos é crucial para a segurança e funcionalidade de suas aplicações.

Esperamos que você aplique esses conhecimentos em seus futuros projetos, garantindo assim não apenas a funcionalidade, mas também a segurança de suas aplicações. */