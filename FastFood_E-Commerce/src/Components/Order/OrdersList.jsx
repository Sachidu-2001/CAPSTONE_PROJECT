import { useState } from "react";
import { Container, Card, Button, Col, Row } from "react-bootstrap";
import { useCart } from "../CartComponent";

const OrderList = () => {
  const [products, setProducts] = useState({
    panini: [],
    bevande: [],
    patate: [],
    salse: [],
    gelati: [],
    menu: [],
  });
  const [category, setCategory] = useState("panini");
  const { addToCart } = useCart();

  //fetch Get
  const url = `https://mocki.io/v1/20391c62-94b6-472e-8609-4a347e9bfaca`;

  const fetchingProducts = async () => {
    try {
      const response = await fetch(url);

      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log("la fetch non è passata", error);
    }
  };

  fetchingProducts();

  return (
    <Container>
      <div className="stickyComponent">
        <h2>Crea il tuo ordine</h2>
        <div className="d-flex justify-content-around row g-2">
          <Button
            className="btn-warning rounded-pill col-sm-2 col-4"
            onClick={() => setCategory("panini")}
          >
            Panini
          </Button>
          <Button
            className="btn-warning rounded-pill col-sm-2 col-4"
            onClick={() => setCategory("menu")}
          >
            Menu
          </Button>
          <Button
            className="btn-warning rounded-pill col-sm-2 col-4"
            onClick={() => setCategory("bevande")}
          >
            Bevande
          </Button>
          <Button
            className="btn-warning rounded-pill col-sm-2 col-4"
            onClick={() => setCategory("patate")}
          >
            Patate
          </Button>
          <Button
            className="btn-warning rounded-pill col-sm-2 col-4"
            onClick={() => setCategory("gelati")}
          >
            Gelati
          </Button>
          <Button
            className="btn-warning rounded-pill col-sm-2 col-4"
            onClick={() => setCategory("salse")}
          >
            Salse
          </Button>
        </div>
      </div>
      <div>
        <Row>
          {products[category].map((prt, index) => (
            <Col lg={3} xs={6}>
              <Card className="cardProducts my-3" key={index}>
                <Card.Img variant="top" src={prt.image} />
                <Card.Body>
                  <Card.Title>{prt.name}</Card.Title>
                  <Card.Text>{prt.price.toFixed(2)} &euro;</Card.Text>
                  <Button
                    className="backgroundRed"
                    onClick={() => addToCart(prt)}
                  >
                    Aggiungi
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default OrderList;
