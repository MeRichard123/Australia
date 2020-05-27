import React, { Component } from "react";
import styled from "styled-components";
import Kangaroo from "../assets/img/kangaroo.jpg";
import PinnedMap from "../assets/img/australiaMap.jpg";

const Title = styled.h1`
  text-transform: uppercase;
  color: white;
  font-size: clamp(40px, 2.5vw, 52px);
  font-weight: 700;
  position: relative;
  &::after {
    content: "";
    display: block;
    background: white;
    width: 137px;
    height: 6px;
    border-radius: 20px;
  }
`;
const Para = styled.p`
  color: white;
  font-weight: 200;
  font-size: 16px;
  margin: 20px 0 20px 0;
  @media screen and (min-width: 750px) {
    width: 80%;
  }
`;
const More = styled.a`
  color: #ff6e31;
  text-decoration: underline;
  cursor: pointer;
  display: block;
  margin-bottom: 30px;
`;
const Image = styled.img`
  border-radius: 20px;
  max-width: 100%;
  @media screen and (min-width: 750px) {
    &:first-of-type {
      grid-column: 3 / span 2;
      grid-row: 1 / span 2;
      z-index: 10;
    }
    &:last-of-type {
      grid-column: 2 / span 2;
      grid-row: 2 / span 2;
    }
  }
`;

class About extends Component {
  render() {
    return (
      <section className="about">
        <Image src={Kangaroo} alt="" />
        <div className="about-content">
          <Title>About Us</Title>
          <Para>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
            volutpat dictumst amet, mi id donec dui. Augue aenean est lobortis
            nisi eu. Tincidunt ipsum proin turpis velit imperdiet adipiscing
            amet. Duis eu sagittis quis pellentesque neque in.
          </Para>
          <Para>
            Sed amet, ornare cursus suspendisse facilisi faucibus fames. Neque
            fermentum ante habitant morbi vulputate nisi. Neque lectus aliquam.
            Tempor dictum et rutrum.
          </Para>
          <More>Learn More</More>
        </div>
        <Image src={PinnedMap} alt="" />
      </section>
    );
  }
}

export default About;
