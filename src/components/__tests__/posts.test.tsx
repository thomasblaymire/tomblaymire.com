import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '@/test/test-utils';

import { Posts } from '../posts';

describe('Posts', () => {
  it('should display a list of articles', () => {
    const { getAllByRole } = renderWithProviders(<Posts />);

    const articles = getAllByRole('article');
    expect(articles.length).toBeGreaterThan(0);
  });

  it('should limit the number of posts when limit prop is provided', () => {
    const { getAllByRole } = renderWithProviders(<Posts limit={2} />);

    const articles = getAllByRole('article');
    expect(articles.length).toBe(2);
  });

  it('should display article titles', () => {
    const { getByText } = renderWithProviders(<Posts limit={1} />);

    // Should display at least one article title (from actual content)
    expect(getByText(/Read article/)).toBeInTheDocument();
  });

  it('should link each article to its detail page', () => {
    const { getAllByRole } = renderWithProviders(<Posts limit={2} />);

    const links = getAllByRole('link');
    links.forEach((link) => {
      expect(link).toHaveAttribute('href');
      expect(link.getAttribute('href')).toMatch(/^\/articles\//);
    });
  });
});
