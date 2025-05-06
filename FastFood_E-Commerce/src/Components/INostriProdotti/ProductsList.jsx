import { Container, Col, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Prdt1 from "../../assets/img/Product1.png";
import Prdt2 from "../../assets/img/Product2.png";
import Prdt3 from "../../assets/img/Product3.png";
import Prdt4 from "../../assets/img/Product4.png";
import Prdt5 from "../../assets/img/Product5.png";
import Prdt6 from "../../assets/img/Product6.png";

const ProductsList = () => {
  const location = useLocation();
  return (
    <Container className="stickyComponent">
      <div>
        <h2>I Nostri Prodotti</h2>
      </div>
      <Row>
        <Col xs={12} md={2}>
          <Link
            to="menu"
            className={
              location.pathname.includes("menu")
                ? "nav-link active"
                : "nav-link"
            }
          >
            Menu
            <img src={Prdt2} style={{ width: "5rem" }}></img>
          </Link>
        </Col>
        <Col xs={12} md={2}>
          <Link
            to="panini"
            className={
              location.pathname.includes("panini")
                ? "nav-link active"
                : "nav-link"
            }
          >
            Panini
            <img src={Prdt1} style={{ width: "5rem" }}></img>
          </Link>
        </Col>

        <Col sm={2}>
          <Link
            to="bevande"
            className={
              location.pathname.includes("bevande")
                ? "nav-link active"
                : "nav-link"
            }
          >
            Bevande
            <img src={Prdt3} style={{ width: "5rem" }}></img>
          </Link>
        </Col>
        <Col xs={12} md={2}>
          <Link
            to="gelati"
            className={
              location.pathname.includes("gelati")
                ? "nav-link active"
                : "nav-link"
            }
          >
            Gelati
            <img src={Prdt4} style={{ width: "5rem" }}></img>
          </Link>
        </Col>

        <Col xs={12} md={2}>
          <Link
            to="patatine"
            className={
              location.pathname.includes("patatine")
                ? "nav-link active"
                : "nav-link"
            }
          >
            Patatine
            <img src={Prdt5} style={{ width: "5rem" }}></img>
          </Link>
        </Col>
        <Col xs={12} md={2}>
          <Link
            to="salse"
            className={
              location.pathname.includes("salse")
                ? "nav-link active"
                : "nav-link"
            }
          >
            Salse
            <img src={Prdt6} style={{ width: "5rem" }}></img>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductsList;
