const sum = require('./sum.js');
 
describe('Testa função sum', () => {
  test('Testa que o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  test('Testa que o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
})
 
describe('Testa se mensagem de erro é lançada', () => {
  test('Testa se lança erro quando sum recebe como parâmetro uma string', () => {
    expect(() => sum(4, '5')).toThrowError();
  })
   test('Testa se a mensagem de erro é "parameters must be numbers"', () => {
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers')
  })
})
 
const myRemove = require('./sum.js');
 
describe('Testa função myRemove', () => {
  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4])).not.toEqual([1, 2, 3, 4])
  })
})
