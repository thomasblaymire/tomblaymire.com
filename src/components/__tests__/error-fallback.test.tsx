import { describe, expect, it, vi } from 'vitest';

import { renderWithProviders, screen, userEvent } from '@/test/test-utils';

import { ErrorFallback } from '../error-fallback';

describe('ErrorFallback (500 page)', () => {
  const defaultProps = {
    error: new Error('Test error'),
    resetErrorBoundary: vi.fn(),
  };

  it('should display 500 error code', () => {
    renderWithProviders(<ErrorFallback {...defaultProps} />);

    expect(screen.getByText('500')).toBeInTheDocument();
  });

  it('should display a helpful heading', () => {
    renderWithProviders(<ErrorFallback {...defaultProps} />);

    expect(
      screen.getByRole('heading', { name: /something went wrong/i }),
    ).toBeInTheDocument();
  });

  it('should display an explanation message', () => {
    renderWithProviders(<ErrorFallback {...defaultProps} />);

    expect(
      screen.getByText(/we.re sorry, but something unexpected happened/i),
    ).toBeInTheDocument();
  });

  it('should display the error message when provided', () => {
    const error = new Error('Database connection failed');
    renderWithProviders(<ErrorFallback error={error} resetErrorBoundary={vi.fn()} />);

    expect(screen.getByText('Database connection failed')).toBeInTheDocument();
  });

  it('should handle non-Error objects gracefully', () => {
    renderWithProviders(
      <ErrorFallback error="String error message" resetErrorBoundary={vi.fn()} />,
    );

    expect(screen.getByText('String error message')).toBeInTheDocument();
  });

  it('should provide a link to go back home', () => {
    renderWithProviders(<ErrorFallback {...defaultProps} />);

    const homeLink = screen.getByRole('link', { name: /go back home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('should show try again button', () => {
    renderWithProviders(<ErrorFallback {...defaultProps} />);

    expect(screen.getByRole('button', { name: /try again/i })).toBeInTheDocument();
  });

  it('should call resetErrorBoundary when try again is clicked', async () => {
    const mockReset = vi.fn();
    const user = userEvent.setup();
    renderWithProviders(
      <ErrorFallback error={new Error('Test')} resetErrorBoundary={mockReset} />,
    );

    await user.click(screen.getByRole('button', { name: /try again/i }));

    expect(mockReset).toHaveBeenCalledTimes(1);
  });
});
