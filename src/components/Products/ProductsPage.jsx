import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

import styled from "styled-components";
import SortBar from "../Sorting/SortBar";

const MainDiv = styled.div`
  width: 87%;
  margin-left: 9%;
  margin-top: 4%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 35px;
  /* border: 1px solid black; */
`;
const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://ikea-backend-u5.herokuapp.com/products").then((res) => {
      console.log(res.data);
      setProducts([...res.data]);
      setLoading(false);
    });
  }, []);

  const sortedData = (data) => {
    setProducts([...data]);
    console.log(data.length);
  };

  console.log(products.length);
  return (
    <>
      {loading ? (
        <div style={{ textAlign: "center" }}>
          <video
            class="http-status-message__ufo"
            autoplay="autoplay"
            loop="loop"
            muted="muted"
            playsinline="playsinline"
          >
            <source
              src="https://media.istockphoto.com/videos/loading-circle-icon-animation-on-white-background-4k-video-loopable-video-id1302436594"
              type="video/mp4"
            />
          </video>
        </div>
      ) : (
        <>
          <SortBar products={products} set={sortedData} />
          <MainDiv>
            {products.map((el) => (
              <ProductCard key={el.id} elem={el} />
            ))}
          </MainDiv>
        </>
      )}
    </>
  );
};

export default ProductsPage;
