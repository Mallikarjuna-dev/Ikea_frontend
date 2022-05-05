import React from 'react'
import styled from 'styled-components'
import { IoIosInformationCircle } from "react-icons/io";


const OffDiv = styled.div`
    width: 98%%;
    text-align: center;
    background-color: black;
    color: white;
    font-size: 11px;
    padding: 10px;
    span{
        margin-right: 0.625rem;
    height: 1.125rem;
    width: 1.125rem;
    flex-shrink: 0;
    font-size: 17px;
    }
`
// /IoIosInformationCircle/ 
const OfferBar = () =>{
  return (
    <OffDiv><span><IoIosInformationCircle/></span>  Get 20% off on delivery charges. Offer ends 3rd April!</OffDiv>
  )
}

export default OfferBar