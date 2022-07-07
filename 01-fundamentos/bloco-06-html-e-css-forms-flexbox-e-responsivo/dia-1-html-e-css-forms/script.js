let form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  if (document.getElementById('imagens').checked === false) {
    event.preventDefault();
    console.log('Não envia');
  }
})
console.log('Enviado');