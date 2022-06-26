//1

let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
    fatorial *= index;
}
console.log(fatorial);

//2

let word = 'tryber';
let inverteWord = "";

for (let index = 0; index < word.length; index += 1) {
    inverteWord += word[word.length - 1 - index];
}
console.log(inverteWord);

3

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > maiorPalavra.length)
        maiorPalavra = array[index];
}
for (let index = 0; index < array.length; index += 1) {
    if (array[index].length < menorPalavra.length) {
        menorPalavra = array[index];
    }
}
console.log(maiorPalavra);
console.log(menorPalavra);

//4  REFAZER !!!

let maiorPrimo = 0;

for (let count = 2; count <= 300; count += 1) {
    if (count % 1 === 0 && count % count === 0)
        maiorPrimo += count > maiorPrimo ;
}
console.log(maiorPrimo);
