// 1
const a = 35;
const b = 5;
const c = 43

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// 2
if (a > b) {
    console.log('a é maior que b');
} else {
    console.log('b é maior que a');
}

//3
const numA = 5;
const numB = 7;
const numC = 9;

if (numA > numB && numA > numC) {
    console.log('O maior número é 5');
} else if (numB > numA && numB > numC) {
    console.log('O maior número é 7');
} else {
    console.log('O maior número é 9');
}

// 4
const number = 0;

if (number > 0) {
    console.log('positive');
} else if (number < 0) {
    console.log('negative');
} else {
    console.log('zero');
}

// 5
let angulo1 = -1;
let angulo2 = 80;
let angulo3 = 20;
let angulospositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if (angulospositivos) {
    if (angulo1 + angulo2 + angulo3 === 180) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log('ângulo inválido');
}

//6
const pecaxadrez = "doguinho"

switch (pecaxadrez.toLowerCase()) {
    case "rei":
        console.log("Rei- uma casa para tosas as direções");
        break;
    case "rainha":
        console.log("Rainha- para todas as direções");
        break;
    case "torre":
        console.log("Torre- horizontal e vertical");
        break;
    case "cavalo":
        console.log("Cavalo- L, pode pular sobre as peças");
        break;
    case "bispo":
        console.log("Bispo- diagonal");
        break;
    case "peão":
        console.log("Peão- uma casa para frente, no primeiro movimento podem ser duas casas");
        break;
    default:
        console.log("Erro: peça inválida");
}

//7
let nota = -193;

if (nota < 0 || nota > 100) {
    console.log("Erro: nota inválida");
} else if (nota >= 90) {
    console.log("A");
} else if (nota >= 80) {
    console.log("B");
} else if (nota >= 70) {
    console.log("C");
} else if (nota >= 60) {
    console.log("D");
} else if (nota >= 50) {
    console.log("E");
} else {
    console.log("F");
}

//8
const valor1 = 1;
const valor2 = 7;
const valor3 = 5;


if (valor1 % 2 === 0 || valor2 % 2 === 0 || valor3 % 2 === 0) {
    console.log(true);
} else {
    console.log(false);
}

//9
const valor4 = 8;
const valor5 = 6;
const valor6 = 4;

if (valor4 % 2 != 0 || valor5 % 2 != 0 || valor6 % 2 != 0) {
    console.log(true);
} else {
    console.log(false);
}

//10
const custoProduto = 1500;
const valorVenda = 2000;
const custoTotal = custoProduto + ((custoProduto / 100) * 20);
const lucro = valorVenda - custoTotal;

if (custoProduto >= 0 && valorVenda >= 0) {
    console.log(lucro);
} else {
    console.log("Erro: os valores são negativos");
}

//11

let salarioBase;
let salarioBruto = 5000;
let aliquotaInss;
let aliquotaIR;

if (salarioBruto <= 1556.94) {
    aliquotaInss = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
    aliquotaInss = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
    aliquotaInss = salarioBruto * 0.11;
} else {
    aliquotaInss = 570.88;
}

salarioBase = salarioBruto - aliquotaInss;

if (salarioBase <= 1903.98) {
    aliquotaIR = 0;
} else if (salarioBase <= 2826.65) {
    aliquotaIR = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
    aliquotaIR = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
    aliquotaIR = (salarioBase * 0.225) - 636.13;
} else {
    aliquotaIR = (salarioBase * 0.275) - 869.36;
}

console.log("Salário: " + (salarioBase - aliquotaIR));