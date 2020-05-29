import React, { Component } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  border-radius: 20px;
  border: 1px solid black;
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: scale(0.8);
  transition: transform 250ms ease;
  &:hover {
    transform: scale(0.9);
  }
`;
const Title = styled.h1`
  font-family: "Dancing Script", cursive;
`;
const Image = styled.img`
  max-width: 100%;
  border-radius: 20px 20px 0 0;
`;
const Parag = styled.p`
  padding: 1.5rem;
  text-align: justify;
`;
const BookButton = styled.button`
  padding: 0.5rem 4.5rem;
  border: 1px solid #a3431a;
  border-radius: 20px;
  text-transform: uppercase;
  font-size: 21px;
  color: #a3431a;
  margin-bottom: 25px;
  &:hover {
    color: white;
    background: #a3431a;
  }
`;

class Card extends Component {
  render() {
    return (
      <CardContainer>
        <Image src={this.props.img} alt="" />
        <Title>{this.props.title}</Title>
        <Parag>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          doloribus eius modi eaque? Quisquam delectus beatae quasi vero
          provident magni tempore deleniti ad. Iure!
        </Parag>
        <BookButton>Book</BookButton>
      </CardContainer>
    );
  }
}

export default Card;
