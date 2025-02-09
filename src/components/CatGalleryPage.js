import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/GalleryPage.css';
import backgroundVideo from '../assets/videos/video_2.mp4';
import img7 from '../assets/images/img_7.jpeg';
import img8 from '../assets/images/img_8.jpeg';

const CatGalleryPage = () => {
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

      <h1>Odysseus loves his cat</h1>
      <p>But she is in China with his grandparents :)</p>

      <div className="image-container">
        <img src={swap ? img8 : img7} alt="First" className="image" />
        <img src={swap ? img7 : img8} alt="Second" className="image" />
      </div>

      <Link to="/firstmeet">
        <button className="bounce-button">More Ody! More!!</button>
      </Link>
    </div>
  );
};

export default CatGalleryPage;
