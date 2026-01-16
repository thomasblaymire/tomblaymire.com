import { useMemo } from 'react';

import { getAllArticles } from '@/content/articles';
import { Article } from '@/types/article';

export const usePosts = () => {
  const articles = useMemo(() => getAllArticles(), []);

  return {
    posts: articles,
    error: null,
    loading: false,
  };
};

export type { Article };
