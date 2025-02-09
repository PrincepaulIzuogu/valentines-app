import React, { useEffect, useRef } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import GalleryPage from './components/GalleryPage';
import NextGalleryPage from './components/NextGalleryPage';
import FinalGalleryPage from './components/FinalGalleryPage';
import CatGalleryPage from './components/CatGalleryPage';
import FirstMeetingPage from './components/FirstMeetingPage';
import FinalLovePage from './components/FinalLovePage';

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
        <Route path="/" element={<LandingPage />} />
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
