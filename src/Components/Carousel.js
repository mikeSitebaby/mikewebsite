import MikeImage1 from '../Images/MikePinkGreen.png';
import MikeImage2 from '../Images/MikeMirror.png';
import './Carousel.css';

export default function Carousel() {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img  src={MikeImage1} className="d-block w-100 carousel-image" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img  src={MikeImage2} className="d-block w-100 carousel-image" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img  src={MikeImage1} className="d-block w-100 carousel-image" alt="Slide 3" />
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
}
