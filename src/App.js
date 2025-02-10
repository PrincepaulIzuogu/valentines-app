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
  );
};

export default LandingPage



import React, { useEffect, useRef } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import GalleryPage from './components/GalleryPage';
import NextGalleryPage from './components/NextGalleryPage';
import FinalGalleryPage from './components/FinalGalleryPage';
import CatGalleryPage from './components/CatGalleryPage';
import FirstMeetingPage from './components/FirstMeetingPage';
import FinalLovePage from './components/FinalLovePage';
import InitialLandingPage from './components/InitialLandingPage';

import backgroundAudio from './assets/audios/audio_1.mp3';

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    audio.volume = 0.5;

    const playAudio = async () => {
      try {
        await audio.play();
      } catch (error) {
        console.log("Autoplay blocked. Retrying in 2 seconds...");
        setTimeout(playAudio, 2000); // Retry after 2 seconds if blocked
      }
    };

    playAudio(); // Try playing the audio on load

    return () => {
      audio.pause();
    };
  }, []);

  return (
    <Router>
      {/* Hidden audio element that stays persistent */}
      <audio ref={audioRef} autoPlay loop playsInline>
        <source src={backgroundAudio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <Routes>
        <Route path="/" element={<InitialLandingPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/nextpage" element={<NextGalleryPage />} />
        <Route path="/finalpage" element={<FinalGalleryPage />} />
        <Route path="/nextpage6" element={<CatGalleryPage />} />
        <Route path="/firstmeet" element={<FirstMeetingPage />} />
        <Route path="/final-love" element={<FinalLovePage />} />
      </Routes>
    </Router>
  );
}

export default App;
