import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '@/test/test-utils';
import { Article } from '@/types/article';

import { Post } from '../post';

const mockArticle: Article = {
  meta: {
    title: 'Test Article Title',
    slug: 'test-article',
    description: 'This is a test article description',
    publishDate: '2024-01-15',
    tags: ['testing', 'react'],
  },
  Content: () => <div>Article content</div>,
};

describe('Post', () => {
  it('should display the article title', () => {
    const { getByText } = renderWithProviders(<Post article={mockArticle} />);

    expect(getByText('Test Article Title')).toBeInTheDocument();
  });

  it('should display the article description', () => {
    const { getByText } = renderWithProviders(<Post article={mockArticle} />);

    expect(getByText('This is a test article description')).toBeInTheDocument();
  });

  it('should link to the article page', () => {
    const { getByRole } = renderWithProviders(<Post article={mockArticle} />);

    const link = getByRole('link');
    expect(link).toHaveAttribute('href', '/articles/test-article');
  });

  it('should display the publish date when provided', () => {
    const { getByText } = renderWithProviders(<Post article={mockArticle} />);

    expect(getByText(/Mon Jan 15 2024/)).toBeInTheDocument();
  });

  it('should display "Read article" call to action', () => {
    const { getByText } = renderWithProviders(<Post article={mockArticle} />);

    expect(getByText('Read article')).toBeInTheDocument();
  });

  it('should not display date when publishDate is not provided', () => {
    const articleWithoutDate: Article = {
      ...mockArticle,
      meta: { ...mockArticle.meta, publishDate: '' },
    };
    const { container } = renderWithProviders(<Post article={articleWithoutDate} />);

    const timeElement = container.querySelector('time');
    expect(timeElement).not.toBeInTheDocument();
  });
});
