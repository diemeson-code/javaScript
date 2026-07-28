// Salvar um item
sessionStorage.setItem('username', 'Roger');
 
// Salvar um objeto
const user = { username: 'Roger', age: 38 };
sessionStorage.setItem('user', JSON.stringify(user));