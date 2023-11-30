/* eslint-disable @typescript-eslint/no-unused-vars */
import { render, screen } from '@testing-library/react';

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

  context('when the current path is location', () => {
    it('renders the location page', () => {
      renderRouter('home');

      screen.getByText(/Welcome!/);
    });
  });

  context('when the current path is location/about', () => {
    it('renders the location/about page', () => {
      renderRouter('about');

      screen.getByText(/This is test/);
    });
  });
});
