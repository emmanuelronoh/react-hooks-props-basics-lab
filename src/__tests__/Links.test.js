// src/__tests__/Links.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Links from '../components/Links'; // Adjust the import based on your actual path

const links = {
  github: 'https://github.com/liza',
  linkedin: 'https://www.linkedin.com/in/liza/'
};

test('renders the h3 with the text "Links"', () => {
  render(<Links links={links} />);
  expect(screen.getByText('Links')).toBeInTheDocument();
});

test('renders the GitHub and LinkedIn links', () => {
  render(<Links links={links} />);
  const [githubLink, linkedinLink] = screen.getAllByText(/GitHub|LinkedIn/);

  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute('href', links.github);

  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute('href', links.linkedin);
});
