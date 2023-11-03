import React from "react";

import Navbar from "../Navbar";

import styled from "styled-components";
interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <>
      <Navbar />
      <header>
        <h1>{title}</h1>
      </header>
    </>
  );
};
const Div = styled.div`
  margin:0 auto;
`

export default Header;
