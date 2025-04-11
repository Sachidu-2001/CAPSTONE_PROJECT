import * as Icon from "react-bootstrap-icons";

const FooterComponent = () => {
  return (
    <div className="footerBack">
      <div className="pt-4">
        <div className="d-flex justify-content-center fs-3">
          <h6 className="fw-bold h4 me-2">Seguici su</h6>

          <Icon.Instagram className="me-2" />
          <Icon.Facebook className="me-2" />
          <Icon.TwitterX className="me-2" />
          <Icon.Youtube />
        </div>
      </div>
      <div className="d-flex justify-content-evenly pt-4">
        <h6>FAQ</h6>
        <h6>Contattaci</h6>
        <h6>La tua opinione conta</h6>
        <h6>Regolamenti</h6>
        <h6>Privacy</h6>
        <h6>Cookies</h6>
        <h6>Termini e Condizioni</h6>
        <h6>Invia CV</h6>
      </div>
      <h6 className="text-center py-4">
        Copyright &copy; 2025 McDonald's All rights reserved
      </h6>
    </div>
  );
};

export default FooterComponent;
