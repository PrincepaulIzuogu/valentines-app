import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';
import backgroundVideo from '../assets/videos/video_1.mp4';
import backgroundAudio from '../assets/audios/audio_1.mp3';

const LandingPage = () => {
  const audioRef = React.useRef(null);

  useEffect(() => {
    console.log("Video path:", backgroundVideo);
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(error => console.log("Autoplay blocked. Waiting for user interaction."));
    }
  }, []);

  return (
    <div className="landing-container">
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

      {/* Background Audio */}
      <audio ref={audioRef} loop>
        <source src={backgroundAudio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div className="main-content">
        <h1>Does prince know Odysseus so well?</h1>
        <p>Come on, let's find out!!</p>
        <Link to="/gallery">
          <button className="bounce-button">Click me, Odysseus!</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
