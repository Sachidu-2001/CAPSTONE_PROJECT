import { Carousel } from "react-bootstrap";
import car1 from "../../assets/img/carousel/carousel_img_1.png";
import car2 from "../../assets/img/carousel/carousel_img_2.png";
import car3 from "../../assets/img/carousel/carousel_img_31.png";
import car4 from "../../assets/img/carousel/carousel_img_4.png";

const HomePageCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={700}>
        <img className="d-block w-100 imgCar" src={car1} alt="Carouselimg1" />
        <Carousel.Caption className="carouselCap text-start container workShadow">
          <h3 className="display-3">
            Hai già provato <br></br> la nostra salsa
          </h3>
          <p className="h2">Prova il nuovo Double Chicken Devil</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={700}>
        <img className="d-block w-100 imgCar" src={car2} alt="Carouselimg2" />
        <Carousel.Caption className="carouselCap text-start container workShadow">
          <h3 className="display-3">
            Un posto dove<br></br> mangiare in compagnia
          </h3>
          <p className="h2">Da noi ti sentirai a casa.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={700}>
        <img className="d-block w-100 imgCar" src={car3} alt="Carouselimg3" />
        <Carousel.Caption className="carouselCap text-start container workShadow">
          <h3 className="display-3">Siamo aperti fino tardi</h3>
          <p className="h2">Vieni a gustarti il Menù notturno.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={700}>
        <img className="d-block w-100 imgCar" src={car4} alt="Carouselimg4" />
        <Carousel.Caption className="carouselCap text-start container workShadow">
          <h3 className="display-3">
            Pronto a farti<br></br> avvolgere da un gusto<br></br> Esplosivo
          </h3>
          <p className="h2">Prova il nuovo WrapBeef.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomePageCarousel;
