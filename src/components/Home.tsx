import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () =>
{
  return (
    <section className="home-section">
      <div className="hero">
        <img src={require('./hero.jpg')} alt="Hero" className="hero-image" />
        <Link to="/about" className="cta-button">
          Learn More
        </Link>
      </div>
      {/* Add your main landing page content here */}
    </section>
  );
};

export default Home;

