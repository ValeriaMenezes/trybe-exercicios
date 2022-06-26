//Exercício 2 - Crie uma função que, dado um array de números inteiros, 
//retorne a quantidade de números pares e ímpares no formato:

// var numeros = {
//   pares: 0,
//   ímpares: 0
// }

function quantidadeParesImpares(array) {
  let impar = 0;
  let par = 0;
  for (let valor of array) {
    if (valor % 2 === 0) {
      par += 1;
    } else {
      impar += 1;
    }
  }
  let numeros = {
    pares: par,
    impares: impar,
  }
  return numeros;
}
let array = [2, 13, 7, 4]
console.log(quantidadeParesImpares(array));




//Exercício 3 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. 
//Considere que a string ending sempre será menor que a string word.
//Dica: Use o split.


// valor de teste: ‘trybe’ e ‘be’
// valor esperado no retorno da função: true
//verificaFimPalavra(‘trybe’, ‘be’);  
// Retorno esperado: true  
//verificaFimPalavra(‘joaofernando’, ‘fernan’);  
//  Retorno esperado: false;  