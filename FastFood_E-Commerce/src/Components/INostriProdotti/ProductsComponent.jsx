import ProductsList from "./ProductsList";
import { Outlet, useLocation } from "react-router-dom";

const ProductsComponent = () => {
  return (
    <>
      <div className="d-flex d-md-block">
        <ProductsList />
        <Outlet />
      </div>
    </>
  );
};

export default ProductsComponent;
