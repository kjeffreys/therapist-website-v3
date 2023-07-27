import React, { useMemo } from 'react';
import './Services.css';

const Services: React.FC = () =>
{
  const icImg = useMemo(() => require('../img/ic.jpg'), []);
  const emdrImg = useMemo(() => require('../img/emdr.jpg'), []);
  const ieImg = useMemo(() => require('../img/ie.jpg'), []);

  return (
    <div>
      <h1>Services</h1>
      <div className="services-container">
        <div className="service">
          <h2>Individual Counseling</h2>
          <div className="img-wrapper">
            <img src={icImg} alt="Individual Counseling" />
          </div>
          <p>Individual talk therapy might be what first comes to your mind when you think of therapy. You talk, I listen and offer support, feedback, and interventions. Talk therapy is an opportunity to get to know yourself better–your story, your needs, strengths, and areas for growth. I tend to focus interventions on self-compassion, boundaries, distress tolerance, and mindfulness.</p>
        </div>
        <div className="service">
          <h2>EMDR</h2>
          <div className="img-wrapper">
            <img src={emdrImg} alt="EMDR" />
          </div>
          <p>You deserve to heal from trauma. Using the EMDR framework, we will identify trauma-related symptoms, desensitize trauma reactions through reprocessing traumatic memories, and empower you to respond differently to trauma triggers in the future. By engaging with your trauma in a safe, supportive, structured environment, you can not only heal old wounds, but find move forward into the thriving part of your life.</p>
        </div>
        <div className="service">
          <h2>Intuitive Eating</h2>
          <div className="img-wrapper">
            <img src={ieImg} alt="Intuitive Eating" />
          </div>
          <p>I believe in food freedom. Intuitive Eating is all about honoring and accepting your body. Over time, we learn toxic messages around diet culture and body shaming, which can eventually present as self-consciousness or disordered eating. I am a certified IE coach and can help you cultivate a peaceful relationship with your mind, body, and food!</p>
        </div>
        <div className="service">
          <h2>Supervision</h2>
          <div className="img-wrapper">
            <img src={icImg} alt="Supervision" />
          </div>
          <p>Supervision is a valuable tool in any clinician's toolbox. In addition to occasionally feeling “stuck” clinically, our own “stuff”--countertransference, triggers, and vicarious trauma, can come into play in the therapy room. Supervision provides an outlet to release that tension, and gain valuable insight around case conceptualization and personal process. Please contact me to discuss availability and rates!</p>
        </div>
        <div className="service">
          <h2>Telehealth</h2>
          <div className="img-wrapper">
            <img src={icImg} alt="Telehealth" />
          </div>
          <p>I primarily offer telehealth services via secure Zoom video calls. If you are located in NY, sessions will exclusively be held remotely. Telehealth offers many benefits, including ability to meet in the safe, comfortable place of your choice, flexible scheduling</p>
          <p><b>NOTE:</b> Due to licensure laws, you <em>MUST</em> be located in either New York or Virginia (my states of licensure) at the time of session for us to meet. If you are not located in one of these states, the session cannot legally be held.</p>
        </div>
        <div className="service">
          <h2>In-person</h2>
          <div className="img-wrapper">
            <img src={icImg} alt="In-person" />
          </div>
          <p>I offer in-person services for clients located in the Lynchburg, VA area. Please send me an email to inquire about in-office availability!</p>
        </div>
        <div className="service">
          <h2>Payment</h2>
          <div className="img-wrapper">
            <img src={icImg} alt="Payment" />
          </div>
          <h3>I accept the following insurance:</h3>
          <ul>
            <li>Aetna</li>
            <li>BlueCross BlueShield</li>
            <li>Cigna/Evernorth</li>
            <li>Oscar Health</li>
            <li>Oxford</li>
            <li>United Healthcare</li>
            <li>Sliding scale for self-pay clients available upon request</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
