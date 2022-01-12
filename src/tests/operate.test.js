import operate from '../logic/operate';

describe('Testing Operations', () => {
  test('Addition', () => {
    expect(operate(25, 5, '+')).toBe('30');
  });
  test('Subtraction', () => {
    expect(operate(4.5, 0.5, '-')).toBe('4');
  });
  test('Multiplication', () => {
    expect(operate(25, 4, 'x')).toBe('100');
  });
  test('Division', () => {
    expect(operate(25, 5, '÷')).toBe('5');
  });
});
