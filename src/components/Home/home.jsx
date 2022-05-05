import { Wrapper } from "./homeCss";
import SettingsBackupRestoreOutlinedIcon from "@mui/icons-material/SettingsBackupRestoreOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import CropLandscapeOutlinedIcon from "@mui/icons-material/CropLandscapeOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import { Example } from "../carousel/carousel";
import { items } from "./homecarouselContent";
import { useEffect, useState } from "react";
import ProductCard from "../Products/ProductCard";

import axios from "axios";
import styled from "styled-components";

const MainDiv = styled.div`
  width: 87%;
  margin-left: 9%;
  margin-top: 4%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 35px;
`;

export const Home = () => {
  const [prods, setProds] = useState([]);
  useEffect(() => {
    axios.get("https://ikea-backend-u5.herokuapp.com/products").then((res) => {
      setProds(res.data.slice(0, 4));
    });
  }, []);

  return (
    <Wrapper>
      <div id="lander">
        <a href="/">
          <img
            src="https://www.ikea.com/images/enjoy-festive-offers-from-16-march-to-03-april-ec6b7721a119bd5a97806179c045cf53.jpg?f=xxxl"
            alt=""
            width={"100%"}
          />
        </a>
      </div>
      <Example items={items} />
      <div id="LimFestColl">
        <h2>Limited festive collection</h2>
        <div className="id102">
          <div className="class102">
            <h3>AROMATISK</h3>
            <p>
              This collection is inspired by the houses, the colourful
              neighbourhoods in India, and the beautiful art one sees in Indian
              homes which have a detailed way of storytelling.
            </p>
            <a href="/">
              <img
                src="https://www.ikea.com/images/3f/37/3f379dc9c27c1fb3ad641abe688a7007.png?f=m"
                alt=""
                width={"100%"}
              />
            </a>
          </div>

          <div className="class102">
            <h3>HEMBJUDEN</h3>
            <p>
              This collection is designed to inspire your late-night dinner
              hosting and renew your home decoration for the festive season.
            </p>
            <a href="/">
              <img
                src="https://www.ikea.com/images/c5/38/c538994c1701d65d7da457d59a39518b.png?f=m"
                alt=""
                width={"100%"}
              />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div id="topCategories">
        <h2>Top categories</h2>
        <div>
          <div className="class456">
            <img
              src="https://www.ikea.com/images/sofa-and-armchairs-82856f7f365c3487b404dd2665b8f70b.jpg?f=xxs"
              alt=""
              width="100%"
            />
            <div>Sofa & armchairs</div>
          </div>
          <div className="class456">
            <img
              src="https://www.ikea.com/images/fc/ce/fcce62a0c6048965e3c2b3e4125e852e.jpg?f=xxs"
              alt=""
              width="100%"
            />
            <div>Cookware & tableware</div>
          </div>
          <div className="class456">
            <img
              src="https://www.ikea.com/images/78/c9/78c9a423f0930496fa1ebcf9a12baedb.jpg?f=xxs"
              alt=""
              width="100%"
            />
            <div>Smart home</div>
          </div>
          <div className="class456">
            <img
              src="https://www.ikea.com/images/5d/a3/5da3ce930867d15358c8157401a44458.jpg?f=xxs"
              alt=""
              width="100%"
            />
            <div>Mirrors</div>
          </div>
          <div className="class756">
            <img
              src="https://www.ikea.com/images/vases-9fddcf8b07b054a19e6923fd74186d71.jpg?f=xxs"
              alt=""
              width="100%"
            />
            <div>Shoe rack and clothes stand</div>
          </div>
        </div>
        <div id="fridge">
          <div className="class456">
            <img
              src="https://www.ikea.com/ext/ingkadam/m/2be35629f3ae2ffd/original/PH180600.jpg?f=xxs"
              alt=""
              width="100%"
            />
            <div>Beds</div>
          </div>
          <div className="class456">
            <img
              src="https://www.ikea.com/images/f5/75/f575c3df39ddd9af62619b08f089ce2c.jpg?f=xxs"
              alt=""
              width="100%"
            />
            <div>Chairs</div>
          </div>
          <div className="class456">
            <img
              src="https://www.ikea.com/images/fe/ae/feaee06bfbd5461d0eaec8d487000d8a.jpg?f=xxs"
              alt=""
              width="100%"
            />
            <div>Table and desks</div>
          </div>
          <div className="class456">
            <img
              src="https://www.ikea.com/images/de/0a/de0a3e3f4e3093866439262c7d6991a1.jpg?f=xxs"
              alt=""
              width="100%"
            />
            <div>Baby & children</div>
          </div>
          <div className="class756">
            <img
              src="https://www.ikea.com/images/79/7e/797e3f004247e68c9bb1b5b433b9cc54.jpg?f=xxs"
              alt=""
              width="100%"
            />
            <div>Storage & organisation</div>
          </div>
        </div>
      </div>
      <hr />
      <div id="ikeaFamily">
        <h2>IKEA Family offers</h2>

        <div>
          <MainDiv>
            {prods.map((el) => (
              <ProductCard key={el.id} elem={el} />
            ))}
          </MainDiv>
        </div>
      </div>
      <hr />
      <div id="offers">
        <div className="class103">
          <a href="/">
            <img
              src="https://www.ikea.com/images/ac/97/ac972bdd33a3fdf8244de14bc6365ba2.png?f=xs"
              alt=""
              width={"100%"}
            />
            <h2>New lower price</h2>
          </a>
        </div>
        <div className="class103">
          <a href="/">
            <img
              src="https://www.ikea.com/images/73/27/73271c15f05d3910dea135c3953729ce.png?f=xs"
              alt=""
              width={"100%"}
            />
            <h2>Explore top sellers</h2>
          </a>
        </div>
        <div className="class103">
          <a href="/">
            <img
              src="https://www.ikea.com/images/31/5e/315ec0f6b9487c0749056d5df4c04a5e.png?f=xs"
              alt=""
              width={"100%"}
            />
            <h2>A delicious offer you can't resist!</h2>
          </a>
        </div>
      </div>
      <hr />
      <div id="downloadIkea">
        <div className="class102">
          <img
            src="https://www.ikea.com/images/a-hand-showing-ikea-app-download-screen-aec02826f4ecef443ec20186fa64c7d8.jpg?f=m"
            alt=""
          />
        </div>

        <div className="class102">
          <h2 className="class113">Download the IKEA app</h2>
          <p>
            Explore a wide range of affordable, well-designed and functional
            home furnishing solutions for every room in your home - at your
            fingertips.
          </p>
          <button>Download now</button>
        </div>
      </div>
      <hr />
      <div id="moresustainable">
        <h2>Shop products for a more sustainable home</h2>
        <div id="freezer">
          <div className="class456">
            <img
              src="https://www.ikea.com/images/hand-adjusts-the-water-flow-of-a-glypen-kitchen-tap-in-stain-a84ab755c113500b4318c6e4d0dc9924.jpg?f=xxs"
              alt=""
              width="100%"
            />
            <div>Water saving</div>
          </div>
          <div className="class456">
            <img
              src="https://www.ikea.com/images/a-hand-pressing-the-switch-of-a-white-table-lamp-standing-on-d8a6f025fb2647b42caea256f8058feb.jpg?f=xxs"
              alt=""
              width="100%"
            />
            <div>Energy saving</div>
          </div>
          <div className="class456">
            <img
              src="https://www.ikea.com/images/a-woman-with-brown-hair-and-white-shirt-sleeping-under-a-whi-6f8f55594698055439b97d1138819aac.jpg?f=xxs"
              alt=""
              width="100%"
            />
            <div>Healthier home</div>
          </div>
          <div className="class456">
            <img
              src="https://www.ikea.com/images/three-white-sortera-bins-in-a-white-tiled-room-where-one-is--0c696d80fa4e20c5d518bf63765bd18c.jpg?f=xxs"
              alt=""
              width="100%"
            />
            <div>Reducing waste</div>
          </div>
          <div className="class456">
            <img
              src="https://www.ikea.com/images/ivar-chair-painted-light-green-standing-on-old-news-papers-i-f83b1db2f71591d77418a577c9c4be15.jpg?f=xxs"
              alt=""
              width="100%"
            />
            <div>More sustainable furniture</div>
          </div>
        </div>
      </div>

      <div id="ideasAndInsperations">
        <h2>More ideas and inspiration</h2>
        <div className="class802">
          <button className="gray">All</button>
          <button className="gray">Bedroom</button>
          <button className="gray">Living room</button>
          <button className="gray">Kitchen</button>
          <button className="gray">Workspace</button>
          <button className="gray">Outdoor</button>
          <button className="gray">Bathroom</button>
          <button className="gray">Baby & children room</button>
          <button className="gray">Dining</button>
        </div>
        <div id="id602">
          <div id="left">
            <img
              src="https://www.ikea.com/ext/ingkadam/m/13a3fca6ce2f881/original/PH176545-crop002.jpg?f=xs"
              alt=""
              width="100%"
            />
            <img
              src="https://www.ikea.com/ext/ingkadam/m/778316cd7e9bcb80/original/PH179304.jpg?f=xs"
              alt=""
              width="100%"
            />
            <img
              src="https://www.ikea.com/ext/ingkadam/m/5d7f2b02fd122257/original/PH173870-crop001.jpg?f=xs"
              alt=""
              width="100%"
            />
            <img
              src="https://www.ikea.com/ext/ingkadam/m/96f3a2834187e2d/original/PH169690-crop002.jpg?f=xs"
              alt=""
              width="100%"
            />
          </div>
          <div id="middle">
            <img
              src="https://www.ikea.com/ext/ingkadam/m/1c61a2453efb0ef1/original/PH182948.jpg?f=xs"
              alt=""
              width="100%"
              height="100%"
              className="classmiddle1"
            />
            <img
              src="https://www.ikea.com/ext/ingkadam/m/508c7ae7925e4682/original/PH178542-crop001.jpg?f=xs"
              alt=""
              width="100%"
            />
            <img
              src="https://www.ikea.com/ext/ingkadam/m/59defeed4fae3295/original/PH173302-crop002.jpg?f=xs"
              alt=""
              width="100%"
            />
            <img
              src="https://www.ikea.com/ext/ingkadam/m/551b3bf884dae5a7/original/PH169370-crop001.jpg?f=xs"
              alt=""
              width="100%"
            />
          </div>
          <div id="rigth">
            <img
              src="https://www.ikea.com/ext/ingkadam/m/4e1758b972e33f0d/original/PH175947-crop001.jpg?f=xs"
              alt=""
              width="100%"
            />
            <img
              src="https://www.ikea.com/ext/ingkadam/m/1bb972f285271ea9/original/PH176562.jpg?f=xs"
              alt=""
              width="100%"
            />
            <img
              src="https://www.ikea.com/ext/ingkadam/m/108e02a9c082cbc2/original/PH182640.jpg?f=xs"
              alt=""
              width="100%"
            />
            <img
              src="https://www.ikea.com/ext/ingkadam/m/3ff2df2bc3267a45/original/PH168429-crop001.jpg?f=xs"
              alt=""
              width="100%"
            />
          </div>
        </div>
        <div id="kneal">
          <button className="justin">Load 12 more</button>
        </div>
      </div>
      <hr />
      <div id="returns">
        <div className="classicons">
          <div>
            <SettingsBackupRestoreOutlinedIcon />
          </div>
          <h3>Returns policy</h3>
          <p>Exceptions during COVID19</p>
          <a href="/">Learn more</a>
        </div>
        <div className="classicons">
          <div>
            <LocalMallOutlinedIcon />
          </div>
          <h3>Click & collect</h3>
          <p>Safe click and collect shopping at IKEA Stores!</p>
          <a href="/">Learn more</a>
        </div>
        <div className="classicons">
          <div>
            <CropLandscapeOutlinedIcon />
          </div>
          <h3>Planning tools</h3>
          <p>Our planning tools will help you give shape to your ideas</p>
          <a href="/">Learn more</a>
        </div>
        <div className="classicons">
          <div>
            <StoreOutlinedIcon />
          </div>
          <h3>Safety at IKEA store</h3>
          <p>Safe shopping experience at IKEA</p>
          <a href="/">Learn more</a>
        </div>
      </div>
      <hr />
      <div id="nobody">
        <h2>Important information</h2>
        <div id="impInfo">
          <div className="class152">
            <h3>Coronavirus (COVID-19) information</h3>
            <a href="/">
              <img
                src="https://www.ikea.com/images/67/4d/674d38ec377caa8b14da0718ae34638e.jpg?f=m"
                alt=""
                width={"100%"}
              />
            </a>
            <button>Learn more</button>
          </div>
          <div className="class152">
            <h3>Product recalls</h3>
            <a href="/">
              <img
                src="https://www.ikea.com/images/bf/e2/bfe239c44b15ce483c987e2250df4d64.jpg?f=m"
                alt=""
              />
            </a>
            <button>Learn more</button>
          </div>
        </div>
      </div>
      <hr />
      <div id="explore">
        <h2>Explore our furniture & home furnishing range</h2>

        <div>
          <div>
            <p id="textbase">IKEA is a global leader in life at home.</p>
            <p>
              Whether you just moved into a new home or looking to revamp your
              current one, we at IKEA are here to inspire you with affordable
              home furniture solutions, there is a piece of furniture to every
              corner of your home. Create a home that is perfect for you.
            </p>
            <p>
              Shopping at IKEA is a bit different and exciting compared to your
              shopping at an everyday retail. It is about experiencing solutions
              first hand and getting to know ideas and inspirations that can fit
              perfectly into your home. That’s why, we offer more than 7500
              products, solutions at our store along with home furnishing ideas
              and services for you to explore.
            </p>
            <p>
              When you visit IKEA store, make yourself at home in our many room
              settings in the store. Squeeze the upholsteries, feel the oriental
              rugs, try the sofa beds and open the cabinets to feel the quality.
              On the price tag, you’ll find all you need to know about a
              product, including where in the store you can pick it up.
            </p>
            <p>
              Since most IKEA furniture is flat-packed, they are quite easy to
              bring home when you buy from the store.
            </p>
          </div>
          <div id="peterland">
            <p>
              <a href="/">Sofas </a>|<a href="/"> Beds </a>|
              <a href="/"> Dining </a>|<a href="/"> Tv units</a> |
              <a href="/"> Mattresses </a> |<a href="/"> Seating </a>|
              <a href="/"> Coffee </a>
              <a href="/">tables </a>|<a href="/"> Wardrobes </a>|
              <a href="/"> Storage </a> |<a href="/"> Bookshelves </a>|
              <a href="/"> Shoe racks </a>|<a href="/"> Decor</a>|
              <a href="/">Bathroom </a>|<a href="/"> Textiles </a>|
              <a href="/"> Pots & plants </a>| <a href="/">Home electronics </a>
              | <a href="/">Home </a>
              <a href="/">improvement </a>| <a href="/">Lighting </a>
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
