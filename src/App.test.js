import { render, screen } from '@testing-library/react';
import App from './App';

test('The header renders with the correct text', () => {
  render(<App />);
  const headerEl = screen.getByRole('heading')
  expect(headerEl.textContent).toBe('Test App')
 /*  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument(); */
});
