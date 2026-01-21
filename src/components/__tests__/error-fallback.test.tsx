import { describe, expect, it, vi } from 'vitest';

import { renderWithProviders, screen, userEvent } from '@/test/test-utils';

import { ErrorFallback } from '../error-fallback';

describe('ErrorFallback (500 page)', () => {
  it('should display 500 error code', () => {
    renderWithProviders(<ErrorFallback />);

    expect(screen.getByText('500')).toBeInTheDocument();
  });

  it('should display a helpful heading', () => {
    renderWithProviders(<ErrorFallback />);

    expect(
      screen.getByRole('heading', { name: /something went wrong/i }),
    ).toBeInTheDocument();
  });

  it('should display an explanation message', () => {
    renderWithProviders(<ErrorFallback />);

    expect(
      screen.getByText(/we.re sorry, but something unexpected happened/i),
    ).toBeInTheDocument();
  });

  it('should display the error message when provided', () => {
    const error = new Error('Database connection failed');
    renderWithProviders(<ErrorFallback error={error} />);

    expect(screen.getByText('Database connection failed')).toBeInTheDocument();
  });

  it('should not display error message section when no error provided', () => {
    renderWithProviders(<ErrorFallback />);

    expect(screen.queryByText(/database/i)).not.toBeInTheDocument();
  });

  it('should provide a link to go back home', () => {
    renderWithProviders(<ErrorFallback />);

    const homeLink = screen.getByRole('link', { name: /go back home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('should show try again button when resetErrorBoundary is provided', () => {
    const mockReset = vi.fn();
    renderWithProviders(<ErrorFallback resetErrorBoundary={mockReset} />);

    expect(screen.getByRole('button', { name: /try again/i })).toBeInTheDocument();
  });

  it('should not show try again button when resetErrorBoundary is not provided', () => {
    renderWithProviders(<ErrorFallback />);

    expect(screen.queryByRole('button', { name: /try again/i })).not.toBeInTheDocument();
  });

  it('should call resetErrorBoundary when try again is clicked', async () => {
    const mockReset = vi.fn();
    const user = userEvent.setup();
    renderWithProviders(<ErrorFallback resetErrorBoundary={mockReset} />);

    await user.click(screen.getByRole('button', { name: /try again/i }));

    expect(mockReset).toHaveBeenCalledTimes(1);
  });
});
