// soma.test.js
const soma = require('./soma');
 
test('soma 1 + 2 deve retornar 3', () => {
  expect(soma(1, 2)).toBe(3);
});