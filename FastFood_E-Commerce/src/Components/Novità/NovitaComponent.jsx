import { Container } from "react-bootstrap";
import nov1 from "../../assets/img/novita1.avif";
import nov2 from "../../assets/img/novita2.avif";
import nov3 from "../../assets/img/novita3.jpeg";
import nov4 from "../../assets/img/novita4.webp";

const NovitaComponent = () => {
  return (
    <Container className="mb-5">
      <div>
        <h1 className="display-3">Novità</h1>
      </div>
      <div>
        <div className="row">
          <div className="col-6">
            <h3>Panini Buoni</h3>
            <img
              src={nov1}
              alt="novita1"
              style={{ width: "500px", height: "300px" }}
            />
          </div>
          <div className="col-6">
            <h3>Nuggets</h3>
            <img
              src={nov2}
              alt="novita2"
              style={{ width: "500px", height: "300px" }}
            />
          </div>
        </div>
        <div className="mt-5">
          <div className="row">
            <div className="col-6">
              <h3>I nostri giochi</h3>
              <img
                src={nov3}
                alt="novita3"
                style={{ width: "500px", height: "300px" }}
              />
            </div>
            <div className="col-6">
              <h3>Altre offerte da Scoprire</h3>
              <img
                src={nov4}
                alt="novita2"
                style={{ width: "500px", height: "300px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NovitaComponent;
