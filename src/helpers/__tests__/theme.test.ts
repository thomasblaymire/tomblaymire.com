import { describe, it, expect } from 'vitest';
import { THEME } from '../theme';

describe('THEME enum', () => {
  it('should have LIGHT theme', () => {
    expect(THEME.LIGHT).toBe('light');
  });

  it('should have DARK theme', () => {
    expect(THEME.DARK).toBe('dark');
  });

  it('should only have two theme values', () => {
    const themeValues = Object.values(THEME);
    expect(themeValues).toHaveLength(2);
    expect(themeValues).toEqual(['light', 'dark']);
  });
});
