import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/GalleryPage.css';
import backgroundVideo from '../assets/videos/video_5.mp4';
import img9 from '../assets/images/img_9.jpg';
import img10 from '../assets/images/img_10.jpeg';

const FirstMeetingPage = () => {
  const [swap, setSwap] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSwap(prev => !prev);
    }, 2000); // Swap every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="gallery-container">
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

      <h1>I Met Odysseus for the First Time on Nov. 09 2024</h1>
      <p>He was a little shy! Hahaha!!!</p>

      <div className="image-container">
        <img src={swap ? img10 : img9} alt="First" className="image" />
        <img src={swap ? img9 : img10} alt="Second" className="image" />
      </div>

      <Link to="/final-love">
        <button className="bounce-button">Almost there Ody!!!</button>
      </Link>
    </div>
  );
};

export default FirstMeetingPage;
