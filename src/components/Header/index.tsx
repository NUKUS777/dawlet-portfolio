import React from "react";

import Navbar from "../Navbar";

import styled from "styled-components";
interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Div>
      <Navbar />
      <header>
        <h1>{title}</h1>
      </header>
    </Div>
  );
};
const Div = styled.div `
  margin:0 auto;
  padding: 0;
`

export default Header;
