import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { Carflex } from "./carouselcss";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

export function Example({ items }) {
  return (
    <Carousel
      navButtonsProps={{
        style: {
          backgroundColor: "#010203",
          color: "white",
        },
      }}
      animation={"slide"}
      cycleNavigation={false}
      autoPlay={false}
    >
      {items.map((el, i) => {
        return (
          <Carflex key={i}>
            <Item src={el[0]} />
            <Item src={el[1]} />
            <Item src={el[2]} />
          </Carflex>
        );
      })}
    </Carousel>
  );
}

export function Item({ src }) {
  return (
    <Paper className="items">
      <img src={src.src} alt="" width={"100%"} height="100%" />
      <div
        className="content"
        style={{ color: src.bc2, backgroundColor: src.bc1 }}
      >
        <h2 style={{ color: src.bc2 }}>{src.title}</h2>
        <button style={{ color: src.cl1, backgroundColor: src.bc2 }}>
          <ArrowForwardOutlinedIcon />
        </button>
      </div>
    </Paper>
  );
}
