// src/__tests__/About.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Optional if setupTests.js is correctly configured
import About from '../components/About';

const user = {
  links: {
    github: 'https://github.com/liza',
    linkedin: 'https://www.linkedin.com/in/liza/'
  }
};

test('renders a <p> element with the bio from props', () => {
  render(<About bio="I made this" links={user.links} />);
  const bioElement = screen.getByTestId('bio');
  expect(bioElement).toBeInTheDocument();
  expect(bioElement.tagName).toBe('P'); // Ensure it's a <p> element
});

test('does not render a <p> element if the bio is not included in props', () => {
  render(<About links={user.links} />);
  const bioElement = screen.queryByTestId('bio');
  expect(bioElement).toBeNull(); // Ensure <p> is not present
});

test('does not render a <p> element if the bio is an empty string', () => {
  render(<About bio="" links={user.links} />);
  const bioElement = screen.queryByTestId('bio');
  expect(bioElement).toBeNull(); // Ensure <p> is not present
});

