import { Container, Form, Card } from "react-bootstrap";
import { useCart } from "../CartComponent";

const CheckOutComponent = () => {
  const { cartProducts } = useCart();

  const totalPrice = cartProducts.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <Container>
      <h1>Riepilogo Ordine</h1>
      <div>
        {cartProducts.map((e, i) => (
          <Card className="mb-1" style={{ width: "19em" }}>
            <div key={i} className="d-flex">
              <img src={e.image} style={{ width: "10em" }} />
              <div>
                <p className="h5">{e.name}</p>
                <p className="fw-bold h4">{e.price}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <hr></hr>
      <div>
        <div className="d-flex justify-content-between">
          <h2>Totale</h2>
          <p className="h2">{totalPrice.toFixed(2)} &euro;</p>
        </div>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="1122 3344 5566 7788"
          ></Form.Control>
        </Form.Group>
      </div>
    </Container>
  );
};

export default CheckOutComponent;
