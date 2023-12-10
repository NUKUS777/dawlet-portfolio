import styled from "styled-components";
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
function Navbar() {
  return (
  <Container>
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
  </Container>
  )
}


import '@fontsource/roboto/700.css';

const Container = styled.div`
  max-width:1300px;
  margin:0 auto;
  padding: 0;
`
const Nav = styled.div`
  background: #fff;
  padding:14px 35px;
  display:flex;
  justify-content:space-between;

  
`
export default Navbar;
