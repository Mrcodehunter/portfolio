import { render, screen } from '@testing-library/react';

jest.mock(
  "react-router-dom",
  () => ({
    BrowserRouter: ({ children }) => <div data-testid="router">{children}</div>,
    // Keep routing components inert for this smoke test; we only care that App mounts.
    Routes: () => null,
    Route: () => null,
  }),
  { virtual: true }
);

import App from './App';

test('renders navbar brand', () => {
  render(<App />);
  expect(screen.getByText(/Murad Hossen/i)).toBeInTheDocument();
});
