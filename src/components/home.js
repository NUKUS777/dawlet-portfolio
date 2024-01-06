import styled from "styled-components";

import hero from '../assets/images/BSPP2266.png'
import heromobile from '../assets/images/dd.avif'
import Carousel from "./carousel";



import TextSpan from "./textSpan";


function Home() {
  const first = 'Dawlet'.split("");
  const last = 'Kenesbaev'.split("");
  return (
      <Hero>
        <Container>
            <Upper>
              <div className="box">
              <div className="first">
                {first.map((letter,index) =>{
                  return (
                    <TextSpan key={index}>
                        {letter}
                    </TextSpan>
                  )
                })}
              </div>
              <div className="last">
                {last.map((letter,index) =>{
                  return (
                    <TextSpan key={index}>
                        {letter}
                    </TextSpan>
                  )
                })}
              </div>
              </div>
              <h3>Front-end Developer <br></br> 19 years old</h3>
            </Upper>
            <Bottom><img className="desk" src={hero} /> <img  className="mob" src={heromobile}/></Bottom>
            <About>
            <h3>About Me</h3>
              <p>
                Hi,I am Dawlet - Front-End from Tashkent <br></br>
                I am interested and creating websites and design
              </p>
              <p>
                I learnt web development in 'Najot Talim' IT academy
              </p>
              <p>
                I am studying at courses 'Javascript 2023 2024 ' in Rolling Scope School
              </p>
              <p>
              Ready to implement excellent projects with wonderful people.
              </p>
            </About>
            <Skill>
                <h3>Skills</h3>
                <p>I work in such programs as</p>
                <Carousel />
            </Skill>
            <Portfolio>
              PortFolio
            </Portfolio>
        </Container>
      </Hero>
  )
}







const Hero = styled.div`
  padding-top:80px;
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
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:10px 10px 10px 10px;
  @media (max-width: 830px) {
    // flex-direction:column;
  }
  .first {
    width:35%;
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
  .last {
    width:55%;
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
  .box {
    width:60%;
    @media (max-width: 830px) {
      width:80%;
    }
  }
`
const Bottom = styled.div`
   padding:10px;
   margin:0 auto;
   img {
     width:100%;

   }
   .mob {
    display:none;
    padding:0 30px 0 10px ;
   }
   @media (max-width: 630px) {
    .desk {
       display:none;
    }
    .mob {
        display:block;
       }
   }
   
`

//About
const About = styled.div`
   margin:140px 0;
   text-align:center;
   p {
    margin:40px 0;
   }
 `
const Skill = styled.div`
  margin-top:100px;
text-align:center;


`
export default Home;

//portfolio

const Portfolio = styled.div`
`








