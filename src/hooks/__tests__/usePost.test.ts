import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { usePost } from '../usePost';

describe('usePost', () => {
  it('should return article when slug exists', () => {
    const { result } = renderHook(() => usePost('generics-in-typescript'));

    expect(result.current.post).toBeDefined();
    expect(result.current.post?.meta.slug).toBe('generics-in-typescript');
    expect(result.current.error).toBeNull();
    expect(result.current.loading).toBe(false);
  });

  it('should return error when slug does not exist', () => {
    const { result } = renderHook(() => usePost('non-existent-article'));

    expect(result.current.post).toBeUndefined();
    expect(result.current.error).toBeInstanceOf(Error);
    expect(result.current.error?.message).toBe('Article not found');
    expect(result.current.loading).toBe(false);
  });

  it('should return undefined when slug is undefined', () => {
    const { result } = renderHook(() => usePost(undefined));

    expect(result.current.post).toBeUndefined();
    expect(result.current.loading).toBe(false);
  });

  it('should return correct article metadata', () => {
    const { result } = renderHook(() => usePost('git-commands-for-developers'));

    expect(result.current.post?.meta.title).toBe('Git Commands For Developers');
    expect(result.current.post?.meta.tags).toContain('git');
    expect(result.current.post?.meta.publishDate).toBeDefined();
  });

  it('should return Content component', () => {
    const { result } = renderHook(() => usePost('generics-in-typescript'));

    expect(result.current.post?.Content).toBeDefined();
    expect(typeof result.current.post?.Content).toBe('function');
  });
});
