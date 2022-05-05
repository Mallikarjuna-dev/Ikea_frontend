import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../footer/Button";

import AllFiltersBar from "./AllFiltersBar";
import axios from "axios";

const Main = styled.div`
  width: 87%;
  margin-left: 9%;
  margin-top: 2%;
  height: 40px;
  position: relative;
  display: flex;
  flex: 1;
  gap: 2%;
  border-bottom: 1px solid black;
  padding-bottom: 1%;
  .sortDrop:hover {
    .sort {
      display: block;
    }
  }
  .PriceDrop:hover {
    .Price {
      display: block;
    }
  }
  .MaterialDrop:hover {
    .Material {
      display: block;
    }
  }
  .CategoryDrop:hover {
    .Category {
      width: 270px;
      display: block;
    }
  }
`;
const FiltrButton = styled(Button)`
  background-color: rgb(236, 236, 236);
  padding: 0 30px;
  /* position:relative; */
  height: 100%;
  color: black;
  :hover {
    background-color: black;
    color: white;
  }
`;
const DropDown = styled.div`
  width: 230px;
  height: 250px;
  /* border:1px solid black; */
  background-color: white;
  z-index: 1000;
  position: absolute;
  top: 40px;
  overflow-y: scroll;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  /* left:15px ; */
  display: none;
  div {
    display: flex;
    justify-content: space-between;
    /* input{
            top:10px
            } */
    padding: 10px;

    /* border:1px solid black; */
    label {
      font-size: 18px;
    }
    input {
      width: 18px;
      height: 18px;
    }
  }
`;

const DropDiv = styled.div`
  /* width:87%;
    /* height:auto; */
  /* margin-left:9%; */
  position: relative;
  /* border: 1px solid black; */

  .Price {
    overflow-y: hidden;
    height: 230px;
  }
  .Material {
    overflow-y: hidden;
    height: 230px;
  }
`;

const SortBar = ({ products, set }) => {
  const [check, setCheck] = useState("");
  console.log(check);

  useEffect(() => {
    setCheck([...products]);
  }, []);

  const sortByPriceAsc = () => {
    let arr = [...products];
    arr = arr.sort((a, b) => {
      if (a.price > b.price) return 1;
      if (a.price < b.price) return -1;
      return 0;
    });
    set([...arr]);
  };

  const sortByPriceDesc = () => {
    let arr = [...products];
    arr = arr.sort((a, b) => {
      if (a.price > b.price) return -1;
      if (a.price < b.price) return 1;
      return 0;
    });
    set([...arr]);
  };

  const sortByTitleAsc = () => {
    let arr = [...products];
    arr = arr.sort((a, b) => {
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
      return 0;
    });
    set([...arr]);
  };

  const sortByTitleDesc = () => {
    let arr = [...products];
    arr = arr.sort((a, b) => {
      if (a.title > b.title) return -1;
      if (a.title < b.title) return 1;
      return 0;
    });
    set([...arr]);
  };

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("https://ikea-backend-u5.herokuapp.com/products").then((res) => {
      console.log(res.data);
      setAllProducts([...res.data]);
    });
  };

  const byFurniture = () => {
    let arr = [...allProducts];
    let num = "6242bb1902720e2ee52e6313";
    arr = arr.filter((el) => {
      return el.category._id === num;
    });
    set([...arr]);
  };

  const byKitchen = () => {
    let arr = [...allProducts];
    let num = "6242f5a5ae8ab4704cf4714a";
    arr = arr.filter((el) => {
      return el.category._id === num;
    });
    set([...arr]);
  };
  const byBeds = () => {
    let arr = [...allProducts];
    let num = "6243047ebbf6fd02e5be7655";
    arr = arr.filter((el) => {
      return el.category._id === num;
    });
    set([...arr]);
  };
  const byLighting = () => {
    let arr = [...allProducts];
    let num = "6243d0f763533e10664060bb";
    arr = arr.filter((el) => {
      return el.category._id === num;
    });
    set([...arr]);
  };

  const byWorking = () => {
    let arr = [...allProducts];
    let num = "6243d0b763533e10664060b1";
    arr = arr.filter((el) => {
      return el.category._id === num;
    });
    set([...arr]);
  };

  const byTextile = () => {
    let arr = [...allProducts];
    let num = "6243d0c063533e10664060b3";
    arr = arr.filter((el) => {
      return el.category._id === num;
    });
    console.log(arr);
    set([...arr]);
  };

  const byDecoration = () => {
    let arr = [...allProducts];
    let num = "6243d0c863533e10664060b5";
    arr = arr.filter((el) => {
      return el.category._id === num;
    });
    set([...arr]);
  };

  const byBathroom = () => {
    let arr = [...allProducts];
    let num = "6243d0cf63533e10664060b7";
    arr = arr.filter((el) => {
      return el.category._id === num;
    });
    set([...arr]);
  };

  const byOutdoor = () => {
    let arr = [...allProducts];
    let num = "6243d0e863533e10664060b9";
    arr = arr.filter((el) => {
      return el.category._id === num;
    });
    set([...arr]);
  };

  const byBaby = () => {
    let arr = [...allProducts];
    let num = "6243d0f763533e10664060bb";
    arr = arr.filter((el) => {
      return el.category._id === num;
    });
    set([...arr]);
  };

  return (
    <>
      <Main>
        <DropDiv className="sortDrop">
          <FiltrButton>Sort</FiltrButton>
          <DropDown className="sort">
            <form>
              <div>
                <label for="html">Price Low to High</label>
                <br />
                <input
                  type="radio"
                  id="html"
                  name="xyz"
                  value="Price Low to High"
                  onChange={sortByPriceAsc}
                />
              </div>
              <div>
                <label for="css">Price High to low</label>
                <br />
                <input
                  type="radio"
                  id="css"
                  name="xyz"
                  value="Price High to low"
                  onChange={sortByPriceDesc}
                />
              </div>
              <div>
                <label for="javascript">Name A to Z</label>
                <input
                  type="radio"
                  id="javascript"
                  name="xyz"
                  value="Name A to Z"
                  onChange={sortByTitleAsc}
                />
              </div>
              <div>
                <label for="javascript">Name Z to A</label>
                <input
                  type="radio"
                  id="javascript"
                  name="xyz"
                  value="Name A to Z"
                  onChange={sortByTitleDesc}
                />
              </div>
              <div>
                <label for="javascript">Material</label>
                <input
                  type="radio"
                  id="javascript"
                  name="xyz"
                  value="Name A to Z"
                />
              </div>
              <div>
                <label for="javascript">Size</label>
                <input
                  type="radio"
                  id="javascript"
                  name="xyz"
                  value="Name A to Z"
                />
              </div>
              <div>
                <label for="javascript">Color</label>
                <input
                  type="radio"
                  id="javascript"
                  name="xyz"
                  value="Name A to Z"
                />
              </div>
              <div>
                <label for="javascript">Height</label>
                <input
                  type="radio"
                  id="javascript"
                  name="xyz"
                  value="Name A to Z"
                />
              </div>
              <div>
                <label for="javascript">Weight</label>
                <input
                  type="radio"
                  id="javascript"
                  name="xyz"
                  value="Name A to Z"
                />
              </div>
            </form>
          </DropDown>
        </DropDiv>
        <DropDiv className="PriceDrop">
          <FiltrButton>Price</FiltrButton>
          <DropDown className="Price">
            <form>
              <div>
                <label for="html">₹ 0 - 499</label>
                <br />
                <input
                  type="radio"
                  id="html"
                  name="xyz"
                  value="Price Low to High"
                />
              </div>
              <div>
                <label for="css">₹ 500 - 999</label>
                <br />
                <input
                  type="radio"
                  id="css"
                  name="xyz"
                  value="Price High to low"
                />
              </div>
              <div>
                <label for="javascript">₹ 1,000 - 1,499</label>
                <input
                  type="radio"
                  id="javascript"
                  name="xyz"
                  value="Name A to Z"
                />
              </div>
              <div>
                <label for="javascript">₹ 1500 - 1,999</label>
                <input
                  type="radio"
                  id="javascript"
                  name="xyz"
                  value="Name A to Z"
                />
              </div>
              <div>
                <label for="javascript">₹ 2000+</label>
                <input
                  type="radio"
                  id="javascript"
                  name="xyz"
                  value="Name A to Z"
                />
              </div>
            </form>
          </DropDown>
        </DropDiv>
        <DropDiv className="MaterialDrop">
          <FiltrButton>Material</FiltrButton>
          <DropDown className="Material">
            <form>
              <div>
                <label for="html">Plastic</label>
                <br />
                <input
                  type="radio"
                  id="html"
                  name="xyz"
                  value="Price Low to High"
                />
              </div>
              <div>
                <label for="css">Metal</label>
                <br />
                <input
                  type="radio"
                  id="css"
                  name="xyz"
                  value="Price High to low"
                />
              </div>
              <div>
                <label for="javascript">Fabric</label>
                <input
                  type="radio"
                  id="javascript"
                  name="xyz"
                  value="Name A to Z"
                />
              </div>
              <div>
                <label for="javascript">Wood(inc. board)</label>
                <input
                  type="radio"
                  id="javascript"
                  name="xyz"
                  value="Name A to Z"
                />
              </div>
              <div>
                <label for="javascript">Solid wood</label>
                <input
                  type="radio"
                  id="javascript"
                  name="xyz"
                  value="Name A to Z"
                />
              </div>
            </form>
          </DropDown>
        </DropDiv>
        <DropDiv className="CategoryDrop">
          <FiltrButton>Category</FiltrButton>
          <DropDown className="Category">
            <form>
              <div>
                <label for="Furniture">Furniture</label>
                <br />
                <input
                  type="radio"
                  id="Furniture"
                  name="xyz"
                  value="Furniture"
                  onChange={byFurniture}
                />
              </div>
              <div>
                <label for="Kitchen & appliances">Kitchen & appliances</label>
                <br />
                <input
                  type="radio"
                  id="css"
                  name="xyz"
                  value="Kitchen & appliances"
                  onChange={byKitchen}
                />
              </div>
              <div>
                <label for="Beds & mattresses">Beds & mattresses</label>
                <input
                  type="radio"
                  id="Beds & mattresses"
                  name="xyz"
                  value="Beds & mattresses"
                  onChange={byBeds}
                />
              </div>
              <div>
                <label for="Lighting">Lighting</label>
                <input
                  type="radio"
                  id="Lighting"
                  name="xyz"
                  value="Lighting"
                  onChange={byLighting}
                />
              </div>
              <div>
                <label for="Working from home">Working from home</label>
                <input
                  type="radio"
                  id="javascript"
                  name="xyz"
                  value="Working from home"
                  onChange={byWorking}
                />
              </div>
              <div>
                <label for="Textiles">Textiles</label>
                <input
                  type="radio"
                  id="Textiles"
                  name="xyz"
                  value="Textiles"
                  onChange={byTextile}
                />
              </div>
              <div>
                <label for="Decoration">Decoration</label>
                <input
                  type="radio"
                  id="Decoration"
                  name="xyz"
                  value="Decoration"
                  onChange={byDecoration}
                />
              </div>
              <div>
                <label for="Bathroom products">Bathroom products</label>
                <input
                  type="radio"
                  id="Bathroom products"
                  name="xyz"
                  value="Bathroom products"
                  onChange={byBathroom}
                />
              </div>
              <div>
                <label for="Outdoor products">Outdoor products</label>
                <input
                  type="radio"
                  id="Outdoor products"
                  name="xyz"
                  value="Outdoor products"
                  onChange={byOutdoor}
                />
              </div>
              <div>
                <label for="Baby & children">Baby & children</label>
                <input
                  type="radio"
                  id="Baby & children"
                  name="xyz"
                  value="Baby & children"
                  onChange={byBaby}
                />
              </div>
            </form>
          </DropDown>
        </DropDiv>
        <DropDiv>
          <AllFiltersBar />
        </DropDiv>
      </Main>
    </>
  );
};

export default SortBar;
