import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const NavBarComponent = () => {
  const Location = useLocation();
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
              <Link className="nav-link" to={"/i-nostri-prodotti"}>
                I nostri prodotti
              </Link>
              <Link className="nav-link" to={"/novità"}>
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
            <Button variant="primary" id="btnLogin">
              LOGIN
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarComponent;
