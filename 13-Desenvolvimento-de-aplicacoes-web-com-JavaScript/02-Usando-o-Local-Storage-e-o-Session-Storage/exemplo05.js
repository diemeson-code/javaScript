// Recuperar um item
const username = sessionStorage.getItem('username');
console.log(username); // Saída: Roger
 
// Recuperar um objeto
const userJSON = sessionStorage.getItem('user');
const user = JSON.parse(userJSON);
console.log(user.username); // Saída: Roger