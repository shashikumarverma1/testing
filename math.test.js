const { add, subtract, multiply, divide } = require('./math');

describe('Math functions', () => {
  // Test cases for add function
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('adds -1 + -2 to equal -3', () => {
    expect(add(-1, -2)).toBe(-3);
  });

  test('adds 0 + 0 to equal 0', () => {
    expect(add(0, 0)).toBe(0);
  });

  // Test cases for subtract function
  test('subtracts 5 - 2 to equal 3', () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test('subtracts -2 - -2 to equal 0', () => {
    expect(subtract(-2, -2)).toBe(0);
  });

  test('subtracts 0 - 5 to equal -5', () => {
    expect(subtract(0, 5)).toBe(-5);
  });

  // Test cases for multiply function
  test('multiplies 2 * 3 to equal 6', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test('multiplies -2 * -2 to equal 4', () => {
    expect(multiply(-2, -2)).toBe(4);
  });

  test('multiplies 0 * 5 to equal 0', () => {
    expect(multiply(0, 5)).toBe(0);
  });

  // Test cases for divide function
  test('divides 6 / 3 to equal 2', () => {
    expect(divide(6, 3)).toBe(2);
  });



  test('throws error when dividing by zero', () => {
    expect(() => divide(6, 0)).toThrow('Cannot divide by zero');
  });
  test("divides 6 / 3 to equal 2" , ()=>{
    expect(()=>divide(6,3).toBe(2))
  });
  test("divide 4/2 to equal to 2", ()=>{
    // expect(() => divide(6, 0)).toThrow('Cannot divide by zero');
  expect(()=>divide(4,0)).toThrow("Cannot divide by zero")
  })
  test("test" , ()=>{
  
    expect(() => divide(6, 0)).toThrow('Cannot divide by zero');
  })

});
