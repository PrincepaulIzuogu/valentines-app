import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';
import backgroundVideo from '../assets/videos/video_1.mp4';
import backgroundImage from '../assets/images/img_0.jpg';
import backgroundAudio from '../assets/audios/audio_1.mp3';

const LandingPage = () => {
  const [showIntro, setShowIntro] = useState(true);
  const audioRef = React.useRef(null);

  useEffect(() => {
    console.log("Video path:", backgroundVideo);
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  const startExperience = () => {
    setShowIntro(false);
    if (audioRef.current) {
      audioRef.current.play().catch(error => console.log("Autoplay blocked. Waiting for user interaction."));
    }
  };

  return (
    <div className="landing-container">
      {showIntro ? (
        <div className="intro-section" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <h1>Welcome Odysseus :)</h1>
          <p>I developed this site from scratch just for you</p>
          <h1>Let's make it more romantic for this day :)</h1>
          <button className="bounce-button" onClick={startExperience}>Click me, Ody!!!</button>
        </div>
      ) : (
        <div className="main-content">
          {/* Background Video */}
          <video 
        autoPlay 
        loop 
        muted 
        className="background-video" 
        playsInline /* Prevents fullscreen mode */ 
        preload="auto" /* Ensures video loads early */ 
        disablePictureInPicture /* Stops PiP mode */ 
        disableRemotePlayback /* Prevents external playback */
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
          <h1>Does prince know Odysseus so well?</h1>
          <p>Come on, let's find out!!</p>
          <Link to="/gallery">
            <button className="bounce-button">Click me, Odysseus!</button>
          </Link>
        </div>
      )}

      {/* Background Audio */}
      <audio ref={audioRef} loop>
        <source src={backgroundAudio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default LandingPage;
