import styled from "styled-components";
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
function Navbar() {
  return (
    <Nav>
      <div>
        <button>
          Night Mode
        </button>
        <button>
          Lang
        </button>
      </div>
      <div>
        Contact me
        <img  alt="avatar"/>
      </div>
    </Nav>
  )
}


import '@fontsource/roboto/700.css';


const Nav = styled.div`
  background: transparent;
  padding:14px 35px;
  display:flex;
  justify-content:space-between;

  
`
export default Navbar;
