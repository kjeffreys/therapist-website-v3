import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () =>
{
  const heroImage = useMemo(() => require('../img/hero.jpg'), []);

  return (
    <section className="home-section">
      <div className="hero">
        <img src={heroImage} alt="Hero" className="hero-image" />
        <Link to="/about" className="cta-button">
          Learn More
        </Link>
      </div>
      {/* Add your main landing page content here */}
    </section>
  );
};

export default Home;

