import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/react/user-event';
import App from './App';

test('The header renders with the correct text', () => {
  render(<App />);
  const headerEl = screen.getByRole('heading')
  expect(headerEl.textContent).toBe('Test App')

 /*  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument(); */
});

text("button changes color when clicked", () => {
  render(<App />)
  const colorBtn = screen.getByRole('button')

  userEvent.click(colorBtn)

  expect(colorBtn).toHaveStyle({backgroundColor: 'blue'})
  expect(colorBtn.textContent).toBe("Change button color to green")
})