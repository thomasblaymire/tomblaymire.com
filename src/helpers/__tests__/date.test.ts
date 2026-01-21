import { describe, expect, it } from 'vitest';

import { formatDate } from '../date';

describe('formatDate', () => {
  it('should format a date string to readable format', () => {
    const result = formatDate('2024-01-15');

    expect(result).toMatch(/Mon Jan 15 2024/);
  });

  it('should handle ISO date strings', () => {
    const result = formatDate('2024-06-20T10:30:00Z');

    expect(result).toMatch(/Thu Jun 20 2024/);
  });

  it('should handle different date formats', () => {
    const result = formatDate('December 25, 2023');

    expect(result).toMatch(/Mon Dec 25 2023/);
  });
});
