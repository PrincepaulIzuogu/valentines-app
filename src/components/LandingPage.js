import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';
import backgroundVideo from '../assets/videos/video_1.mp4';

const LandingPage = () => {
  useEffect(() => {
    console.log("Video path:", backgroundVideo);
  }, []);

  return (
    <div className="landing-container">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video" id="bg-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h1>Does prince know Odysseus so well?</h1>
      <p>Come on, let's find out!!</p>
      <Link to="/gallery">
        <button className="bounce-button">Click me, Odysseus!</button>
      </Link>
    </div>
  );
};

export default LandingPage;
