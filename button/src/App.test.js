import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);

  const button = screen.getByRole('button', {
    name: /change to blue/i,
  });

  expect(button).toHaveStyle({
    'background-color': 'red',
  });
});

test('button turns blue when clicked', () => {
  render(<App />);

  const button = screen.getByRole('button', {
    name: /change to blue/i,
  });

  fireEvent.click(button);

  expect(button).toHaveStyle({
    'background-color': 'blue',
  });

  expect(button).toHaveTextContent('Change to red');
});

test('button disables and re-enables on checkbox click', () => {
  render(<App />);

  const button = screen.getByRole('button', {
    name: /change to blue/i,
  });

  const checkbox = screen.getByRole('checkbox', {
    name: 'Disable button',
  });

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

test('when button is red and is disabled it turns to gray and the back to red on enabling', () => {
  render(<App />);

  const button = screen.getByRole('button', {
    name: /change to blue/i,
  });
  const checkbox = screen.getByRole('checkbox', {
    name: /disable button/i,
  });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ 'background-color': 'gray' });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ 'background-color': 'red' });
});

test('when button is blue and is disabled it turns to gray and the back to blue on enabling', () => {
  render(<App />);

  const button = screen.getByRole('button', {
    name: /change to blue/i,
  });
  const checkbox = screen.getByRole('checkbox', {
    name: /disable button/i,
  });

  fireEvent.click(button);
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ 'background-color': 'gray' });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ 'background-color': 'blue' });
});

describe('initial conditions', () => {
  test('button starts enabled', () => {
    render(<App />);

    const button = screen.getByRole('button', {
      name: /change to blue/i,
    });

    expect(button).toBeEnabled();
  });

  test('checkbox starts unchecked', () => {
    render(<App />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).not.toBeChecked();
  });
});
