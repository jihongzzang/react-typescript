/* eslint-disable @typescript-eslint/no-unused-vars */

import { render, screen, waitFor } from '@testing-library/react';

import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import routes from './Components/Location/components/routes';

const context = describe;

describe('LoactionRoutes', () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, {
      initialEntries: [`/${path}`],
    });
    render(<RouterProvider router={router} />);
  }

  context('when the current path is home', () => {
    it('renders the home page', () => {
      renderRouter('home');

      screen.getByText(/Welcome!/);
    });
  });

  context('when the current path is about', () => {
    it('renders the about page', () => {
      renderRouter('about');

      screen.getByText(/This is test/);
    });
  });

  context('when the current path is logout', () => {
    it('redirects to the bye page', async () => {
      renderRouter('logout');

      screen.getByText(/...남은시간/);

      await waitFor(
        () => {
          expect(screen.getByText(/로그아웃/)).toBeInTheDocument();
        },
        { timeout: 4000 },
      );
    });
  });
});
