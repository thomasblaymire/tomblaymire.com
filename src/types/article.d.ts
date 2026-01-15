import { ComponentType } from 'react';

export interface ArticleMeta {
  title: string;
  slug: string;
  description: string;
  publishDate: string;
  updatedDate?: string;
  tags: string[];
  image?: string;
}

export interface Article {
  meta: ArticleMeta;
  Content: ComponentType;
}
