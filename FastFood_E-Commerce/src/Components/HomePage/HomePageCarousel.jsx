import { Carousel } from "react-bootstrap";
import ham1 from "../../assets/img/ham_carousel.jpg";
import ham2 from "../../assets/img/hamImg.jpg";
import ham3 from "../../assets/img/hamImg2.jpg";
import ham4 from "../../assets/img/hamImg3.webp";

const HomePageCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={700}>
        <img className="d-block w-100 imgCar" src={ham1} alt="Carouselimg1" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={700}>
        <img className="d-block w-100 imgCar" src={ham2} alt="Carouselimg1" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={700}>
        <img className="d-block w-100 imgCar" src={ham3} alt="Carouselimg1" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={700}>
        <img className="d-block w-100 imgCar" src={ham4} alt="Carouselimg1" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomePageCarousel;
