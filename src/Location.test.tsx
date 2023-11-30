import { render } from '@testing-library/react';

import Home from './Components/Location/pages/Home';
import About from './Components/Location/pages/About';

const context = describe;

describe('locationTest', () => {
  context('pathname', () => {
    it('return ', () => {
      render(<About />);
    });
  });
});

describe('locationTest', () => {
  context('pathname', () => {
    it('return ', () => {
      render(<Home />);
    });
  });
});
