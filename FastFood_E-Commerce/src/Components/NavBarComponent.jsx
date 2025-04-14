import { Container, Navbar, Nav, Button, Modal, Form } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const NavBarComponent = () => {
  const Location = useLocation();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">FastFoodApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link
                to="/"
                className={
                  location.pathname === "/" ? "nav-link active" : "nav-link"
                }
              >
                Home
              </Link>
              <Link
                to="/i-nostri-prodotti"
                className={
                  location.pathname === "/i-nostri-prodotti"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                I nostri prodotti
              </Link>
              <Link
                to="/novita"
                className={
                  location.pathname === "/novita"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Novità
              </Link>
              <Link
                className={
                  location.pathname === "/lavora-con-noi"
                    ? "nav-link active"
                    : "nav-link"
                }
                s
                to="/lavora-con-noi"
              >
                Lavora con noi
              </Link>
            </Nav>
            {/* modal button */}
            <Button
              type="button"
              className="text-white backgroundRed border border-rounded"
              onClick={handleShow}
            >
              ACCEDI PER ORDINARE
            </Button>
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
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Cognome</Form.Label>
                    <Form.Control
                      type="surname"
                      placeholder="Rossi"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>PassWord</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="password"
                    ></Form.Control>
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
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
