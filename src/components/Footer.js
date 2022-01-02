import React, { Component } from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #303030;
  height: 20vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
const Text = styled.h2`
  color: white;
  font-weight: 200;
  font-size: clamp(17px, 1vw, 22px);
`;

class Footer extends Component {
  render() {
    return (
      <FooterContainer className="footer">
        <Text>
          Made by
          <a className="anchor" href="https://richardcoric.netlify.com">
            Richard
          </a>
        </Text>
        <Text>&copy; {new Date().getFullYear()} All Rights Reserved</Text>
        <Text>
          <a className="anchor" href="#top">
            Home
          </a>
          <a className="anchor" href="#about">
            About
          </a>
          <a className="anchor" href="#dest">
            Destinations
          </a>
          <a className="anchor" href="#contact">
            Contact
          </a>
        </Text>
      </FooterContainer>
    );
  }
}

export default Footer;
