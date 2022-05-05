import styled from "styled-components";

export const SuccessWrapper = styled.div`
  .successImg {
    text-align: center;
  }
  .successImg > img {
    object-fit: contain;
    width: 50%;
  }
  p {
    font-size: 16px;
  }
  .btn {
    /* border: 1px solid black; */
    width: 350px;
    margin: auto;
    margin-bottom: 25px;
  }
  button {
    background-color: #0058a3;
    width: 350px;
    height: 40px;
    color: white;
    font-size: 16px;
    border: 1px solid #0058a3;
    border-radius: 22px;
  }
`;
