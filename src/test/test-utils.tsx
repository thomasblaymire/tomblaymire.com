import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

interface RenderWithProvidersOptions extends Omit<RenderOptions, 'wrapper'> {
  route?: string;
  useMemoryRouter?: boolean;
}

/**
 * Custom render function that includes common providers
 */
export function renderWithProviders(
  ui: ReactElement,
  { route = '/', useMemoryRouter = false, ...options }: RenderWithProvidersOptions = {},
) {
  const Router = useMemoryRouter ? MemoryRouter : BrowserRouter;
  const routerProps = useMemoryRouter ? { initialEntries: [route] } : {};

  return render(ui, {
    wrapper: ({ children }) => <Router {...routerProps}>{children}</Router>,
    ...options,
  });
}

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
