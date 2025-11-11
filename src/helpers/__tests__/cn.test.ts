import { describe, expect, it } from 'vitest';

import { cn } from '../cn';

describe('cn utility', () => {
  it('should merge class names', () => {
    const result = cn('px-2 py-1', 'bg-blue-500');
    expect(result).toBe('px-2 py-1 bg-blue-500');
  });

  it('should handle conditional classes', () => {
    const result = cn('px-2', true && 'py-1', false && 'bg-red-500');
    expect(result).toBe('px-2 py-1');
  });

  it('should deduplicate Tailwind classes', () => {
    const result = cn('px-2 px-4', 'py-1');
    expect(result).toBe('px-4 py-1');
  });

  it('should handle undefined and null values', () => {
    const result = cn('px-2', undefined, null, 'py-1');
    expect(result).toBe('px-2 py-1');
  });

  it('should merge conflicting Tailwind classes correctly', () => {
    const result = cn('text-sm text-lg', 'font-bold');
    expect(result).toBe('text-lg font-bold');
  });
});
