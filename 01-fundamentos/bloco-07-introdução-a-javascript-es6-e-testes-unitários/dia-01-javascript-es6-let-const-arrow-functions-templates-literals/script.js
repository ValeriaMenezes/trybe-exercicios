//1

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(`${ifScope}  o que estou fazendo aqui ? :O`);
}

testingScope(true);

//2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const arrCrescente = (array) => {
  const numbers = array.sort((a, b) => a - b);
  return numbers;
}
const arrayNumbers = arrCrescente(oddsAndEvens)
console.log(`Os números ${arrayNumbers} se encontram ordenados de forma crescente!`);

// Parte 2
//1

// const fatorial = (number) => {
//   let result = 1;

//   for (let index = 2; index <= number; index += 1) {
//   result *= index;
//    }
//  return result;
// }
// fatorial(5);

const fatorial = number => number > 1 ? number * fatorial(number - 1) : 1;
console.log(fatorial(4));