import styled from "styled-components";
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useState } from "react";

import uk from '../../assets/images/uk.jpg'
import ru from '../../assets/images/Flag_of_Russia.svg.png'
import avatar from '../../assets/images/5021330.png';

function Navbar() {
  const [isEng,setIsEng] = useState(true)
  const [isMode,setIsMode] = useState(true)
  return (
    <Nav>
      <div>
        {
          isEng ?
          <button onClick={()=>{setIsEng(false)}}>
            <img className="flagimg" src={uk}/>
          </button>:
          <button onClick={()=>{setIsEng(true)}}>
           <img className="flagimg" src={ru}/>
          </button>
        }
        <button onClick={()=>{setIsMode(!isMode)}}>
          {isMode?<LightModeIcon /> :<ModeNightIcon />}
        </button>
      </div>
      <Contact>
        <h2>Contact me</h2>
        <img src={avatar} alt="avatar"/>
      </Contact>
    </Nav>
  )
}




const Nav = styled.div`
  background: transparent;
  padding:14px 35px;
  display:flex;
  justify-content:space-between;
  button {
    cursor:pointer;
    padding:10px;
    border-radius: 10px;
    border:1px solid gray;
    box-shadow: 3px 3px 3px 0 rgba(0, 0, 0, 0.3);
    background: transparent;
    margin:0 10px;
  }
  .flagimg {
    width:30px;
    height:30px;
    border-radius:15px;
  }
`
const Contact = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  h2 {
    font-size:22px;
    font-weight:500;
    display:inline-block;
  }
  img {
    width:28px;
    margin-left:10px;
  }
  
`
export default Navbar;
