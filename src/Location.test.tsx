import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

const context = describe;

describe('LoactionRoutes', () => {
  context('when the current path is location', () => {
    it('renders the location page', () => {
      render(
        <MemoryRouter initialEntries={['/location']}>
          <App />
        </MemoryRouter>,
      );

      screen.getByText(/Welcome!/);
    });
  });

  context('when the current path is location/about', () => {
    it('renders the location/about page', () => {
      render(
        <MemoryRouter initialEntries={['/location/about']}>
          <App />
        </MemoryRouter>,
      );

      screen.getByText(/This is test/);
    });
  });
});
