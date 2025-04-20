import ProductsList from "./ProductsList";
import { Outlet, useLocation } from "react-router-dom";

const ProductsComponent = () => {
  return (
    <>
      <ProductsList />
      <Outlet />
    </>
  );
};

export default ProductsComponent;
