import { Article } from '@/types/article';

import GenericsInTypescript, {
  meta as genericsInTypescriptMeta,
} from './generics-in-typescript.mdx';
import GitCommandsForDevelopers, {
  meta as gitCommandsForDevelopersMeta,
} from './git-commands-for-developers.mdx';
import TopUiInspirationWebsites, {
  meta as topUiInspirationWebsitesMeta,
} from './top-ui-inspiration-websites.mdx';
import TypescriptPatternsIUseEveryDay, {
  meta as typescriptPatternsIUseEveryDayMeta,
} from './typescript-patterns-i-use-every-day.mdx';

const articles: Article[] = [
  {
    meta: typescriptPatternsIUseEveryDayMeta,
    Content: TypescriptPatternsIUseEveryDay,
  },
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
