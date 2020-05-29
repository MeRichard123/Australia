import React, { Component } from "react";
import styled from "styled-components";
import ButtonImg from "../assets/Icons/arrow.svg";
import Card from "../components/Card";

import Picture from "../assets/img/kangaroo.jpg";

const Title = styled.h1`
  text-transform: uppercase;
  color: black;
  font-size: clamp(40px, 2.5vw, 52px);
  font-weight: 700;
  position: relative;
  &::after {
    content: "";
    display: block;
    background: black;
    width: 137px;
    height: 6px;
    border-radius: 20px;
  }
`;
const ButtonLeft = styled.button`
  background: white;
  outline: none;
  border: 2px solid black;
  border-radius: 50%;
  padding: 10px;
  margin: 10px;
  transition: all 250ms ease;
  &:hover {
    opacity: 0.5;
  }
`;
const ButtonRight = styled(ButtonLeft)`
  transform: rotate(180deg);
`;
const Paragraph = styled.p`
  padding: 0.5rem;
  margin-top: 10px;
`;

class Destinations extends Component {
  goLeft() {
    console.log("Going Left...");
  }
  goRight() {
    console.log("Going Right...");
  }
  render() {
    return (
      <div className="destinations">
        <div className="right">
          <Title>Choose your destination</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
            arcu, commodo ultrices aliquet odio laoreet at. Nibh in consequat,
            tempor tortor integer donec ac. Ac molestie arcu, fermentum eni
            purus.
          </Paragraph>
          <Paragraph>
            Tortor varius at tempor in. Penatibus sed placerat id enim consequat
            sollicitudin. Vulputate eu viverra massa velit lacus, tempus justo
            nec. Nulla enim lectus et neque, massa ipsum.
          </Paragraph>
          <ButtonLeft onClick={this.goLeft}>
            <img src={ButtonImg} alt="" />
          </ButtonLeft>
          <ButtonRight onClick={this.goRight}>
            <img src={ButtonImg} alt="" />
          </ButtonRight>
        </div>
        <div className="carousel">
          <Card title="Hello" img={Picture} />
        </div>
      </div>
    );
  }
}

export default Destinations;
