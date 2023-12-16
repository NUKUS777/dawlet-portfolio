import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Navbar from "../Navbar";
import avatar from '../../assets/images/sticker.webp';


import './dd.css'


const Header = () => {
  const name = 'DAWLET KENESBAEV';
  const [displayedName, setDisplayedName] = useState('');
  const [iteration, setIteration] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let newName = '';

      for (let i = 0; i < name.length; i++) {
        const letter = name[i];

        if (i < iteration) {
          newName += letter;
        } else {
          const currentLetterIndex = (letterIndex + i) % 26;
          newName += String.fromCharCode(65 + currentLetterIndex);
        }
      }

      setDisplayedName(newName);

      if (iteration >= name.length * 2 && letterIndex === name.length) {
        clearInterval(interval);
      }

      if (letterIndex < name.length) {
        setLetterIndex(letterIndex + 1);
      }

      setIteration(iteration + 1);
    }, 100);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [iteration, letterIndex, name]);

  return (
    <div className="hero">
      <Container>
        <Navbar />
        <Head>
          <div className="text">
            <h1 className='title'>I am <span>{displayedName}</span></h1>
            <p className='para'>
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ratione amet reiciendis
              adipisci quisquam, quod explicabo
              ipsum soluta numquam optio? Harum.
            </p>
          </div>
          <h1></h1>
          <img src={avatar} alt="Avatar" />
        </Head>
      </Container>
    </div>
  );
};

const Head = styled.div`
  color: #00DD00;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;

  .text {
    max-width: 470px;
    height: 200px;
    padding: 30px 10px;
  }
  .title {
    font-weight:600;
    font-size:34px;

  }
`;

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0;
`;

export default Header;
