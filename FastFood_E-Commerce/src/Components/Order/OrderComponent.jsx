import { Container } from "react-bootstrap";
import OrderList from "./OrdersList";

const OrderComponent = () => {
  return (
    <Container>
      <div>
        <h2>Ordina il tuo Menu</h2>
      </div>
      <OrderList />
    </Container>
  );
};

export default OrderComponent;
