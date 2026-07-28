const history = [];
 
function saveToHistory(operation, result) {
  history.push({ operation, result });
  localStorage.setItem('calcHistory', JSON.stringify(history));
}
 
// Usar esta função depois de cada cálculo
saveToHistory('2 + 2', '4');