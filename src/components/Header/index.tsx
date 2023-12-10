import React from "react";
import styled from "styled-components";
import './dd.css'
interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Container>
      <Head className="head">
        <h1>{title}</h1>
      </Head>
    </Container>
  );
};
const Head = styled.div `
    color:#00DD00;
    width:100%;
    height:100vh;
`
const Container = styled.div`
  max-width:1300px;
  margin:0 auto;
  padding: 0;
`

//(#01257D), electric blue (#00FFFF)

export default Header;
