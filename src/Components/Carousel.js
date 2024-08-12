import React, { useState, useEffect } from 'react';
import MikeImage1 from '../Images/MikePinkGreen.png';
import MikeImage2 from '../Images/MikeConducting.png';
import MikeImage3 from '../Images/MichaelCobb-36.jpg';
import MikeCrop from '../Images/MikeConductCrop.png';
import './Carousel.css';

const Carousel = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const displayImage = windowWidth < 760 ? MikeCrop : MikeImage2;

  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={displayImage} className="d-block w-100 carousel-image" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src={MikeImage1} className="d-block w-100 carousel-image" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src={MikeImage3} className="d-block w-100 carousel-image" alt="Slide 3" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </a>
    </div>
  );
};

export default Carousel;

