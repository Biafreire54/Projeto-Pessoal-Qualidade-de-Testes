const {somar, multiplicar, divisão, ehPar, subtração, contarCaracteres, multi, mult, divi} = require('../src/calculadora')

test('Somar dois números', () => {
    expect(somar(2, 3)).toBe(5)
  });
  

  test('Multiplicar dois números', () => {
    expect(multiplicar(7, 9)).toBe(63)
  });
  
  test('dividir dois números', () => {
    expect(divisão(16, 2)).toBe(8)
  });

  test('subtração dois números', () => {
    expect(subtração(10, 2)).toBe(8)
  });

  test('A função ehpar deve afirmar que o número 8 é par', () => {
    expect(ehPar(8)).toBe(true)
  });
  
  test('A função ehPar deve afirmar que o número 1 não é par', () => {
    expect(ehPar(1)).toBe(false);
  });


  test('A função contarCaracteres deve retornar que a string "Tecnologia" possui 10 caracteres', () => {
    expect(contarCaracteres("Tecnologia")).toBe("A string Tecnologia possui 10 caracteres");
  });

  test('Multiplicar três números', () => {
    expect(multi(7, 9, 2)).toBe(126)
  });

  
  test('Multiplicar dois números', () => {
    expect(mult(7.5 , 2)).toBe(15)
  });

  test('dividir dois números', () => {
    expect(divi(35, 2,5)).toBe(17.5)
  });


  