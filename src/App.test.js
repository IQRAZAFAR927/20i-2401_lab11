import { render, screen } from '@testing-library/react';
import App from './App';

//task3
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toHaveTextContent("Hello World");

});
