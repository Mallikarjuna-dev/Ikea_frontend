import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



const Wrapper = styled.div`
    height:30px;
    width: 50px;
    /* border: 1px solid black; */
    margin-top: -17px;
    position: fixed;
    margin-right:25px;
`

const TextDiv = styled.div`
    font-size: xx-large;
    font-weight: bolder;
    text-align: left;
    margin-bottom: 0;
    padding-left:70px;
    h3:hover{
        text-decoration: underline;
    }
`
const TextDiv2 = styled.div`
    font-size: small;
    font-weight: bold;
    text-align: left;
    margin-top: 20px;
    padding-left:70px;
    p:hover{
        text-decoration: underline;
    }
`
const TextDiv3 = styled.div`
    font-weight: normal;
    text-align: left;
    margin-top: 0px;
    padding-left:70px;
    p:hover{
        text-decoration: underline;
    }
`
const Logo = styled.div`
    width: 45%;
    height: 60px;
    margin-left:60px;
    margin-top:5%;
    /* border:1px solid black; */
`


export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({

    left: false,
    
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <Logo>
            <img src="https://cdn.mos.cms.futurecdn.net/H95bg4rrACvGwq5V2rtVUk.jpg" alt="" width={"100%"} height={"100%"}/>
        </Logo>
      <List>
        {['Products', 'Rooms', 'New at IKEA', 'All offers'].map((text, index) => (
          <TextDiv button key={text}>
            <h3>{text}</h3>
          </TextDiv>
        ))}
      </List>
      <List style={{marginTop:"-30px"}}>
        {['Tips and inspirations', 'Currently at IKEA', 'Track your order'].map((text, index) => (
          <TextDiv2 button key={text}>
          <p>{text}</p>
        </TextDiv2>
        ))}
      </List>
      <List style={{marginTop:"0px"}}>
        {['IKEA Family', 'IKEA Business', 'IKEA Restaurants'].map((text, index) => (
          <TextDiv3 button key={text}>
          <p>{text}</p>
        </TextDiv3>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
        <React.Fragment key={"left"}>
            <Wrapper>

        <IconButton onClick={toggleDrawer("left", true) }><MenuIcon/></IconButton>
            </Wrapper>
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