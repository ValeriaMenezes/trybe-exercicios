const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//1 ESTRUTURA PARA ADICIONAR QUALQUER CHAVE E VALOR EM QUALQUER OBJETO.

const addNewKey = (object, newKey, value) => {
  object[newKey] = value;
}
addNewKey(lesson3, 'turno', 'noite');
console.log(lesson2);


//2

// const listKeys = (obj) => Object.keys(obj);
// console.log(listKeys(lesson3));

//3

// const lengthObject = (obj) => Object.keys(obj).length;
// console.log(lengthObject(lesson2));

//4

// const listValues = (obj) => Object.values(obj);
// console.log(listValues(lesson2));

//5

// const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
// console.log(allLessons);

//6

// const totalStudents = (obj) => {
//   let total = 0;

//   const keysObj = Object.keys(obj);

//   for (index in keysObj) {
//     total += obj[keysObj[index]].numeroEstudantes;
//   }
//   return total;
// };
// console.log(totalStudents(allLessons));

//7

// const indexKey = (obj, index) => Object.values(obj)[index];
// console.log(indexKey(lesson3, 3));

//8

// const verifyPair = (obj, key, value) => {
//   const entries = Object.entries(obj);
//   let equal = false;

//   for (let index in entries) {
//     if (entries[index][0] === key && entries[index][1] === value) {
//       equal = true;
//       return equal;
//     } else {
//       equal = false;
//       return equal;
//     }
//   }
// };
// console.log(verifyPair(lesson3,  'materia', 'Maria Clara'));
