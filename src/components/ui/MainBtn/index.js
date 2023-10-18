import React from 'react'
import { styled } from 'styled-components';
function MainBtn({text='fff'}) {
  return (
    <Btn className='mainbtn'>
      {text}
    </Btn>
  )
}
const Btn = styled.button`
    display: flex;
    padding: 0px 32px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    border-radius: 3px;
    background:  #FA8232;
    height: 56px;
    width: 191px;
    color: #FFF;
    font-family: Public Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 56px; 
    letter-spacing: 0.192px;
    text-transform: uppercase;
    border:3px solid  #FA8232;
    cursor: pointer;
    transition: 0.5s;
    position: relative;
    &:hover {
    color: #FA8232;
    background: transparent;
    }
`
export default MainBtn;

