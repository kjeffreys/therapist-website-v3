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
      {/* Main landing page content */}
      <div className="main-content">
        <h1>Thank you for visiting Joanna Jeffreys, LMHC</h1>
        <p className="subtitle">
          Providing compassionate counseling for a healthier mind and happier life
        </p>

        <div className="resources-section">
          <h2>Resources</h2>
          <p>
            At Joanna Jeffreys, LMHC, we believe in providing comprehensive mental health resources. Browse through our collection of articles, guides, and recommendations to enhance your mental wellness.
          </p>
          <p>
            Whether you're seeking information on coping strategies, self-care practices, or mental health awareness, we have resources to support you every step of the way.
          </p>
          {/* Provide cta button to resources page */}
          {/* Removing for now to defer styling until later */}
          {/*
          <Link to="/resources" className="cta-button">
            Discover Resources
          </Link>
          */}
        </div>

        <div className="services-section">
          <h2>Services</h2>
          <p>
            Joanna Jeffreys, LMHC offers a range of counseling services tailored to meet your unique needs. Whether you're struggling with trauma, anxiety, or general life problems, Joanna is here to help.
          </p>
          <p>
            Her areas of expertise include EMDR, behavioral cognitive therapy, intuitive eating, and mindfulness. With years of experience, Joanna is dedicated to supporting your mental health journey.
          </p>
          {/* Provide cta button to services page */}
          {/* Removing for now to defer styling until later */}
          {/*
          <Link to="/services" className="cta-button">
            Explore Services
          </Link>
          */}
        </div>

        <div className="about-section">
          <h2>About Joanna Jeffreys, LMHC</h2>
          <p>
            Joanna Jeffreys is a licensed mental health counselor with 5 years of experience. She holds a master's degree in mental health counseling from Marist University.
          </p>
          <p>
            Joanna provides counseling services to clients in New York and Virginia. Whether you prefer in-person sessions or the convenience of telehealth, Joanna is committed to creating a safe and supportive environment for your therapeutic journey.
          </p>
          {/* Provide cta button to About page */}
          {/* Removing for now to defer styling until later */}
          {/*
          <Link to="/about" className="cta-button">
            Learn More About Joanna
          </Link>
          */}
        </div>
      </div>
    </section>
  );
};

export default Home;

