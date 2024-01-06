// Carousel.js
import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';


import css from '../assets/images/css.svg';
import js from '../assets/images/js.svg';
import ts from '../assets/images/ts.svg'
import git from '../assets/images/git.svg'
import github from '../assets/images/github.svg'
import html from '../assets/images/html.svg'
import linux from '../assets/images/linux.svg'
import react from '../assets/images/react.svg'
import redux from '../assets/images/redux-original.svg'
import tailwind from '../assets/images/tailwindcss-icon.svg'
import sass from '../assets/images/sass-original.svg'
import nextjs from '../assets/images/nextjs.png'



const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 7000,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,           // Enable autoplay
    autoplaySpeed: 400,      // Set autoplay speed in milliseconds (2 seconds in this example)
  };
  return (
    <Slide>
        <Slider {...settings}>
      <div className='item'>
          <h3>HTML</h3><img src={html}/>  
      </div>
      <div className='item'>
          <h3>CSS</h3><img src={css}/>
      </div>
      <div className='item'>
          <h3>JAVASCRIPT</h3><img src={js}/>
      </div>
      <div className='item'>
          <h3>GIT</h3><img src={git}/>
      </div>
      <div className='item'>
          <h3>TYPESCRIPT</h3><img src={ts}/>
      </div> 
       <div className='item'>
          <h3>GITHUB</h3><img src={github}/>
      </div> 
      <div className='item'>
          <h3>REACTJS</h3><img src={react}/>
      </div>
       <div className='item'>
          <h3>REDUX</h3><img src={redux}/>
      </div>  
      <div className='item'>
          <h3>NEXTJS</h3><img src={nextjs}/>
      </div>
      <div className='item'>
          <h3>SASS</h3><img src={sass}/>
      </div> 
      <div className='item'>
          <h3>LINUX</h3><img src={linux}/>
      </div> 
      <div className='item'>
          <h3>TAILWIND</h3><img src={tailwind}/>
      </div> 
       
    </Slider>
    </Slide>
   
  );
};
const Slide = styled.div`
  .item {
    width: 150px;
    height:130px;
    margin:14px 12px;
    h3 {
      margin-top: 10px; 
      font-size:20px;
      @media (max-width: 930px) {
        font-size:15px;
      }
      @media (max-width: 630px) {
        font-size:12px;
      }
    }

    img {
      width: 50%;
      display: block;
      margin-left:30%;
    }
  }
`;

export default Carousel;
