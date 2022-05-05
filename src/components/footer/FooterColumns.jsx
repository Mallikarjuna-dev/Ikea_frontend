import React from 'react'
import styled from "styled-components"


const Fce = styled.div`
    width: 100%;
    min-width: 150px;
    display: flex;
    flex-direction: column;
    /* margin-left: 30px; */
    margin-right: 8%;
    text-align: left;
    cursor: pointer;
    p:hover{
        text-decoration: underline;
    }
    h5{
        font-size: 0.83em;
        margin-left: 5px;
        margin-bottom: 1.67rem;
    }
    p{
        padding: 0px 2px;
        margin: 9px 0px;
        font-weight: 350;
        font-size: 14px;
    }
`
function FooterColumns({head,array}) {

  return (
    <Fce>
        <h5>
            {head}
        </h5>
        {array.map((e)=><p>{e}</p>)}
    </Fce>
  )
}

export default FooterColumns