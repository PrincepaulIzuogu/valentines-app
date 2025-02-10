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

      {/* Ensure Page Transitions Work Correctly */}
      <AnimatedRoutes />
    </Router>
  );
}

function AnimatedRoutes() {
  const location = useLocation(); // Now properly wrapped inside Router

  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} classNames="fade" timeout={500}>
        <div className="page"> {/* WRAP PAGE CONTENT TO AVOID WHITE SCREEN */}
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
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
