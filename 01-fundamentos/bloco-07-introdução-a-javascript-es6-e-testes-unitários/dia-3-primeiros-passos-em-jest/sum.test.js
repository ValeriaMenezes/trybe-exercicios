const {
  sum,
  myRemove ,
  myFizzBuzz,
} = require('./sum.js');
 
describe('Testa função sum', () => {
  it('Testa que o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('Testa que o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
})
 
describe('Testa se mensagem de erro é lançada', () => {
  it('Testa se lança erro quando sum recebe como parâmetro uma string', () => {
    expect(() => sum(4, '5')).toThrowError();
  })
   it('Testa se a mensagem de erro é "parameters must be numbers"', () => {
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers')
  })
})
 
describe('Testa função myRemove', () => {
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 7)).toEqual([1, 2, 3, 4]);
  });
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })
})

describe('Testa função myFizzBuzz', () => {
  it('Testa se número divisível por 3 e 5 retorna fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzBuzz');
  })
  it('Testa se número divisível por 3 retorna fizz', () =>{
    expect(myFizzBuzz(12)).toBe('fizz');
  })
})