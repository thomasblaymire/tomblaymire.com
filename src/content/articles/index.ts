import { Article } from '@/types/article';

import FrontendObservabilityWithGrafana, {
  meta as frontendObservabilityWithGrafanaMeta,
} from './frontend-observability-with-grafana.mdx';
import GenericsInTypescript, {
  meta as genericsInTypescriptMeta,
} from './generics-in-typescript.mdx';
import GitCommandsForDevelopers, {
  meta as gitCommandsForDevelopersMeta,
} from './git-commands-for-developers.mdx';
import PracticalTypescriptPatterns, {
  meta as practicalTypescriptPatternsMeta,
} from './practical-typescript-patterns.mdx';
import TopUiInspirationWebsites, {
  meta as topUiInspirationWebsitesMeta,
} from './top-ui-inspiration-websites.mdx';

const articles: Article[] = [
  {
    meta: frontendObservabilityWithGrafanaMeta,
    Content: FrontendObservabilityWithGrafana,
  },
  {
    meta: practicalTypescriptPatternsMeta,
    Content: PracticalTypescriptPatterns,
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
