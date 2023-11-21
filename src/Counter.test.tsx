import { fireEvent, render, screen } from '@testing-library/react';
import ExternalStoreSecond from './Components/ExternalStore/secondEx';
import { container } from 'tsyringe';

const context = describe;

test('Counter', () => {
  render(<ExternalStoreSecond />);
});

describe('ExternalStore2', () => {
  beforeEach(() => {
    container.clearInstances();
  });

  context('when press increase button once', () => {
    test('counter', () => {
      render(<ExternalStoreSecond />);

      fireEvent.click(screen.getByText('Increase'));

      const elements = screen.getAllByText('count: 1');

      expect(elements).toHaveLength(2);
    });
  });

  context('when press increase button twice', () => {
    test('counter', () => {
      render(<ExternalStoreSecond />);

      fireEvent.click(screen.getByText('Increase'));
      fireEvent.click(screen.getByText('Increase'));

      const elements = screen.getAllByText('count: 2');
      expect(elements).toHaveLength(2);
    });
  });
});
