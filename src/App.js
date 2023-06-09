import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ProductsDetail from "./components/ProductsDetail";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFount";
import Footer from "./pages/Footer";
import Cart from "./pages/CartHtml";

function App() {
  return (
    <Routes>
      <Route path="/the-purpo" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="products/*" element={<Products />} />
        <Route path="products/:productId" element={<ProductsDetail />} />{" "}
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route path="*" element={<Footer />} />
    </Routes>
  );
}

export default App;
