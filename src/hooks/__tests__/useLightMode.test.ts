import { THEME } from '@/helpers/theme';
import { act, renderHook, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useLightMode } from '../useLightMode';

describe('useLightMode', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    // Clear document classes
    document.documentElement.classList.remove('dark');
  });

  afterEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  it('should initialize with dark theme by default', async () => {
    const { result } = renderHook(() => useLightMode());

    await waitFor(() => {
      expect(result.current[2]).toBe(true); // componentMounted
    });

    expect(result.current[0]).toBe(THEME.DARK);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('should toggle theme from dark to light', async () => {
    const { result } = renderHook(() => useLightMode());

    await waitFor(() => {
      expect(result.current[2]).toBe(true);
    });

    act(() => {
      result.current[1](); // toggleTheme
    });

    expect(result.current[0]).toBe(THEME.LIGHT);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(localStorage.getItem('theme')).toBe(THEME.LIGHT);
  });

  it('should toggle theme from light to dark', async () => {
    const { result } = renderHook(() => useLightMode());

    await waitFor(() => {
      expect(result.current[2]).toBe(true);
    });

    // Toggle to light
    act(() => {
      result.current[1]();
    });

    // Toggle back to dark
    act(() => {
      result.current[1]();
    });

    expect(result.current[0]).toBe(THEME.DARK);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem('theme')).toBe(THEME.DARK);
  });

  it('should load theme from localStorage on mount', async () => {
    localStorage.setItem('theme', THEME.LIGHT);

    const { result } = renderHook(() => useLightMode());

    await waitFor(() => {
      expect(result.current[2]).toBe(true);
    });

    expect(result.current[0]).toBe(THEME.LIGHT);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('should persist theme to localStorage when toggled', async () => {
    const { result } = renderHook(() => useLightMode());

    await waitFor(() => {
      expect(result.current[2]).toBe(true);
    });

    act(() => {
      result.current[1]();
    });

    expect(localStorage.getItem('theme')).toBe(THEME.LIGHT);

    act(() => {
      result.current[1]();
    });

    expect(localStorage.getItem('theme')).toBe(THEME.DARK);
  });

  it('should add dark class to documentElement when dark mode', async () => {
    const { result } = renderHook(() => useLightMode());

    await waitFor(() => {
      expect(result.current[2]).toBe(true);
    });

    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('should remove dark class from documentElement when light mode', async () => {
    const { result } = renderHook(() => useLightMode());

    await waitFor(() => {
      expect(result.current[2]).toBe(true);
    });

    act(() => {
      result.current[1]();
    });

    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('should handle invalid localStorage value', async () => {
    localStorage.setItem('theme', 'invalid-theme');

    const { result } = renderHook(() => useLightMode());

    await waitFor(() => {
      expect(result.current[2]).toBe(true);
    });

    // Should default to dark theme
    expect(result.current[0]).toBe(THEME.DARK);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });
});
