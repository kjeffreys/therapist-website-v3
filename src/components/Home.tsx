import React from 'react';
import './Home.css'; // Create a new CSS file for Home component styles

const Home: React.FC = () => {
  return (
    <section className="home-section">
      <div className="hero">
        <img src={require('./hero.jpg')} alt="Hero" className="hero-image" />
        <h1 className="hero-title">Joanna Jeffreys, LHMC</h1>
      </div>
      {/* Add your main landing page content here */}
    </section>
  );
};

export default Home;

