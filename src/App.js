import React, { useEffect, useRef } from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
  const location = useLocation(); // Get current route for animations

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

    playAudio();

    return () => {
      audio.pause();
    };
  }, []);

  return (
    <Router>
      {/* Persistent background audio */}
      <audio ref={audioRef} autoPlay loop playsInline>
        <source src={backgroundAudio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Animated Page Transitions */}
      <TransitionGroup>
        <CSSTransition key={location.pathname} classNames="fade" timeout={500}>
          <Routes location={location}>
            <Route path="/" element={<InitialLandingPage />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/nextpage" element={<NextGalleryPage />} />
            <Route path="/finalpage" element={<FinalGalleryPage />} />
            <Route path="/nextpage6" element={<CatGalleryPage />} />
            <Route path="/firstmeet" element={<FirstMeetingPage />} />
            <Route path="/final-love" element={<FinalLovePage />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </Router>
  );
}

export default App;
