import { Container } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

const FooterComponent = () => {
  return (
    <div className="footerBack">
      <div className="pt-4">
        <div className="d-flex justify-content-center fs-3">
          <p className="fw-bold h4 me-2">Seguici su</p>
          <div className="d-flex" style={{ padding: "2px" }}>
            <div>
              <Icon.Instagram className="me-2"  />
            </div>
            <div>
              <Icon.Facebook className="me-2" />
            </div>
            <div>
              <Icon.TwitterX className="me-2" />
            </div>
            <div>
              <Icon.Youtube />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row pt-4 d-flex justify-content-evenly text-center">
          <div className="col-6 col-md-auto footerbtn rounded-pill">FAQ</div>
          <div className="col-6 col-md-auto footerbtn rounded-pill">
            Contattaci
          </div>
          <div className="col-6 col-md-auto footerbtn rounded-pill">
            La tua opinione conta
          </div>
          <div className="col-6 col-md-auto footerbtn rounded-pill">
            Regolamenti
          </div>
          <div className="col-6 col-md-auto footerbtn rounded-pill">
            Privacy
          </div>
          <div className="col-6 col-md-auto footerbtn rounded-pill">
            Cookies
          </div>
          <div className="col-6 col-md-auto footerbtn rounded-pill">
            Termini e Condizioni
          </div>
          <div className="col-6 col-md-auto footerbtn rounded-pill">
            Invia CV
          </div>
        </div>
      </div>
      <p className="text-center py-4">
        Copyright &copy; 2025 Fast&Tasty All rights reserved
      </p>
    </div>
  );
};

export default FooterComponent;
