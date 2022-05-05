import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 100px;
  .allCart {
    width: 55%;
    margin: auto;
  }
  .cartItem {
    display: flex;
    heigth: 80px;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .imgDiv {
    width: 18%;
  }
  .cartTitle {
    width: 55%;
    text-align: left;
  }
  .cartPrice {
    width: 25%;
    text-align: right;
  }
  #subTotal {
    width: 55%;
    margin: auto;
    display: flex;
    border-top: 1px dashed silver;
    border-bottom: 1px dashed silver;
    justify-content: space-between;
  }
  .type {
    width: 35%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  }
  .type > div {
    width: 120px;
    padding: 15px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  .type > div:hover {
    background-color: whitesmoke;
  }
  #policy {
    border-top: 1px solid silver;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
  }
  #policy {
    width: 72%;
    margin: auto;
  }
  .policyterms {
    display: flex;
    width: 33%;
    gap: 10px;
    border: 1px solid silver;
  }
  .terms {
    text-align: left;
  }
  .terms > div {
    text-align: right;
  }
  .policyIcons {
    padding: 50px 30px 20px;
  }
  .quantity,
  .inquantity {
    display: flex;
    justify-content: space-between;
  }
  .inquantity {
    width: 80px;
  }
  .inquantity > div {
    padding: 8px 0px 0px;
  }
  .delete {
    padding: 8px 0px 0px 20px;
  }
  .ptag {
    font-size: large;
  }
  .empty {
    display: flex;
    width: 55%;
    margin: auto;
    justify-content: space-between;
    margin-bottom: 40px;
  }
  .class502 {
    border: 1px solid silver;
    padding: 10px;
    width: 40%;
    color: white;
    background-color: #0058a3;
  }
  .class502:hover {
    background-color: #03306c;
  }
`;
