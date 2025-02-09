import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/GalleryPage.css';
import backgroundVideo from '../assets/videos/video_3.mp4';
import img5 from '../assets/images/img_5.jpeg';
import img6 from '../assets/images/img_6.jpeg';

const FinalGalleryPage = () => {
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

      <h1>Odysseus is so beautiful and sweet</h1>
      <p>My heart melts when I'm with him :)</p>

      <div className="image-container">
        <img src={swap ? img6 : img5} alt="First" className="image" />
        <img src={swap ? img5 : img6} alt="Second" className="image" />
      </div>

      <Link to="/nextpage6">
        <button className="bounce-button">Let's go Ody!!</button>
      </Link>
    </div>
  );
};

export default FinalGalleryPage;
