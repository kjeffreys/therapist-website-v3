import React from 'react';
import './About.css';

const About: React.FC = () =>
{
  return (
    <div className="about-container">
      <div className="about-section">
        <h2>About Me</h2>
        <p>Hi, I’m Joanna Jeffreys. I’m a Licensed Mental Health Counselor (LMHC) and Licensed Professional Counselor (LPC) with over 5 years experience helping clients struggling with trauma, anxiety, and life transition.</p>
      </div>
      <div className="approach-section">
        <h2>My Approach</h2>
        <p>I want to join you in the highs and lows of your life. The great moments and the dark ones–they all belong in the therapy room. My style is warm, relaxed, and down-to-earth. You can expect compassion, understanding, and a focus on strengths and solutions, free of judgment or stigma. You bring the expertise on your own life, I’ll bring the clinical skills. Together, we can create radical change.</p>
      </div>
    </div>
  );
};

export default About;
