// src/components/About.js
import React from 'react';

function About({ bio, links }) {
  return (
    <div>
      {bio && <p data-testid="bio">{bio}</p>}
      {links && (
        <div>
          <a href={links.github}>GitHub</a>
          <a href={links.linkedin}>LinkedIn</a>
        </div>
      )}
    </div>
  );
}

export default About;

