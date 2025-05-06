import { Container } from "react-bootstrap";
import notFoundImg from "../../assets/img/notfoundimg/ntfd.png";

const NotFoundComponent = () => {
  return (
    <>
      <Container>
        <h1>Errore 404- Pagina Non Trovata</h1>

        <div className="d-flex flex-column align-items-center">
          <img src={notFoundImg} alt="notFoundImg" style={{ width: "20em" }} />
          <h3>
            La pagina non è stata creata perchè...<br></br> Il programmatore era
            troppo pigro
          </h3>
        </div>
      </Container>
    </>
  );
};

export default NotFoundComponent;
