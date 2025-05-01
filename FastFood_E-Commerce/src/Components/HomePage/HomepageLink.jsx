import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HomePageLink = () => {
  const navigate = useNavigate();

  const workPage = () => {
    navigate("/lavora-con-noi");
  };

  const upPage = () => {
    navigate("/");
  };

  const novitaPage = () => {
    navigate("/novita");
  };

  const productPage = () => {
    navigate("/i-nostri-prodotti");
  };
  return (
    <Container>
      <div>
        <div className="row">
          <div className="col-6" onClick={upPage}>
            <div>
              <h3 className="h1 fw-bold">
                Ordina,Paga in App
                <br />e Ritira
                <br /> al Ristorante.
              </h3>
              <p className="h5">Da oggi basta con un click!</p>
            </div>
          </div>
          <div className="col-6" onClick={novitaPage}>
            <h3 className="h1 fw-bold">
              Scopri anche
              <br />
              le Nostre Offerte esclusive
              <br />
              Solo per Te
            </h3>
            <p className="h5"> Offerte colazione,pranzo e cena</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6" onClick={productPage}>
            <h3 className="h1 fw-bold">
              Tutta
              <br /> la nostra qualità
            </h3>
            <p className="h5">
              I nostri prodotti sono 100% italiani
              <br /> e i nostri partner lavorano con cura per maggiore qualità
            </p>
          </div>
          <div className="col-6" onClick={workPage}>
            <h3 className="h1 fw-bold">
              Vuoi far parte <br />
              del nostro Team?
            </h3>
            <p className="h5">
              La nostra famiglia si allarga <br /> Unisciti a Noi.
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </Container>
  );
};

export default HomePageLink;
