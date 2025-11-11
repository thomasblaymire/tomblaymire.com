import { renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { useMediaQuery } from '../useMediaQuery';

describe('useMediaQuery', () => {
  let matchMediaMock: any;

  beforeEach(() => {
    // Setup matchMedia mock
    matchMediaMock = {
      matches: false,
      media: '',
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    };

    window.matchMedia = vi.fn().mockImplementation((query) => ({
      ...matchMediaMock,
      media: query,
    }));
  });

  it('should return false for non-matching media query', () => {
    matchMediaMock.matches = false;

    const { result } = renderHook(() => useMediaQuery('(min-width: 768px)'));

    expect(result.current).toBe(false);
  });

  it('should return true for matching media query', () => {
    matchMediaMock.matches = true;

    const { result } = renderHook(() => useMediaQuery('(min-width: 768px)'));

    expect(result.current).toBe(true);
  });

  it('should call window.matchMedia with correct query', () => {
    const query = '(min-width: 1024px)';

    renderHook(() => useMediaQuery(query));

    expect(window.matchMedia).toHaveBeenCalledWith(query);
  });

  it('should add event listener on mount', () => {
    const matchMediaMock = {
      matches: false,
      // Don't provide addListener so addEventListener is used
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    };

    window.matchMedia = vi.fn().mockReturnValue(matchMediaMock);

    renderHook(() => useMediaQuery('(min-width: 768px)'));

    expect(matchMediaMock.addEventListener).toHaveBeenCalledWith(
      'change',
      expect.any(Function),
    );
  });

  it('should remove event listener on unmount', () => {
    const matchMediaMock = {
      matches: false,
      // Don't provide addListener so removeEventListener is used
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    };

    window.matchMedia = vi.fn().mockReturnValue(matchMediaMock);

    const { unmount } = renderHook(() => useMediaQuery('(min-width: 768px)'));

    unmount();

    expect(matchMediaMock.removeEventListener).toHaveBeenCalledWith(
      'change',
      expect.any(Function),
    );
  });

  it('should use addListener for older browsers', () => {
    matchMediaMock.addEventListener = undefined;

    renderHook(() => useMediaQuery('(min-width: 768px)'));

    expect(matchMediaMock.addListener).toHaveBeenCalledWith(expect.any(Function));
  });

  it('should use removeListener for older browsers on unmount', () => {
    matchMediaMock.addEventListener = undefined;
    matchMediaMock.removeEventListener = undefined;

    const { unmount } = renderHook(() => useMediaQuery('(min-width: 768px)'));

    unmount();

    expect(matchMediaMock.removeListener).toHaveBeenCalledWith(expect.any(Function));
  });

  it('should handle query changes', () => {
    const { rerender } = renderHook(({ query }) => useMediaQuery(query), {
      initialProps: { query: '(min-width: 768px)' },
    });

    expect(window.matchMedia).toHaveBeenCalledWith('(min-width: 768px)');

    rerender({ query: '(min-width: 1024px)' });

    expect(window.matchMedia).toHaveBeenCalledWith('(min-width: 1024px)');
  });
});
