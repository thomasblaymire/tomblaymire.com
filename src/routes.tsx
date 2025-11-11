import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

import { Home } from '@/pages/home';

const About = lazy(() =>
  import('@/pages/about').then((module) => ({ default: module.About })),
);
const Article = lazy(() =>
  import('@/pages/article').then((module) => ({ default: module.Article })),
);
const Articles = lazy(() =>
  import('@/pages/articles').then((module) => ({ default: module.Articles })),
);
const NotFound = lazy(() =>
  import('@/pages/not-found').then((module) => ({ default: module.NotFound })),
);
const Project = lazy(() =>
  import('@/pages/project').then((module) => ({ default: module.Project })),
);
const Projects = lazy(() =>
  import('@/pages/projects').then((module) => ({ default: module.Projects })),
);
const Uses = lazy(() =>
  import('@/pages/uses').then((module) => ({ default: module.Uses })),
);

export const Router = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <Home />,
      index: true,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/articles',
      element: <Articles />,
    },
    {
      path: '/articles/:slug',
      element: <Article />,
    },
    {
      path: '/projects',
      element: <Projects />,
    },
    {
      path: '/projects/:slug',
      element: <Project />,
    },
    {
      path: '/uses',
      element: <Uses />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);
  return element as React.ReactElement;
};
