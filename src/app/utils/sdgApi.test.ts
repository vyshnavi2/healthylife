import test, { describe } from 'node:test';
import { getGoals } from './sdgApi';

describe('getGoals function', () => {
  test('fetches goals from API', async () => {
    const goals = await getGoals();
    expect(goals).toBeDefined();
    expect(Array.isArray(goals)).toBe(true);
  });
});