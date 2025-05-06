import { Container } from "react-bootstrap";
import nov1 from "../../assets/img/novita/novita1.png";
import nov2 from "../../assets/img/novita/novita2.png";
import nov3 from "../../assets/img/novita/novita3.png";
import nov4 from "../../assets/img/novita/novita4.png";
import { useNavigate } from "react-router-dom";

const NovitaComponent = () => {
  const navigate = useNavigate();

  const notFound = () => {
    navigate("*");
  };
  return (
    <Container className="mb-5">
      <div>
        <h1 className="display-3">Novità</h1>
      </div>
      <div>
        <div className="row">
          <div className="col-md-6 col-12" onClick={notFound}>
            <h3>I nostri Panini</h3>
            <img src={nov1} className="img-fluid" alt="novita1" />
          </div>
          <div className="col-md-6 col-12" onClick={notFound}>
            <h3>Prova le Sfiziosità</h3>
            <img src={nov2} className="img-fluid" alt="novita2" />
          </div>

          <div className="col-md-6 col-12" onClick={notFound}>
            <h3>Prova gli "Unlimited Edition"</h3>
            <img src={nov3} className="img-fluid" alt="novita3" />
          </div>
          <div className="col-md-6 col-12" onClick={notFound}>
            <h3>Altre offerte Fast&Tasty</h3>
            <img src={nov4} className="img-fluid" alt="novita2" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NovitaComponent;
