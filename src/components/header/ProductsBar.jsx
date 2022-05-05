import React from "react";
import ProductSideBar from "../Products/ProductSideBar";
import styled from "styled-components";

const OptionsDiv = styled.div`
  width: 87%;
  margin-left: 9%;
  height: 30px;
  background-color: white;
  border-bottom: 1px solid #c7c1c1;
  display: flex;
  p {
    padding-right: 25px;
    padding-left: 2px;
    margin-top: 0;
    font-weight: 600;
  }
  p:hover {
    text-decoration: underline;
  }
  .rooms {
    margin-left: -2.5%;
  }
`;
// 'Products', 'Rooms', 'New at IKEA', 'All offers'
const ProductsBar = () => {
  return (
    <OptionsDiv style={{ marginBottom: "25px" }}>
      <p className="ProdSidebar">
        <ProductSideBar />
      </p>
      <p className="rooms">Rooms</p>
      <p>New at IKEA</p>
      <p>All offers</p>
    </OptionsDiv>
  );
};

export default ProductsBar;
