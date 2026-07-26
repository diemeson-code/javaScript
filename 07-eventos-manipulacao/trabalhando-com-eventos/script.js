document.getElementById('clickButton').addEventListener('click', function() {
  alert('Você clicou em mim!');
});

document.getElementById('clickButton').addEventListener('click', function() {
  document.getElementById('mouseArea').textContent = 'O botão foi clicado!';
});

document.getElementById('mouseArea').addEventListener('mousedown', function() {
  this.textContent = 'Botão do mouse pressionado!';
});
 
document.getElementById('mouseArea').addEventListener('mouseup', function() {
  this.textContent = 'Botão do mouse liberado!';
});

document.getElementById('mouseArea').addEventListener('mousemove', function(e) {
  this.textContent = `Posição do mouse: X=${e.clientX}, Y=${e.clientY}`;
});

document.getElementById('textArea').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    alert('Você pressionou a tecla Enter!');
  }
});
 
document.getElementById('textArea').addEventListener('keyup', function() {
  console.log('Uma tecla foi liberada');
})

document.getElementById('textArea').addEventListener('keypress', function(e) {
  console.log(`Tecla pressionada: ${e.key}`);
});