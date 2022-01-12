import calculate from '../logic/calculate';

describe('Testing Calculate', () => {
  test('Addition', () => {
    const objOp = { total: 20, next: 10, operation: '+' };
    const result = calculate(objOp, objOp.operation);
    expect(result.total).toBe('30');
  });
  test('Subtraction', () => {
    const objOp = { total: 30, next: 5, operation: '-' };
    const result = calculate(objOp, objOp.operation);
    expect(result.total).toBe('25');
  });
  test('Multiplication', () => {
    const objOp = { total: 40, next: 5, operation: 'x' };
    const result = calculate(objOp, objOp.operation);
    expect(result.total).toBe('200');
  });
  test('Division', () => {
    const objOp = { total: 100, next: 4, operation: '÷' };
    const result = calculate(objOp, objOp.operation);
    expect(result.total).toBe('25');
  });
});
