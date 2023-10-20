import React, { useState } from 'react'
import Container from './container';



import moon from '../../assets/images/main-qimg-729a22aba98d1235fdce4883accaf81e.webp';
import avatar from '../../assets/images/moon4.jpg';
import russiaflag from '../../assets/images/russiaflad.jpg';
import ukflag from '../../assets/images/ukflag.webp';
import uzbflag from '../../assets/images/uzbekflag.webp';


import MainBtn from '../ui/MainBtn';
function Header() {
  const [DarkMode,setDarkMode] = useState(true);
  const [isClicked,setIsClicked] = useState(false)

  return (
    <div className={DarkMode ? 'headerParent' : 'headerParent headerParentActive'}>
       <Container>
         <div className='header'  >
            <div className='lang'>           
              <span  onClick={(e)=>{setIsClicked(!isClicked)}} className='lang-text'>
                Eng
              </span>
              <ul className={isClicked ? 'lang-modal' : 'lang-modal lang-modalActive' } >
                 <li><img className='lang-modal-flag' src={ukflag}/>Eng</li>
                 <li><img className='lang-modal-flag' src={russiaflag}/>Rus</li>
                 <li><img className='lang-modal-flag' src={uzbflag}/>Uzb</li>
              </ul>
            </div>
            <div className='header__left'>
              <p  className={DarkMode ? 'header__left-text' : 'header__left-text header__left-active'}>
                Hi <br />
                I am Dawlet Kenesbaev <br />
                <span className='header-left-job'>Front-end developer</span>
                <br/>
                <span  className='header-left-tech'>ReactJs,NextJs.</span>
              </p>
              <MainBtn text='hello'/>
            </div>
            <div className='header__right'>
               <img className='header__img' src={moon} />
            </div>
            {
              DarkMode ?<img onClick={(e)=> { setDarkMode(!DarkMode)}} src={moon} className='header-star'/>:<img onClick={(e)=> { setDarkMode(!DarkMode)}} src={avatar} className='header-star'/>
            }
         </div>
      </Container>
    </div> 
  )
}


export default Header
