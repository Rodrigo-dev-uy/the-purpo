import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Axios from "axios";
import "../styles/Products.css";
import ProductsList from "../components/ProductList";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Axios.get("https://dummyjson.com/products").then((res) =>
      setProducts(res.data.products)
    );
  }, []);

  return (
    <>
      <h4>Products Page</h4>
      <Routes>
        <Route index element={<ProductsList products={products} />} />
      </Routes>
    </>
  );
};

export default Products;
