import React from "react";
import styled from "styled-components";

const Card = styled.div`
  height: 430px;
  /* border:1px solid black; */
`;
const ImgDiv = styled.div`
  height: 70%;
  width: 100%;
  /* border: 1px solid black; */
  transition: 1s ease;
  img {
    height: 100%;
    width: 100%;
    /* transition: 0.3s ; */
  }
  .HoverImg {
    display: none;
  }
  :hover {
    .HoverImg {
      display: block;
    }
    #FirstImg {
      display: none;
    }
  }
`;

const TextDiv = styled.div`
  text-align: left;
  position: relative;
  /* border:1px solid black; */
  height: 30%;
  .title {
    font-weight: 700;
  }
  .desc {
    margin-top: -10px;
    color: #696767;
  }
  .price {
    font-weight: 500;
    margin-bottom: 5px;
    /* position:absolute;
        bottom:0; */
  }
`;

const ProductCard = ({ elem }) => {
  return (
    <>
      {/* onMouseOver={(event)=>{event.target.src=elem.img2}} onMouseOut={(event)=>{event.target.src=elem.img1}} */}
      <Card
        onClick={() => {
          window.location.href = `/products/${elem._id}`;
        }}
      >
        <ImgDiv>
          <img src={elem.img1} alt="" id="FirstImg" />
          <img src={elem.img2} alt="" className="HoverImg" />
        </ImgDiv>
        <TextDiv>
          <p className="title">{elem.title}</p>
          <p className="desc">{elem.package}</p>
          <p className="price">
            Rs.<strong>{elem.price}</strong>
          </p>
        </TextDiv>
      </Card>
    </>
  );
};

export default ProductCard;
