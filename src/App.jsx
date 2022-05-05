import "./App.css";
import { Home } from "./components/Home/home";
import { Routes, Route } from "react-router-dom";
import { ProductDetails } from "./components/productDetailspage/productDetailsPage";
import { NotFound } from "./components/NotFound/notfound";
import { Cart } from "./components/Cart/cart";
import Footer from "./components/footer/Footer";
import OfferBar from "./components/header/OfferBar";
import PrimarySearchAppBar from "./components/header/PrimarySearchAppBar";
import ProductsPage from "./components/Products/ProductsPage";
import ProductsBar from "./components/header/ProductsBar";
import { Login } from "./components/Login/Login";
import { Register } from "./components/SignUp/Register";
import { Success } from "./components/Success/Success";

function App() {
  return (
    <div className="App">
      <OfferBar />
      <PrimarySearchAppBar />
      <ProductsBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
