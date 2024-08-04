// src/__tests__/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App'; // Adjust the import based on your actual path

const user = {
  name: 'Liza',
  city: 'New York',
  color: 'firebrick',
  bio: 'I made this!',
  links: {
    github: 'https://github.com/liza',
    linkedin: 'https://www.linkedin.com/in/liza/'
  }
};

test('passes name, city, and color to <Home> as props', () => {
  render(<App />);
  const h1 = screen.getByText(`${user.name} is a Web Developer from ${user.city}`);
  expect(h1).toBeInTheDocument();
  expect(h1).toHaveStyle(`color: ${user.color}`);
});

test('passes bio to <About> as a prop', () => {
  render(<App />);
  const p = screen.getByText(user.bio);
  expect(p).toBeInTheDocument();
  expect(p.tagName).toEqual('P');
});

test('passes github link to <Links> as a prop, via <About>', () => {
  render(<App />);
  const [githubLink] = screen.getAllByText('GitHub');
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute('href', user.links.github);
});

test('passes linkedin link to <Links> as a prop, via <About>', () => {
  render(<App />);
  const [linkedinLink] = screen.getAllByText('LinkedIn');
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute('href', user.links.linkedin);
});
