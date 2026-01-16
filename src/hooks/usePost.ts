import { useMemo } from 'react';

import { getArticleBySlug } from '@/content/articles';
import { Article } from '@/types/article';

export const usePost = (slug: string | undefined) => {
  const article = useMemo(() => {
    if (!slug) return undefined;
    return getArticleBySlug(slug);
  }, [slug]);

  return {
    post: article,
    error: article ? null : new Error('Article not found'),
    loading: false,
  };
};

export type { Article };
