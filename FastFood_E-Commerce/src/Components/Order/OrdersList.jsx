import { useState } from "react";
import { Container, Card, Button, Col, Row } from "react-bootstrap";

const OrderList = () => {
  const [products, setProducts] = useState([]);

  //fetch Get
  const url = `https://67ff7a6258f18d7209f15e53.mockapi.io/Products`;

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
        <h3>Panini</h3>
        <h3>Patate</h3>
        <h3>Bevande</h3>
      </div>
      <div>
        <Row>
          {products.map((prt, index) => (
            <Col lg={3}>
              <Card style={{ width: "18rem" }} key={index}>
                <Card.Img variant="top" src={prt.image} />
                <Card.Body>
                  <Card.Title>{prt.name}</Card.Title>
                  <Card.Text>{prt.Price}</Card.Text>
                  <Card.Text>{prt.description}</Card.Text>
                  <Button variant="primary">Vedi Dettagli</Button>
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
