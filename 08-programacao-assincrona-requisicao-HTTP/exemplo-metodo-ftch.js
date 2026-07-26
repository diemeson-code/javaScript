/**fetch('https://api.exemple.com/data')
.then(response => response.json())
.then(data => console.log(data))
.catch(error =>console.error('Houve um erro!',error));*/

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(post => {
    document.getElementById('title').innerText = post.title;
    document.getElementById('body').innerText = post.body;
  })
  .catch(error => console.error('Erro na requisição:', error));