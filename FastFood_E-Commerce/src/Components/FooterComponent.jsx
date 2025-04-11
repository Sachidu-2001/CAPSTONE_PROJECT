import * as Icon from "react-bootstrap-icons";

const FooterComponent = () => {
  return (
    <>
      <div>
        <div className="d-flex justify-content-center fs-1">
          <h6 className="fw-bold h4">Seguici su</h6>
          <Icon.Instagram />
          <Icon.Facebook /
          <Icon.TwitterX />
          <Icon.Youtube />
        </div>
      </div>
      <div className="d-flex justify-content-evenly">
        <h6>FAQ</h6>
        <h6>Contattaci</h6>
        <h6>La tua opinione conta</h6>
        <h6>Regolamenti</h6>
        <h6>Privacy</h6>
        <h6>Cookies</h6>
        <h6>Termini e Condizioni</h6>
        <h6>Invia CV</h6>
      </div>
      <h6 className="text-center">
        Copyright &copy; 2025 McDonald's All rights reserved
      </h6>
    </>
  );
};

export default FooterComponent;
