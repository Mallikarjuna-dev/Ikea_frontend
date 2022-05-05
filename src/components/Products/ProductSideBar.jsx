import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const TextDiv = styled.div`
  font-size: xx-large;
  font-weight: bolder;
  text-align: left;
  margin-bottom: 0;
  padding-left: 70px;
  h3:hover {
    text-decoration: underline;
  }
`;
const TextDiv2 = styled.div`
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  margin-top: 10px;
  padding-left: 70px;
  padding-right: 50px;
  p:hover {
    text-decoration: underline;
  }
`;
const TextDiv3 = styled.div`
  font-weight: normal;
  text-decoration: none;
  text-align: left;
  margin-top: 0px;
  padding-left: 70px;
  .cats:hover {
    text-decoration: underline;
  }
`;
const Logo = styled.div`
  width: 45%;
  height: 60px;
  margin-left: 60px;
  margin-top: 5%;
  /* border:1px solid black; */
`;

export default function SwipeableTemporaryDrawer() {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 350 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Logo>
        <img
          src="https://cdn.mos.cms.futurecdn.net/H95bg4rrACvGwq5V2rtVUk.jpg"
          alt=""
          width={"100%"}
          height={"100%"}
        />
      </Logo>
      <List
        onClick={() => {
          navigate("/products");
        }}
      >
        {["Products"].map((text, index) => (
          <TextDiv button key={text}>
            <h4>{text}</h4>
          </TextDiv>
        ))}
      </List>
      <List
        style={{ marginTop: "-30px" }}
        onClick={() => {
          navigate("/products");
        }}
      >
        {[
          "New lower price",
          "Textile under Rs.999",
          "Handpicked combinations for  a new fresh look",
          "Sustainable living",
          "Product guides",
        ].map((text, index) => (
          <TextDiv2
            button
            key={text}
            onClick={() => {
              navigate("/products");
            }}
          >
            <p>{text}</p>
          </TextDiv2>
        ))}
      </List>
      <List style={{ marginTop: "0px" }}>
        {[
          "Furniture",
          "Kitchen & appliances",
          "Beds & mattresses",
          "Storage & organisation",
          "Working from home",
          "Textiles",
          "Decoration",
          "Bathroom products",
          "Outdoor products",
          "Lighting",
          "Carpets, mats & flooring",
          "Baby & children",
          "More",
        ].map((text, index) => (
          <TextDiv3
            button
            key={text}
            onClick={() => {
              navigate("/products");
            }}
          >
            <Link
              to={"/productspage"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <p className="cats">{text}</p>
            </Link>
          </TextDiv3>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <p onClick={toggleDrawer("left", true)}>Products</p>

        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {list("left")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
