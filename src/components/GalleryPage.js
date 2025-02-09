import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/GalleryPage.css';
import backgroundVideo from '../assets/videos/video_2.mp4';
import img1 from '../assets/images/img_1.jpeg';
import img2 from '../assets/images/img_2.jpeg';

const GalleryPage = () => {
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
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h1>Odysseus is from Chongqing, China</h1>
      <p>His birthday is on 28 October</p>

      <div className="image-container">
        <img src={swap ? img2 : img1} alt="First" className="image" />
        <img src={swap ? img1 : img2} alt="Second" className="image" />
      </div>

      <Link to="/nextpage">
        <button className="bounce-button">Let's keep going!!</button>
      </Link>
    </div>
  );
};

export default GalleryPage;