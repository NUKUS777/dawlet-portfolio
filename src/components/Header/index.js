import React from "react";
import styled from "styled-components";
import './dd.css'
import Navbar from "../Navbar";

import avatar from '../../assets/images/5021330.png'
const Header = () => {
  
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const arr = letters.split('')
  let interation = 0;
  const interval = setInterval(()=>{
      let name = arr.map((index) => {
        if (index < interation) {
          return 'ff'
        }
        letters[Math.floor(Math.random()*26)];
      }).join('')
      if (interation >= 9) clearInterval(interval);
      interation += 1
      console.log(name);
    },100)
  return (
    <div className="hero">
        <Container>
          <Navbar />
          <Head>
            <div className="text">
              <h1 data-value='Dawlet Kenesbaev'>Dawlet Kenesbaev</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Ratione amet reiciendis
                adipisci quisquam, quod explicabo
                ipsum soluta numquam optio? Harum.
              </p>
            </div>
            <h1></h1>
            <img src={avatar}/>
          </Head>
        </Container>
    </div>
  );
};
const Head = styled.div `
    color:#00DD00;
    width:100%;
    height:100vh;
    display:flex;
    justify-content:space-between;
    .text {
      max-width:470px;
      height:200px;
      background: red;
      padding:30px 10px;

    }

`
const Container = styled.div`
  max-width:1300px;
  margin:0 auto;
  padding: 0;
`

//(#01257D), electric blue (#00FFFF)

export default Header;
