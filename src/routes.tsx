import { useRoutes } from 'react-router-dom';

import { About } from '@/pages/about';
import { Article } from '@/pages/article';
import { Articles } from '@/pages/articles';
import { Contact } from '@/pages/contact';
import { Home } from '@/pages/home';
import { NotFound } from '@/pages/not-found';
import { Project } from '@/pages/project';
import { Projects } from '@/pages/projects';
import { Uses } from '@/pages/uses';

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
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);
  return element as React.ReactElement;
};
