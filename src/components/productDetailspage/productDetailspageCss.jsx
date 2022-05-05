import styled from "styled-components";

export const Wrapper = styled.div`
  width: 88%;
  margin-left: 9%;
  text-align: left;
  #main {
    display: flex;
    padding-top: 55px;
    width: 100%;
    justify-content: space-between;
  }

  #left {
    width: 65%;
  }
  #left > div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  #left > div > div {
    width: 49%;
    margin-bottom: 15px;
  }
  #rigth {
    width: 30%;
    position: relative;
  }
  #rigth > div {
    position: absolute;
    rigth: 0;
  }
  #title {
    display: flex;
    width: 100%;

    justify-content: space-between;
  }
  .class655 {
    line-height: 0.9;
    font-size: 0.6875rem;
    margin-right: 0.0625rem;
    unicode-bidi: bidi-override;
  }
  .packages {
    color: #484848;
    font-size: 0.875rem;
    line-height: 1.571;
    font-weight: 400;
    margin-bottom: 25px;
    letter-spacing: 0;
  }
  .eagle,
  .class321 {
    margin-left: 5px;
  }
  .class321 {
    padding: 6px 20px;
    font-weight: bold;
    font-size: 0.875rem;
    border-radius: 20px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  .class302 {
    margin-top: 55px;
    display: flex;
    gap: 20px;
    background-color: #0058a3;
    color: white;
    border-radius: 25px;
    width: 90%;
  }
  .class302:hover {
    background-color: #03306c;
  }
  .iconCart {
    padding: 15px 0px 0px 80px;
  }
  .class302 > p {
    font-size: 1rem;
    font-weight: bold;
  }
  #id702 {
    margin-top: 80px;
    display: flex;
  }
  #id702 > a {
    color: #484848;
    font-size: 0.875rem;
    line-height: 1.571;
  }
  .iconStore {
    padding: 0px 10px 5px;
  }
`;
