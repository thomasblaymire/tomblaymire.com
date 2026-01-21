import { describe, expect, it } from 'vitest';

import { formatDate } from '../post';

describe('formatDate (post helper)', () => {
  it('should format a date to UK locale with full month name', () => {
    const result = formatDate('2024-01-15');

    expect(result).toBe('15 January 2024');
  });

  it('should handle different months correctly', () => {
    expect(formatDate('2024-06-20')).toBe('20 June 2024');
    expect(formatDate('2024-12-25')).toBe('25 December 2024');
  });

  it('should handle ISO date strings', () => {
    const result = formatDate('2024-03-10T10:30:00Z');

    expect(result).toBe('10 March 2024');
  });
});
