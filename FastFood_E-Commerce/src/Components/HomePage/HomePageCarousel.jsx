import { Carousel } from "react-bootstrap";

const HomePageCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={300}>
        <h2>Prima Pagina</h2>
      </Carousel.Item>
      <Carousel.Item interval={300}>
        <h2>Seconda Pagina</h2>
      </Carousel.Item>
      <Carousel.Item interval={300}></Carousel.Item>
      <Carousel.Item interval={300}></Carousel.Item>
    </Carousel>
  );
};

export default HomePageCarousel;
