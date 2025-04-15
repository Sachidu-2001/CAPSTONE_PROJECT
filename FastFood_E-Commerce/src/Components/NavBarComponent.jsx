import {
  Container,
  Navbar,
  Nav,
  Button,
  Modal,
  Form,
  Offcanvas,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const NavBarComponent = () => {
  const Location = useLocation();

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
    setUserName(name);
    setUserSurname(surname);
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">FastFoodApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
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
            {/* modal button */}
            {isLoggedIn ? (
              <>
                <span className="me-3">
                  Ciao,{userName} {userSurName}
                </span>
                <Button onClick={handleLogout}>Esci</Button>
              </>
            ) : (
              <Button
                type="button"
                className="text-white backgroundRed border border-rounded"
                onClick={handleShow}
              >
                ACCEDI PER ORDINARE
              </Button>
            )}

            {isLoggedIn ? (
              <>
                <Button variant="primary" onClick={handleShow} className="me-2">
                  {name}
                </Button>
                <Offcanvas show={show} onHide={handleClose} {...props}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the
                    elements you have chosen. Like, text, images, lists, etc.
                  </Offcanvas.Body>
                </Offcanvas>
              </>
            ) : (
              <></>
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
