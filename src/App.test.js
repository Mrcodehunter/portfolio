import { render, screen } from '@testing-library/react';

jest.mock(
  "react-router-dom",
  () => ({
    BrowserRouter: ({ children }) => <div data-testid="router">{children}</div>,
    Routes: ({ children }) => <div>{children}</div>,
    Route: ({ element }) => element,
  }),
  { virtual: true }
);

import App from './App';

test('renders navbar brand', () => {
  render(<App />);
  expect(screen.getByText(/Murad Hossen/i)).toBeInTheDocument();
});
