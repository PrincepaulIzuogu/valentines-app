import React from 'react';
import '../styles/GalleryPage.css';
import backgroundVideo from '../assets/videos/video_6.mp4';
import img11 from '../assets/images/img_12.jpg';

const FinalLovePage = () => {
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

      <h1>I LOVE YOU ODY!!!</h1>
      <p>Happy Valentine’s Day From Prince!!!</p>

      <div className="image-container single-image">
        <img src={img11} alt="Love" className="image" />
      </div>
    </div>
  );
};

export default FinalLovePage;
