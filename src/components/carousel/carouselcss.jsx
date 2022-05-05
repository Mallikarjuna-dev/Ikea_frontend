import styled from "styled-components";

export const Carflex = styled.div`
  display: flex;
  justify-content: space-between;
  height: 600px;
  .items {
    width: 33%;
    height: 350px;
  }
  .items > img {
    margin-bottom: 0px;
  }
  .content {
    height: 223px;
    margin-top: -8px;
    padding: 15px 40px;
    position: relative;
    cursor: pointer;
  }
  .content > h2 {
    font-size: 1.5625rem;
    line-height: 2.5rem;
  }
  .content > button {
    bottom: 35px;
    position: absolute;
    padding: 10px 12px;
    border-radius: 50%;
    border: none;
  }
  .content:hover {
    text-decoration: underline;
  }
`;
