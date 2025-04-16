import { Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Prdt1 from "../../assets/img/Product1.jpg";
import Prdt2 from "../../assets/img/Product2.png";
import Prdt3 from "../../assets/img/Product3.png";
import Prdt4 from "../../assets/img/Product4.jpg";
import Prdt5 from "../../assets/img/Product5.jpg";
import Prdt6 from "../../assets/img/Product6.jpg";

const ProductsList = () => {
  const location = useLocation();
  return (
    <Container>
      <div>
        <h2>I Nostri Prodotti</h2>
      </div>
      <div className="d-flex justify-content-between">
        <div>
          <Link
            to="menu"
            className={
              location.pathname.includes("menu")
                ? "nav-link active"
                : "nav-link"
            }
          >
            Menu
          </Link>
          <img src={Prdt1} style={{ width: "30em", height: "20em" }}></img>
        </div>
        <div>
          <Link
            to="/panini"
            className={
              location.pathname === "/panini" ? "nav-link active" : "nav-link"
            }
          >
            Panini
          </Link>
          <img src={Prdt2} style={{ width: "30em", height: "20em" }}></img>
        </div>
      </div>
      <div className="d-flex justify-content-between ">
        <div>
          <Link
            to="/bevande"
            className={
              location.pathname === "/bevande" ? "nav-link active" : "nav-link"
            }
          >
            Bevande
          </Link>
          <img src={Prdt3} style={{ width: "30em", height: "20em" }}></img>
        </div>
        <div>
          <Link
            to="/gelati"
            className={
              location.pathname === "/gelati" ? "nav-link active" : "nav-link"
            }
          >
            Gelati e Dessert
          </Link>
          <img src={Prdt4} style={{ width: "30em", height: "20em" }}></img>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div>
          <Link
            to="/patatine"
            className={
              location.pathname === "/patatine" ? "nav-link active" : "nav-link"
            }
          >
            Patatine
          </Link>
          <img src={Prdt5} style={{ width: "30em", height: "20em" }}></img>
        </div>
        <div>
          <Link
            to="/salse"
            className={
              location.pathname === "/salse" ? "nav-link active" : "nav-link"
            }
          >
            Salse
            <img src={Prdt6} style={{ width: "30em", height: "20em" }}></img>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default ProductsList;
