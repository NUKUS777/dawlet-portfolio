import { useState } from "react";
import styled from "styled-components";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
function Navbar(params) {
  const [isClicked,SetIsClicked] = useState(false)
  const [isDark,SetIsDark] = useState(true)
   return (
    <Nav>
      <Container>
          <Upper className="upper">
              <div onClick={()=> SetIsDark(!isDark)}>{isDark ? <NightlightRoundIcon  className="icon"/> : <WbSunnyIcon/> }</div>
              <button className={ isClicked ? "hamburger open" : "hamburger "} onClick={()=>SetIsClicked(!isClicked)}>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
              </button>
          </Upper>
          <div className="darkMode" onClick={()=> SetIsDark(!isDark)}>{isDark ? <NightlightRoundIcon  className="icon"/> : <WbSunnyIcon/> }</div>
          <Menu  className={isClicked ? 'active' : ''}>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Me</a></li>
              <li><a href="#">Skills</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Contacts</a></li>
          </Menu>
      </Container>
   </Nav>
   )
}
const Nav = styled.div`
  width:100%;
  height:73px;
  position:fixed;
  z-index:100;
  background:white;
  .active {
    transform: translateX(0);
  }
  .upper {
    display:none;
    @media (max-width: 730px) {
      display:flex;
      align-items:center;
      justify-content:space-between;
    }
  }
  @media (max-width: 730px) {
    position:fixed;
    top:0;
    right:0;
  }
  .darkMode {
    position:absolute;
    left:30px;
    top:28px;
    @media (max-width: 730px) {
      display:none;
    }
  }
  .icon {
    cursor:pointer;
  }
`
const Container = styled.div`
  margin:0 auto;
  max-width:1240px;
  padding:0 140px;
  @media (max-width: 730px) {
    padding:0 16px;
  }
`
const Upper = styled.div`
  .icon {
    background:transparent;
    cursor:pointer;
  }
  .hamburger {
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top:10px;

  }
  .bar {
    background-color: black;
    height: 3px;
    width: 20px;
    margin: 2.5px 0;
    transition: 0.3s;
  }
  .hamburger.open .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  
  .hamburger.open .bar:nth-child(2) {
    opacity: 0;
  }
  
  .hamburger.open .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
  
`
const Menu = styled.ul`
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:90%;
  padding:20px 10px;
  margin:10px 0;
  border-bottom: 1px solid #828282;
  li {
    list-style:none;
  }
  a {
    display:block;
    text-decoration:none;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color:#070707;
  }
  a:hover {

    text-decoration:underline;
    transition: transform 1s ease;
    transform:scaleX(1.16)
  }
  @media (max-width: 730px) {
    flex-direction:column;
    justify-content:unset;
    align-items:start;
    border-bottom: 0;
    transform: translateY(-220%);
    transition: transform 0.1s ease;
    width:100%;
    position:fixed;
    left:0;
    background:white;
    li {
      margin:13px 0;
    }
  }
  
`
export default Navbar