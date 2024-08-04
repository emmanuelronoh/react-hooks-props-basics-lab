import React from 'react';

function Home({ name, city, color }) {
  return (
    <div>
      <h1 style={{ color }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;

