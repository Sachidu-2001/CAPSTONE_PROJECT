import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBarComponent from "./Components/NavBarComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePageComponent from "./Components/HomePage/HomePageComponent";
import FooterComponent from "./Components/FooterComponent";
import LavoraConNoiComponent from "./Components/LavoraConNoi/LavoraConNoiComponent";
import "./App.css";
import NovitaComponent from "./Components/Novità/NovitaComponent";
import ProductsComponent from "./Components/INostriProdotti/ProductsComponent";
import OrderComponent from "./Components/HomePage/Order/OrderComponent";
import ProductMenu from "./Components/INostriProdotti/Products/ProductMenu";
import ProductPatatine from "./Components/INostriProdotti/Products/ProductPatatine";
import ProductBevande from "./Components/INostriProdotti/Products/ProductBevande";
import ProductPanini from "./Components/INostriProdotti/Products/ProductPanini";
import ProductGelati from "./Components/INostriProdotti/Products/ProductGelati";
import ProductSalse from "./Components/INostriProdotti/Products/ProductSalse";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarComponent />
        <Routes>
          <Route path="/" element={<HomePageComponent />} />
          <Route path="/lavora-con-noi" element={<LavoraConNoiComponent />} />
          <Route path="/novita" element={<NovitaComponent />} />
          <Route path="/i-nostri-prodotti" element={<ProductsComponent />}>
            <Route path="menu" element={<ProductMenu />} />
            <Route path="panini" element={<ProductPanini />} />
            <Route path="bevande" element={<ProductBevande />} />
            <Route path="gelati" element={<ProductGelati />} />
            <Route path="patatine" element={<ProductPatatine />} />
            <Route path="salse" element={<ProductSalse />} />
          </Route>
          <Route path="/orders" element={<OrderComponent />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
