import {
  Container,
  Navbar,
  Nav,
  Button,
  Modal,
  Form,
  Offcanvas,
  Card,
} from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import * as Icon from "react-bootstrap-icons";
import { useCart } from "./CartComponent";
import logo1 from "../assets/img/logo/logoapp.png";

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
    navigate("/");
  };

  //Carrello
  const [Showcanvas, setShowcanvas] = useState(false);
  const handleShowcanvas = () => setShowcanvas(true);
  const handleClosecanvas = () => setShowcanvas(false);
  const { cartProducts } = useCart();
  const { removeFromCart } = useCart();
  //totaleCarrello
  const totalPrice = cartProducts.reduce((acc, curr) => acc + curr.price, 0);

  //Vai a checkout
  const checkOut = () => {
    if (cartProducts.length === 0) {
      alert("il carrello è vuoto");
    } else {
      navigate("/checkout");
    }
  };

  return (
    <Navbar className="bg-white">
      <div className="container d-flex justify-content-between">
        <Navbar.Brand className="p-0 m-0">
          <img src={logo1} alt="logo" style={{ width: "4rem" }} />
        </Navbar.Brand>
        {isLoggedIn ? (
          <>
            <div>
              <span className="me-3 my-auto">
                Benvenuto, {userName} {userSurName}
              </span>
              <Button className="backgroundRed" onClick={handleLogout}>
                Esci
              </Button>
            </div>
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
                <Offcanvas.Title>
                  Totale provvisorio: {totalPrice.toFixed(2)} &euro;
                  <Button
                    className="rounded-pill btn-warning"
                    onClick={() => {
                      checkOut();
                      handleClosecanvas();
                    }}
                  >
                    Procedi all'ordine
                  </Button>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {cartProducts.length === 0 ? (
                  <p>che Tristezza... Il Tuo Carrello è vuoto</p>
                ) : (
                  cartProducts.map((e, i) => (
                    <Card className="mb-1">
                      <div key={i} className="d-flex">
                        <img src={e.image} style={{ width: "10em" }} />
                        <div>
                          <p className="h5">{e.name}</p>
                          <p className="fw-bold h4">{e.price}</p>
                          <Icon.Trash onClick={() => removeFromCart(e)} />
                        </div>
                      </div>
                    </Card>
                  ))
                )}
              </Offcanvas.Body>
            </Offcanvas>
          </>
        ) : (
          <>
            <Nav>
              <Link
                to="/"
                className={
                  location.pathname === "/"
                    ? "nav-link active fw-bold "
                    : "nav-link "
                }
              >
                HOME
              </Link>
              <Link
                to="/i-nostri-prodotti"
                className={
                  location.pathname === "/i-nostri-prodotti"
                    ? "nav-link active fw-bold"
                    : "nav-link"
                }
              >
                PRODOTTI
              </Link>
              <Link
                to="/novita"
                className={
                  location.pathname === "/novita"
                    ? "nav-link active fw-bold"
                    : "nav-link"
                }
              >
                NOVITÀ
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
                LAVORA CON NOI
              </Link>
            </Nav>

            <Button
              type="button"
              className="text-white backgroundRed border-rounded"
              onClick={handleShow}
            >
              ORDINA ORA
            </Button>
          </>
        )}
      </div>
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
          <Button variant="warning" onClick={handleClose}>
            Chiudi
          </Button>
          <Button className="backgroundRed" onClick={handleLogin}>
            Accedi
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
};

export default NavBarComponent;
