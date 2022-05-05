import styled from "styled-components";

export const RegisterWrapper = styled.div`
  /* border: 1px solid black; */
  height: auto;
  width: 92%;
  margin: auto;
  /* margin-top: 100px; */
  display: flex;

  .leftDiv {
    /* border: 1px solid black; */
    width: 40%;
    /* display: flex; */
  }

  //right Div
  .rightDiv {
    /* border: 1px solid black; */
    width: 60%;
    text-align: center;
  }
  .pTag {
    font-size: 28px;
    font-weight: bold;
    margin-left: 20px;
    /* border: 1px solid yellow; */
  }
  .imgDiv {
    /* border: 1px solid teal; */
    width: 90%;
    display: flex;
    margin-left: 20px;
  }
  .imgDivLeft {
    /* border: 1px solid red; */
    height: auto;
    width: 45%;
    /* margin: auto; */
  }

  .varImageDiv {
    /* border: 1px solid orange; */
    width: 90%;
    margin-bottom: 10px;
  }

  .imgDivRight {
    /* border: 1px solid red; */
    height: auto;
    width: 45%;
    margin: auto;
  }

  .varImageDiv > img {
    src: ${({ link }) => link};
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 3%;
  }

  form > div {
    /* margin: auto; */
    /* border: 1px solid red; */
    width: 80%;
  }

  .formText {
    display: flex;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 15px;
  }

  .labelDiv {
    margin-right: 20px;
    margin-top: 20px;
  }
  .submitDiv {
    margin: auto;
  }

  .submitBtn {
    background-color: black;
    color: white;
    width: 270px;
    /* border: 1px solid black; */
    border-radius: 18px;
    height: 45px;
  }

  .radio {
    font-size: 15px;
    font-weight: bold;
  }

  .radioDiv {
    display: inline-flex;

    /* border: 1px solid teal; */
  }

  .radioMainDiv {
    margin: auto;
    /* width: 90%; */
  }

  .radioMainDiv > div > p {
    font-size: 15px;
  }

  .inputDiv > input {
    width: 250%;
    height: 40px;
    margin: auto;
    margin-top: 8px;
  }

  .selectTag {
    display: block;
    margin-top: 15px;
    width: 300%;
    height: 40px;
  }
`;
