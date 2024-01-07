import styled from "styled-components";

import hero from '../assets/images/BSPP2266.png'
import heromobile from '../assets/images/dd.avif'
import girl from '../assets/images/Слой 8.png';
import rebook from '../assets/images/reebok_web.png'
import drill from '../assets/images/drill.png'


import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';


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
                Hi,I am Dawlet - Front-End Developer from Tashkent <br></br>
                I am interested and creating websites and design
              </p>
              <p>
                I learnt  front-end development (stack ReactJS) in <br></br> 'Najot Talim' IT academy from 2022 to 2023
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
        </Container>
        <Portfolio>
          <Container>
          <h3>Portfolio</h3>
            <div className="card">
              <img src={girl}/>
              <Des>
                <p>This project i dont know anything about this project but i really like girl in front page i think she is so attractive </p>
                <div className="bottom">
                <ul>
                <span>Used Languages</span>
                  <li>
                    Javascript (70%)
                  </li>
                  <li>
                    Javascript(23%)
                  </li> <li>
                    Javascript
                  </li>
                </ul>
                <div className="link">
                  <a href=""><GitHubIcon />GitHub</a>
                  <a href=""><LanguageIcon /> Demo </a>
                </div>
                </div>
              </Des>
            </div>
            <div className="card">
              <img src={rebook}/>
              <Des>
                <p>This project i dont know anything about this project but i really like girl in front page i think she is so attractive </p>
                <div className="bottom">
                <ul>
                <span>Used Languages</span>
                  <li>
                    Javascript (70%)
                  </li>
                  <li>
                    Javascript(23%)
                  </li> <li>
                    Javascript
                  </li>
                </ul>
                <div className="link">
                  <a href=""><GitHubIcon />GitHub</a>
                  <a href=""><LanguageIcon /> Demo </a>
                </div>
                </div>
              </Des>
            </div><div className="card">
              <img src={drill}/>
              <Des>
                <p>This project i dont know anything about this project but i really like girl in front page i think she is so attractive </p>
                <div className="bottom">
                <ul>
                <span>Used Languages</span>
                  <li>
                    Javascript (70%)
                  </li>
                  <li>
                    Javascript(23%)
                  </li> <li>
                    Javascript
                  </li>
                </ul>
                <div className="link">
                  <a href=""><GitHubIcon />GitHub</a>
                  <a href=""><LanguageIcon /> Demo </a>
                </div>
                </div>
              </Des>
            </div>
          </Container>
         </Portfolio>
         <Contact>

         </Contact>
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
   h3 {
    font-weight:600;
    font-size:30px;
   }
   p {
    display:block;
    margin:50px 0;
    line-height:20px;
   }
 `
const Skill = styled.div`
  margin-top:100px;
  text-align:center;
  h3 {
    font-weight:600;
    font-size:30px;
  }

`


//portfolio

const Portfolio = styled.div`
    padding:50px;
    background-color: rgb(221, 224, 224);
    margin:100px 0;
    text-align:center;
    @media (max-width: 730px) {
      padding:50px 16px;

    }
    h3 {
      font-weight:600;
      font-size:30px;
    }
    .card {
      margin:80px 0;
      display:flex;
      width:100%;
      @media (max-width: 830px) {
        flex-direction:column;
      }
      img {
        width:83%;
        @media (max-width: 830px) {
          width:100%
        }
      }
    }
`

const Des = styled.div`
   padding:10px;
   width:170px;
   display:flex;
   flex-direction:column;
   justify-content:space-around;
   background:grey;
   text-align:center;
   @media (max-width: 830px) {
    width:96%;
    padding: 10px;
    align-items:center;
   }
   .bottom {
    @media (max-width: 830px) {
      display:flex;
      align-items:center;
      justify-content:space-between;
      width:100%;
      height:100px;
     }
   }
   a {
      display:flex;
      align-items:center;
      justify-content:space-between;
      flex-direction:column;
      width:40px;
      height:50px;
      color:black;
      transition:all 1s ease;
      text-decoration:none;
   }
   a:hover {
    color:blue;
    transform:scale(1.03)
   }
   .link {
    display:flex;
    justify-content:space-between;
    width:90px;
    margin: 0 auto;
   }
   p {
    font-size:15px;
   }
   span {
    display:inline-block;
    margin-bottom:8px;
   }
   ul {
     width:130px;
     text-align:start;
   }
   li {
    list-style:none;
   }
`

const Contact = styled.div`
    

`

export default Home;









