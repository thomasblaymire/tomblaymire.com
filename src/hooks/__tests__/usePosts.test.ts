import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { usePosts } from '../usePosts';

describe('usePosts', () => {
  it('should return all articles', () => {
    const { result } = renderHook(() => usePosts());

    expect(result.current.posts).toBeInstanceOf(Array);
    expect(result.current.posts.length).toBeGreaterThan(0);
    expect(result.current.error).toBeNull();
    expect(result.current.loading).toBe(false);
  });

  it('should return articles sorted by publish date (newest first)', () => {
    const { result } = renderHook(() => usePosts());

    const posts = result.current.posts;
    for (let i = 0; i < posts.length - 1; i++) {
      const currentDate = new Date(posts[i].meta.publishDate);
      const nextDate = new Date(posts[i + 1].meta.publishDate);
      expect(currentDate.getTime()).toBeGreaterThanOrEqual(nextDate.getTime());
    }
  });

  it('should have required meta fields for each article', () => {
    const { result } = renderHook(() => usePosts());

    result.current.posts.forEach((post) => {
      expect(post.meta.title).toBeDefined();
      expect(post.meta.slug).toBeDefined();
      expect(post.meta.description).toBeDefined();
      expect(post.meta.publishDate).toBeDefined();
      expect(post.meta.tags).toBeInstanceOf(Array);
    });
  });

  it('should have Content component for each article', () => {
    const { result } = renderHook(() => usePosts());

    result.current.posts.forEach((post) => {
      expect(post.Content).toBeDefined();
      expect(typeof post.Content).toBe('function');
    });
  });

  it('should return articles with expected known slugs', () => {
    const { result } = renderHook(() => usePosts());

    const slugs = result.current.posts.map((p) => p.meta.slug);
    expect(slugs).toContain('generics-in-typescript');
    expect(slugs).toContain('git-commands-for-developers');
    expect(slugs).toContain('top-ui-inspiration-websites');
  });
});
