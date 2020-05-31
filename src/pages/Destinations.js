import React, { Component } from "react";
import styled from "styled-components";
import ButtonImg from "../assets/Icons/arrow.svg";
import Card from "../components/Card";

import SydneyImage from "../assets/img/sydney.jpg";
import BirsbaneImage from "../assets/img/brisbane.jpg";
import MelbourneImage from "../assets/img/Melbourne.jpg";
import BeachImage from "../assets/img/Bondi.jpg";

const cards = [
  {
    title: "Sydney",
    image: SydneyImage,
    description: `Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit. Phasellus vitae non rutrum tellus purus. 
    Tempor interdum ut amet pellentesque. Fermentum auctor sed vitae enim
    turpis velit mauris.`,
  },
  {
    title: "Brisbane City",
    image: BirsbaneImage,
    description: `Lorem ipsuor sit amet, consectetur adipiscing elit. 
    Phasellus vitae tellus purus. Tempodum ut amet pellentesque. 
    Fermentum auctor sed vitae enim turpis velit mauris.
     Mat nunc Ferm.`,
  },
  {
    title: "Melbourne",
    image: MelbourneImage,
    description: `Eum accusantium ipsum dicta cum, nostrum nihil ullam 
    sunt saepe officia dolor recusandae modi rerum veniam ullam, 
    delectus hic dignissimos numquam`,
  },
  {
    title: "Bondi Beach",
    image: BeachImage,
    description: `Vulputate eu viverra massa velit lacus, tempus justo, 
    officia dolor recusandae modi rerum veniam ullam, auctor sed vitae
    enim turpis velit mauris. Mat nunc Ferm.`,
  },
];

const Title = styled.h1`
  text-transform: uppercase;
  color: black;
  font-size: clamp(35px, 3vw, 52px);
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
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
    };
    this.goLeft = this.goLeft.bind(this);
    this.goRight = this.goRight.bind(this);
  }

  goLeft() {
    const { x } = this.state;
    x === 0
      ? this.setState({ x: -100 * (cards.length - 1) })
      : this.setState({ x: x + 100 });
  }
  goRight() {
    const { x } = this.state;
    x === -100 * (cards.length - 1)
      ? this.setState({ x: 0 })
      : this.setState({ x: x - 100 });
    console.log(x);
  }
  render() {
    return (
      <div className="destinations" id="dest">
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
            <img src={ButtonImg} alt="" className="outlineNone" />
          </ButtonLeft>
          <ButtonRight onClick={this.goRight}>
            <img src={ButtonImg} alt="" className="outlineNone" />
          </ButtonRight>
        </div>
        <div className="left">
          <div
            className="carousel"
            style={{ transform: `translateX(${this.state.x}%)` }}
          >
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                img={card.image}
                desc={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Destinations;
