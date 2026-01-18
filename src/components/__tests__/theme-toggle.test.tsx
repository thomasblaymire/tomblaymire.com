import { describe, expect, it, vi } from 'vitest';

import { THEME } from '@/helpers/theme';
import { renderWithProviders, userEvent } from '@/test/test-utils';

import { ThemeToggle } from '../theme-toggle';

describe('ThemeToggle', () => {
  it('should render sun icon when theme is dark', () => {
    const toggleTheme = vi.fn();
    const { getByAltText } = renderWithProviders(
      <ThemeToggle toggleTheme={toggleTheme} theme={THEME.DARK} />,
    );

    expect(getByAltText('sun')).toBeInTheDocument();
  });

  it('should render moon icon when theme is light', () => {
    const toggleTheme = vi.fn();
    const { getByAltText } = renderWithProviders(
      <ThemeToggle toggleTheme={toggleTheme} theme={THEME.LIGHT} />,
    );

    expect(getByAltText('moon')).toBeInTheDocument();
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
    expect(button).toHaveClass('bg-[rgb(239,239,239)]');
    expect(button).toHaveClass('border-[rgba(0,0,0,0.15)]');
  });
});
