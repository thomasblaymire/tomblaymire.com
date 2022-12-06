import { useRoutes } from 'react-router-dom';

import { About } from '@/pages/about';
import { Articles } from '@/pages/articles';
import { Contact } from '@/pages/contact';
import { Home } from '@/pages/home';
import { NotFound } from '@/pages/not-found';
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
      path: '/projects',
      element: <Projects />,
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