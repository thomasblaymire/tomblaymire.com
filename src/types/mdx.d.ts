declare module '*.mdx' {
  import type { ComponentType } from 'react';

  export const meta: {
    title: string;
    slug: string;
    description: string;
    publishDate: string;
    updatedDate?: string;
    tags: string[];
    image?: string;
  };

  const MDXComponent: ComponentType;
  export default MDXComponent;
}
