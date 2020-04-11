import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    value: jest.fn(() => {
      return {
        matches: true,
        addListener: jest.fn(),
        removeListener: jest.fn()
      };
    })
  });
});

it('renders react message', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/react/i);
  expect(textElement).toBeInTheDocument();
});

it('renders Home component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
