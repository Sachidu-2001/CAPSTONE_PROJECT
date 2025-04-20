import {
  Container,
  Navbar,
  Nav,
  Button,
  Modal,
  Form,
  Offcanvas,
} from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import * as Icon from "react-bootstrap-icons";
import prova1 from "../assets/img/Product1.jpg";

const NavBarComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setEmail("");
    setName("");
    setSurname("");
    setPassword("");
  };
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedin") === "true"
  );
  const [userName, setUserName] = useState(
    localStorage.getItem("userName" || "")
  );
  const [userSurName, setUserSurname] = useState(
    localStorage.getItem("userSurname" || "")
  );

  //login
  const handleLogin = () => {
    if (email && password && name && surname) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", name);
      localStorage.setItem("userSurname", surname);
      setIsLoggedIn(true);
      setUserName(name);
      setUserSurname(surname);
      handleClose();
      navigate("/orders");
    } else {
      alert("Completa tutti i campi");
    }
  };

  //logout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    localStorage.removeItem("userSurname");
    setIsLoggedIn(false);
  };

  //Carrello
  const [Showcanvas, setShowcanvas] = useState(false);
  const handleShowcanvas = () => setShowcanvas(true);
  const handleClosecanvas = () => setShowcanvas(false);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="d-flex justify-content-end"
          >
            {isLoggedIn ? (
              <div className="d-flex">
                <span className="me-3 my-auto">
                  Benvenuto,{userName} {userSurName}
                </span>
                <Button onClick={handleLogout}>Esci</Button>

                <div>
                  <Icon.Cart
                    variant="primary"
                    onClick={handleShowcanvas}
                    className="ms-5 mt-2 fs-4"
                  />
                </div>

                <Offcanvas
                  show={Showcanvas}
                  onHide={handleClosecanvas}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Totale provvisorio</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <div className="d-flex">
                      <img src={prova1} style={{ width: "8em" }} />
                      <div>
                        <p>Nome Prodotto</p>
                        <p>6</p>
                      </div>
                    </div>
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
            ) : (
              <>
                <Nav className="me-auto d-flex">
                  <Link
                    to="/"
                    className={
                      location.pathname === "/"
                        ? "nav-link active fw-bold"
                        : "nav-link"
                    }
                  >
                    Home
                  </Link>
                  <Link
                    to="/i-nostri-prodotti"
                    className={
                      location.pathname === "/i-nostri-prodotti"
                        ? "nav-link active fw-bold"
                        : "nav-link"
                    }
                  >
                    I nostri prodotti
                  </Link>
                  <Link
                    to="/novita"
                    className={
                      location.pathname === "/novita"
                        ? "nav-link active fw-bold"
                        : "nav-link"
                    }
                  >
                    Novità
                  </Link>
                  <Link
                    className={
                      location.pathname === "/lavora-con-noi"
                        ? "nav-link active fw-bold"
                        : "nav-link"
                    }
                    s
                    to="/lavora-con-noi"
                  >
                    Lavora con noi
                  </Link>
                </Nav>

                <Button
                  type="button"
                  className="text-white backgroundRed border border-rounded"
                  onClick={handleShow}
                >
                  ACCEDI PER ORDINARE
                </Button>
              </>
            )}

            {/* Modal*/}
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Accedi</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                      type="name"
                      placeholder="Fabio"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Cognome</Form.Label>
                    <Form.Control
                      type="surname"
                      placeholder="Rossi"
                      value={surname}
                      onChange={(e) => setSurname(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleLogin}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarComponent;
