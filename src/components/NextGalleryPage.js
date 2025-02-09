import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/GalleryPage.css';
import backgroundVideo from '../assets/videos/video_5.mp4';
import img3 from '../assets/images/img_3.jpeg';
import img4 from '../assets/images/img_4.jpeg';

const NextGalleryPage = () => {
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

      <h1>Odysseus loves Metal music alot</h1>
      <p>He loves spicy noodles a lot too :)</p>

      <div className="image-container">
        <img src={swap ? img4 : img3} alt="First" className="image" />
        <img src={swap ? img3 : img4} alt="Second" className="image" />
      </div>

      <Link to="/finalpage">
        <button className="bounce-button">Fun? Click for more!!</button>
      </Link>
    </div>
  );
};

export default NextGalleryPage;
