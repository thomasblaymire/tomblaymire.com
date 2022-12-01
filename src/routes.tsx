import { useRoutes } from 'react-router-dom';

import { Home } from '@/pages/home';

const Router = () => {
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
      element: <About />,
    },
    {
      path: '/users',
      element: <About />,
    },
    {
      path: '/contact',
      element: <About />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);
  return element as React.ReactElement;
};

export { Router };
