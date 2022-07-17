function verificaNumero(value1, value2) {
  if (!value1 || !value2) {
    throw new Error('Preencha os campos para realizar a soma!');
  }
  if (isNaN(value1) || isNaN(value2)) {
    throw new Error('Insira dois valores numéricos para realizar a soma!')
  }
}

const sum = () => {
  try {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    verificaNumero(value1, value2);
    const result = Number(value1) + Number(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  } catch (error) {
    const result = document.getElementById('result');
    result.innerHTML = `Erro: ${error.message}`;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}