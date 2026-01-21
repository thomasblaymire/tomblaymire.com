import { describe, expect, it } from 'vitest';

import { device, sizes } from '../device';

describe('device breakpoints', () => {
  describe('sizes', () => {
    it('should define standard breakpoint sizes', () => {
      expect(sizes.mobileS).toBe('320px');
      expect(sizes.mobileM).toBe('375px');
      expect(sizes.mobileL).toBe('425px');
      expect(sizes.tablet).toBe('768px');
      expect(sizes.laptop).toBe('1024px');
      expect(sizes.laptopL).toBe('1440px');
      expect(sizes.desktop).toBe('2560px');
    });
  });

  describe('device media queries', () => {
    it('should generate valid min-width media queries', () => {
      expect(device.mobileS).toBe('(min-width: 320px)');
      expect(device.tablet).toBe('(min-width: 768px)');
      expect(device.laptop).toBe('(min-width: 1024px)');
      expect(device.desktop).toBe('(min-width: 2560px)');
    });
  });
});
