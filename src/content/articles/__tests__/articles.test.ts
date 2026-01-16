import { describe, expect, it } from 'vitest';

import { getAllArticles, getArticleBySlug } from '../index';

describe('articles content', () => {
  describe('getAllArticles', () => {
    it('should return all articles', () => {
      const articles = getAllArticles();

      expect(articles).toBeInstanceOf(Array);
      expect(articles.length).toBeGreaterThan(0);
    });

    it('should return articles sorted by publish date (newest first)', () => {
      const articles = getAllArticles();

      for (let i = 0; i < articles.length - 1; i++) {
        const currentDate = new Date(articles[i].meta.publishDate);
        const nextDate = new Date(articles[i + 1].meta.publishDate);
        expect(currentDate.getTime()).toBeGreaterThanOrEqual(nextDate.getTime());
      }
    });

    it('should have required meta fields for each article', () => {
      const articles = getAllArticles();

      articles.forEach((article) => {
        expect(article.meta.title).toBeDefined();
        expect(article.meta.title).not.toBe('');
        expect(article.meta.slug).toBeDefined();
        expect(article.meta.slug).not.toBe('');
        expect(article.meta.description).toBeDefined();
        expect(article.meta.publishDate).toBeDefined();
        expect(article.meta.tags).toBeInstanceOf(Array);
      });
    });

    it('should have unique slugs for each article', () => {
      const articles = getAllArticles();
      const slugs = articles.map((a) => a.meta.slug);
      const uniqueSlugs = new Set(slugs);

      expect(slugs.length).toBe(uniqueSlugs.size);
    });

    it('should have Content component for each article', () => {
      const articles = getAllArticles();

      articles.forEach((article) => {
        expect(article.Content).toBeDefined();
        expect(typeof article.Content).toBe('function');
      });
    });
  });

  describe('getArticleBySlug', () => {
    it('should return an article when slug exists', () => {
      const article = getArticleBySlug('generics-in-typescript');

      expect(article).toBeDefined();
      expect(article?.meta.slug).toBe('generics-in-typescript');
    });

    it('should return undefined for non-existent slug', () => {
      const article = getArticleBySlug('non-existent-article');

      expect(article).toBeUndefined();
    });

    it('should return correct article content', () => {
      const article = getArticleBySlug('git-commands-for-developers');

      expect(article).toBeDefined();
      expect(article?.meta.title).toBe('Git Commands For Developers');
      expect(article?.meta.tags).toContain('git');
    });
  });
});
