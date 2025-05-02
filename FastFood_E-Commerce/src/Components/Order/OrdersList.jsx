import { useState } from "react";
import { Container, Card, Button, Col, Row } from "react-bootstrap";
import { useCart } from "../CartComponent";

const OrderList = () => {
  const [products, setProducts] = useState({
    panini: [],
    bevande: [],
    patate: [],
  });
  const [category, setCategory] = useState("panini");
  const { addToCart } = useCart();

  //fetch Get
  const url = `https://mocki.io/v1/bfe60262-c3a1-43ce-9a55-027e9693cc2f`;

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
      <div className="d-flex justify-content-around">
        <h3 onClick={() => setCategory("panini")}>Panini</h3>
        <h3 onClick={() => setCategory("patate")}>Patate</h3>
        <h3 onClick={() => setCategory("bevande")}>Bevande</h3>
      </div>
      <div>
        <Row>
          {products[category].map((prt, index) => (
            <Col lg={3}>
              <Card
                style={{ width: "18rem" }}
                className="cardProducts my-3"
                key={index}
              >
                <Card.Img variant="top" src={prt.image} />
                <Card.Body>
                  <Card.Title>{prt.name}</Card.Title>
                  <Card.Text>{prt.price} &euro;</Card.Text>
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
