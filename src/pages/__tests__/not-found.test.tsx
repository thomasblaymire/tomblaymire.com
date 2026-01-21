import { describe, expect, it } from 'vitest';

import { renderWithProviders, screen } from '@/test/test-utils';

import { NotFound } from '../not-found';

describe('NotFound (404 page)', () => {
  it('should display 404 error code', () => {
    renderWithProviders(<NotFound />);

    expect(screen.getByText('404')).toBeInTheDocument();
  });

  it('should display a helpful heading', () => {
    renderWithProviders(<NotFound />);

    expect(screen.getByRole('heading', { name: /page not found/i })).toBeInTheDocument();
  });

  it('should display an explanation message', () => {
    renderWithProviders(<NotFound />);

    expect(
      screen.getByText(/sorry, we couldn.t find the page you.re looking for/i),
    ).toBeInTheDocument();
  });

  it('should provide a link to go back home', () => {
    renderWithProviders(<NotFound />);

    const homeLink = screen.getByRole('link', { name: /go back home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('should provide a link to browse articles', () => {
    renderWithProviders(<NotFound />);

    const articlesLink = screen.getByRole('link', { name: /browse articles/i });
    expect(articlesLink).toBeInTheDocument();
    expect(articlesLink).toHaveAttribute('href', '/articles');
  });
});
