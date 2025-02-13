import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';
import backgroundImage from '../assets/images/img_0.jpg';

const InitialLandingPage = () => {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowText(false);
    }, 3000); // Hide text after 4 seconds
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="landing-container" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {showText ? (
        <> {/* Added fragment here */}
          <h1 className="fade-text">I developed this from scratch for you!</h1>
          <p>I Hope You Love It :)</p>
        </>
      ) : (
        <>
          <h1>Welcome Odysseus!!!</h1>
          <p>Let's make it more romantic for this day :)</p>
          <Link to="/landing">
            <button className="bounce-button">Click me, Ody!!!</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default InitialLandingPage;
