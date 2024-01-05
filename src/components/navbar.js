import { useState } from "react";
import styled from "styled-components";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
function Navbar(params) {
  const [isClicked,SetIsClicked] = useState(false)
   return (
    <Nav>
      <Container>
          <Upper className="upper">
              <button><NightlightRoundIcon /><WbSunnyIcon/></button>
              <button className={ isClicked ? "hamburger open" : "hamburger "} onClick={()=>SetIsClicked(!isClicked)}>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
              </button>
          </Upper>
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
    background:red;
    
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
  .hamburger {
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .bar {
    background-color: #fff;
    height: 3px;
    width: 25px;
    margin: 3.4px 0;
    transition: 0.3s;
  }
  .hamburger.open .bar:nth-child(1) {
    transform: translateY(10px) rotate(45deg);
  }
  
  .hamburger.open .bar:nth-child(2) {
    opacity: 0;
  }
  
  .hamburger.open .bar:nth-child(3) {
    transform: translateY(-10px) rotate(-45deg);
  }
  
`
const Menu = styled.ul`
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:90%;
  padding:20px 10px;
  border-bottom: 1px solid #828282;
  li {
    list-style:none;
  }
  a {
    text-decoration:none;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color:#070707;
    
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