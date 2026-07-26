/**Expressões regulares são poderosas ferramentas que permitem a validação de dados em formulários de maneira eficaz e eficiente. Podem ser usadas para garantir que os dados inseridos pelo usuário atendam a certos padrões, como formatos específicos de e-mail, telefone, data, etc. Nesta aula, exploraremos como aplicar expressões regulares para validar diferentes tipos de campos em um formulário.

HTML do Formulário
Aqui está o HTML básico do formulário que utilizaremos nos exemplos desta aula:


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário de Validação</title>
</head>
<body>
    <form id="form">
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" required>
        <br>
        <label for="phone">Telefone:</label>
        <input type="text" id="phone" name="phone" required>
        <br>
        <label for="date">Data (DD/MM/AAAA):</label>
        <input type="text" id="date" name="date" required>
        <br>
        <input type="submit" value="Enviar">
    </form>
    <script src="script.js"></script>
</body>
</html>
Este formulário possui campos para e-mail, telefone e data. A próxima etapa será escrever o JavaScript para validar esses campos usando expressões regulares.

Validando o Campo de Email
A validação do campo de e-mail é comum e crucial para garantir que o usuário insira um endereço de e-mail válido. Vejamos o código JavaScript para fazer isso:




document.querySelector('#form').addEventListener('submit', function (e) {
    var email = document.querySelector('#email').value;
    var regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
 
    if (!regexEmail.test(email)) {
        alert('E-mail inválido.');
        e.preventDefault();
    }
});
Este código utiliza uma expressão regular que define um padrão válido para um endereço de e-mail e testa o valor inserido no campo de e-mail do formulário.

Validando o Campo de Telefone
A validação do campo de telefone pode variar dependendo do formato desejado. Abaixo, há um exemplo de validação para um número de telefone que deve ter o formato (XX) XXXXX-XXXX:




var phone = document.querySelector('#phone').value;
var regexPhone = /^\(\d{2}\) \d{5}-\d{4}$/;
 
if (!regexPhone.test(phone)) {
    alert('Telefone inválido. Formato esperado: (XX) XXXXX-XXXX');
    e.preventDefault();
}
Validando o Campo de Data
A validação da data também pode ser realizada usando expressões regulares. Supondo que a data deve estar no formato DD/MM/AAAA, o código a seguir fará a validação:



var date = document.querySelector('#date').value;
var regexDate = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
 
if (!regexDate.test(date)) {
    alert('Data inválida. Formato esperado: DD/MM/AAAA');
    e.preventDefault();
}
Conclusão
A validação de dados de formulário com expressões regulares permite uma verificação precisa e flexível dos dados inseridos pelo usuário. Essa prática melhora a qualidade dos dados coletados e a experiência do usuário. Os exemplos acima podem ser expandidos e adaptados conforme as necessidades específicas de cada aplicação.

e com isso nós chegamos ao final do nosso módulo de Regex, eu sei que foi meio pesado pois as regex são realmente complexas e vocês vão levar um tempo para absorver, mas pra você que quer se especializar nisso já, deixei alguns exercícios aqui embaixo.

vejo vocês no próximo módulo.

Exercícios Práticos
Expansão de Validadores: Adicione mais campos ao formulário e crie validadores usando expressões regulares para cada um deles.
Feedback ao Usuário: Modifique o código para fornecer feedback visual ao usuário quando a entrada for inválida, em vez de apenas um alerta.
Teste Suas Regex: Utilize o site regex101.com para testar e validar as expressões regulares utilizadas. Experimente diferentes valores e veja como as expressões regulares reagem a eles. */