import { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";

const OrderList = () => {
  let endpoint;
  const [products, setProducts] = useState("");

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

  return (
    <Container>
      <div className="d-flex justify-content-around">
        <h3>Menu</h3>
        <h3>Panini</h3>
        <h3>Bevande</h3>
      </div>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default OrderList;
