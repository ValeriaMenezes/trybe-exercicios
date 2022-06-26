//ACADEMIA DE LÓGICA DIA 4.2

const marina = 25;
const silvia = 18;
const iza = 20;

switch(true) {
    case (marina < silvia && marina < iza):
        console.log("Marina é a pessoa mais jovem e possui 25 anos de idade");
    break;
    case (silvia < marina && silvia < iza):
        console.log("Silvia é a pessoa mais jovem e possui 18 anos de idade");
    break
    default:
        console.log("iza é a pessoa mais jovem e possui 20 anos de idade-");
}

const age = 25;
const sex = "C";
const weigth = 60;
const height = 160;

let tmb;

if (sex.toLowerCase() === "f") {
    tmb = (height * 6.25) + (weigth * 9.99) - (age * 4.92) - 161;
    console.log("A taxa metabólica basal feminina é:"+ tmb + "kcal");
} else if (sex.toLowerCase() === "m") {
    tmb = (height * 6.25) + (weigth * 9.99) - (age * 4.92) + 5;
    console.log("A taxa metabólica basal masculina é:" + tmb + "Kcal");
} else {
   console.log("Erro"); 

const number = 7;

if (number === 1) {
    console.log("1 - Trybe Lanche Feliz");
} else if (number === 2) {
    console.log("2 - McTrybe");
} else if (number === 3) {
    console.log("3 - TrybeWooper");
} else if (number === 4) {
    console.log("4 - X-Trybe");
} else if (number === 5){
    console.log("5 - Triplo Trybe com JS");
} else {
    console.log("Erro: valor inválido");
}
}
