// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

//1
// console.log('Bem-vinda, ' + info.personagem);

//2

// info['recorrente'] = 'Sim';
// console.log(info);

//3

// for (let index in info) {
//   console.log(index);
// }

//4

// for (let index in info) {
//   console.log(info[index]);
// }

//5


// let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: 'O Pior Dia de Todos',
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
//     },
//   ],
// };

//6

// console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo + '."');

//7

// leitor.livrosFavoritos.push(
//   {
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
//   }
// )

//8

// console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos. ');


// FUNÇÕES

//2

function verificaMaiorIndice(numbers) {

  let maiorIndice = 0;

  for (let index in numbers) {
    if (numbers[maiorIndice] < numbers[index]) {
      maiorIndice = index;
    }

  }
  return maiorIndice;
}
console.log(verificaMaiorIndice([2, 23, 6, 7, 10, 1]));

//3

function verificaMenorIndice(numbers) {

  let menorIndice = 0;

  for (let index in numbers) {
    if (numbers[menorIndice] > numbers[index]) {
      menorIndice = index;
    }

  }
  return menorIndice;
}
console.log(verificaMenorIndice([2, 23, -6, 7, 10, 1]));

//4

function maiorNome(nomes) {

  let maiorNome = nomes[0];

  for (let index in nomes) {
    if (maiorNome.length < nomes[index].length) {
      maiorNome = nomes[index];
    }
  }
  return maiorNome;
}
console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

//5


function elementoMaisRepete(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;

  for (let index in numeros) {
    let verificaNumero = numeros[index];
    for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  return numeros[indexNumeroRepetido]
}
console.log(elementoMaisRepete([2, 3, 2, 5, 8, 2, 3]));
