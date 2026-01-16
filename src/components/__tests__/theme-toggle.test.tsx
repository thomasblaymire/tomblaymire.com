import { describe, expect, it, vi } from 'vitest';

import { THEME } from '@/helpers/theme';
import { renderWithProviders, userEvent } from '@/test/test-utils';

import { ThemeToggle } from '../theme-toggle';

describe('ThemeToggle', () => {
  it('should have accessible label for switching to light mode when theme is dark', () => {
    const toggleTheme = vi.fn();
    const { getByRole } = renderWithProviders(
      <ThemeToggle toggleTheme={toggleTheme} theme={THEME.DARK} />,
    );

    expect(getByRole('button', { name: 'Switch to light mode' })).toBeInTheDocument();
  });

  it('should have accessible label for switching to dark mode when theme is light', () => {
    const toggleTheme = vi.fn();
    const { getByRole } = renderWithProviders(
      <ThemeToggle toggleTheme={toggleTheme} theme={THEME.LIGHT} />,
    );

    expect(getByRole('button', { name: 'Switch to dark mode' })).toBeInTheDocument();
  });

  it('should call toggleTheme when button is clicked', async () => {
    const toggleTheme = vi.fn();
    const user = userEvent.setup();
    const { getByRole } = renderWithProviders(
      <ThemeToggle toggleTheme={toggleTheme} theme={THEME.DARK} />,
    );

    const button = getByRole('button');
    await user.click(button);

    expect(toggleTheme).toHaveBeenCalledTimes(1);
  });

  it('should have correct styling', () => {
    const toggleTheme = vi.fn();
    const { getByRole } = renderWithProviders(
      <ThemeToggle toggleTheme={toggleTheme} theme={THEME.DARK} />,
    );

    const button = getByRole('button');
    expect(button).toHaveClass('bg-[rgba(39,39,42,0.9)]');
  });
});
