//1

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}

//2

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;
let media = 0;

for (let index = 0; index < numbers.length; index += 1) {
    resultado = (numbers[index] + resultado);
}
console.log(resultado);

//3

for (let index = 0; index < numbers.length; index += 1) {
    media = resultado / 10;
}
console.log(media);

// 4

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let contador = 0; contador < numbers.length; contador += 1) {
    if (numbers[contador] > 20) {
        console.log("Valor maior que 20");
    } else {
        console.log("Valor menor ou igual a 20");
    }
}

// 5

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maiorNumero) {
        maiorNumero = numbers[index];
    }
}
console.log(maiorNumero);

//6

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        impares = numbers[index];
        console.log(impares);
    } else {
        console.log("nenhum valor ímpar encontrado");
    }
}

// 7

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < menorNumero) {
        menorNumero = numbers[index];
    }
}
console.log(menorNumero);

//8

let novoArray = [];

for (let index = 1; index <= 25; index += 1) {
    novoArray.push(index);
}
console.log(novoArray);

//9

let divisao;

for (let index = 0; index < novoArray.length; index += 1) {
    divisao = (novoArray[index] / 2);
    console.log(divisao);
}


