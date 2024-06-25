// __tests__/math.test.ts

import { describe, it } from 'node:test';
import { sum } from '../utils/test';

describe('sum function', () => {
  it('adds two numbers correctly', () => {
    // Arrange
    const a = 5;
    const b = 10;

    // Act
    const result = sum(a, b);

    // Assert
    expect(result).toBe(15);
  });

  it('handles negative numbers', () => {
    // Arrange
    const a = -8;
    const b = 3;

    // Act
    const result = sum(a, b);

    // Assert
    expect(result).toBe(-5);
  });

  it('returns correct result for zero', () => {
    // Arrange
    const a = 0;
    const b = 0;

    // Act
    const result = sum(a, b);

    // Assert
    expect(result).toBe(0);
  });
});
