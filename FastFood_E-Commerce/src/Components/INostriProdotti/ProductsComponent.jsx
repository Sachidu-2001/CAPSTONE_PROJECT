import ProductsList from "./ProductsList";
import { Outlet, Route, Routes } from "react-router-dom";

const ProductsComponent = () => {
  return (
    <>
      <ProductsList />
      <Outlet />
    </>
  );
};

export default ProductsComponent;
