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
      <div className="row d-flex justify-content-md-evenly pt-4 text-center">
        <h6 className="col-6 col-md-auto text-center">FAQ</h6>
        <h6 className="col-6 col-md-auto text-center">Contattaci</h6>
        <h6 className="col-6 col-md-auto text-center">La tua opinione conta</h6>
        <h6 className="col-6 col-md-auto text-center">Regolamenti</h6>
        <h6 className="col-6 col-md-auto text-center">Privacy</h6>
        <h6 className="col-6 col-md-auto text-center">Cookies</h6>
        <h6 className="col-6 col-md-auto text-center">Termini e Condizioni</h6>
        <h6 className="col-6 col-md-auto text-center">Invia CV</h6>
      </div>
      <h6 className="text-center py-4">
        Copyright &copy; 2025 Fast&Tasty All rights reserved
      </h6>
    </div>
  );
};

export default FooterComponent;
