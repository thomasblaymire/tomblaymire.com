import { Article } from '@/types/article';

import GenericsInTypescript, {
  meta as genericsInTypescriptMeta,
} from './generics-in-typescript';
import GitCommandsForDevelopers, {
  meta as gitCommandsForDevelopersMeta,
} from './git-commands-for-developers';
import TopUiInspirationWebsites, {
  meta as topUiInspirationWebsitesMeta,
} from './top-ui-inspiration-websites';

const articles: Article[] = [
  {
    meta: genericsInTypescriptMeta,
    Content: GenericsInTypescript,
  },
  {
    meta: topUiInspirationWebsitesMeta,
    Content: TopUiInspirationWebsites,
  },
  {
    meta: gitCommandsForDevelopersMeta,
    Content: GitCommandsForDevelopers,
  },
];

export const getAllArticles = (): Article[] => {
  return articles.sort(
    (a, b) =>
      new Date(b.meta.publishDate).getTime() - new Date(a.meta.publishDate).getTime(),
  );
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find((article) => article.meta.slug === slug);
};
