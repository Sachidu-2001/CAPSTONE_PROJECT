import {
  Container,
  Form,
  Card,
  Col,
  Row,
  Button,
  Modal,
} from "react-bootstrap";
import { useCart } from "../CartComponent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckOutComponent = () => {
  const { cartProducts } = useCart();
  const navigate = useNavigate();

  const totalPrice = cartProducts.reduce((acc, curr) => acc + curr.price, 0);

  //salva pagamento e conferma pagamento
  const [show, setShow] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [cardCvv, setCardCvv] = useState("");

  const handleShow = (event) => {
    event.preventDefault();
    if (
      cardNumber.length === 16 &&
      cardDate.length === 4 &&
      cardCvv.length === 3
    ) {
      setShow(true);
    } else {
      alert("Non hai inserito correttamente");
    }
  };
  const handleClose = () => setShow(false);

  //torna alla homepage
  const returnHome = () => {
    navigate("/");
  };

  return (
    <Container>
      <h1>Riepilogo Ordine</h1>
      <div>
        <Row>
          {cartProducts.map((e, i) => (
            <Col lg={3}>
              <Card className="mb-1" style={{ width: "19em" }}>
                <div key={i} className="d-flex">
                  <img src={e.image} style={{ width: "10em" }} />
                  <div>
                    <p className="h5">{e.name}</p>
                    <p className="fw-bold h4">{e.price} &euro;</p>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <hr></hr>
      <div className="mb-5">
        <div className="d-flex justify-content-between">
          <h2>Totale</h2>
          <p className="h2">{totalPrice.toFixed(2)} &euro;</p>
        </div>
        <Form>
          <Form.Group className="mb-2">
            <Form.Label>Inserisci Carta</Form.Label>
            <Form.Control
              style={{ width: "18em" }}
              type="password"
              placeholder="1122 3344 5566 7788"
              maxLength={16}
              minLength={16}
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <div className="d-flex">
            <Form.Group className="me-5">
              <Form.Control
                type="text"
                placeholder="12/99"
                style={{ width: "7em" }}
                maxLength={4}
                minLength={4}
                value={cardDate}
                onChange={(e) => setCardDate(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="CVV"
                maxLength={3}
                minLength={3}
                style={{ width: "7em" }}
                value={cardCvv}
                onChange={(e) => setCardCvv(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </div>
          <Button type="submit" onClick={handleShow} className="mt-2">
            Conferma e Paga
          </Button>
        </Form>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Pagamento riuscito</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Stiamo preparando il tuo ordine</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Chiudi
            </Button>
            <Button variant="primary" onClick={returnHome}>
              Torna a HomePage
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Container>
  );
  x;
};

export default CheckOutComponent;
