import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Footer";
import OfferBar from "../OfferBar";
import PrimarySearchAppBar from "../PrimarySearchAppBar";
import ProductsPage from "../Products/ProductsPage";
import ProductsBar from "../ProductsBar";
// import ProductsPage from '../components/Products/ProductsPage'
// import Footer from './components/Footer';
// import PrimarySearchAppBar from './components/PrimarySearchAppBar';
// import OfferBar from './components/OfferBar';
// import ProductsBar from './components/ProductsBar';

const Routers = () => {
  return (
    <>
      <OfferBar />
      <PrimarySearchAppBar />
      <ProductsBar />
      <Routes>
        {/* <Route path='/' element={} /> */}
        <Route path="/productspage" element={<ProductsPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Routers;
