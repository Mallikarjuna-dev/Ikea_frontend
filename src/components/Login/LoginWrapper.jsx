import styled from "styled-components";

export const LoginWrapper = styled.div`
  .mainDiv {
    width: 80%;
    margin: auto;
    /* border: 1px solid red; */
    height: 750px;
    display: flex;
  }
  .leftDiv {
    /* border: 1px solid blue; */
    height: auto;
    width: 50%;
    background-color: #0058a3;
  }

  .rightDiv {
    /* border: 1px solid red; */
    height: auto;
    width: 50%;
  }

  .logo {
    /* border: 1px solid white; */
    height: 7%;
    display: flex;
  }
  .icon {
    /* border: 1px solid white; */
    width: 10%;
    height: 100%;
  }

  .logoImage {
    /* border: 1px solid white; */
    width: 80%;
    margin-left: 9%;
    height: 100%;
  }
  .midSection {
    /* border: 1px solid white; */
    margin-top: 25%;
    width: 60%;
    height: 300px;
    margin-left: 20%;
  }

  .bottom {
    /* border: 1px solid white; */
    height: 80px;
    margin-top: 20%;
  }

  //form Div

  .formDiv {
    /* border: 1px solid black; */
    height: 320px;
    width: 80%;
    margin: auto;
    margin-top: 20%;
    text-align: center;
    font-size: 18px;
  }

  .submitBtn > button {
    background-color: #0058a3;
    width: 80%;
    height: 45px;
    color: white;
    border: 1px solid #0058a3;
    border-radius: 20px;
    margin-top: 5px;
  }

  .signUpDiv {
    /* border: 1px solid black; */
    width: 80%;
    margin: auto;
    height: 25%;
    margin-top: 40px;
  }

  .homeBtn > button {
    background-color: #f5f5f5;
    border: 1px solid #f5f5f5;
    color: black;
    border-radius: 20px;
    margin-top: 5px;
    width: 95%;
    height: 45px;
  }

  .companyBtn > button {
    background-color: #f5f5f5;
    border: 1px solid #f5f5f5;
    color: black;
    border-radius: 20px;
    margin-top: 15px;
    width: 95%;
    height: 45px;
  }

  .linkTag {
    text-decoration: none;
    color: black;
  }
`;
