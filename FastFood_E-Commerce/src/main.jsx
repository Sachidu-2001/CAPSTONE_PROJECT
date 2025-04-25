import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import CartComponent from "./Components/CartComponent.jsx";
import { Cart } from "react-bootstrap-icons";

createRoot(document.getElementById("root")).render(
  <CartComponent>
    <App />
  </CartComponent>
);
