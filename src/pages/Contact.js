import React, { Component } from "react";
import styled from "styled-components";

const Title = styled.h1`
  text-transform: uppercase;
  color: white;
  font-size: clamp(35px, 1vw, 52px);
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
const TitleSecondary = styled.h3`
  color: white;
  font-size: 30px;
  font-weight: 400;
  margin: 40px 0 10px 0;
  @media screen and (max-width: 900px) {
    font-size: 20px;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  color: white;
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 200;
`;
const Input = styled.input`
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  background: #c4c4c4;
  border: 0;
  outline: 0;
`;
const TextBox = styled.textarea`
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  background: #c4c4c4;
  border: 0;
  outline: 0;
`;
const SubmitButton = styled.button`
  margin-top: 20px;
  margin-bottom: 50px;
  background: #a3431a;
  border-radius: 20px;
  padding: 0.6rem 4.5rem;
  border: 0;
  font-size: 15px;
  letter-spacing: 5px;
  text-transform: uppercase;
  outline: 0;
  color: white;
  span {
    position: absolute;
    margin-left: 5px;
    transition: all 2s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }
  &:hover {
    opacity: 0.8;
  }
`;
class Contact extends Component {
  formSubmit(event) {
    event.preventDefault();
  }
  animateButton() {
    const button = document.querySelector("#SubmitButton span");
    button.style.transform = "none";
    button.style.transform = "rotate(360deg)";
  }
  render() {
    return (
      <section id="contact">
        <div className="form">
          <Title>Contact Us</Title>
          <TitleSecondary>Any questions? Message us below.</TitleSecondary>
          <Form action="https://formspree.io/xvowaony" method="POST">
            <Label htmlFor="name">Name:</Label>
            <Input type="text" id="name" name="name" required />
            <Label htmlFor="email">Email:</Label>
            <Input type="email" name="_replyto" id="email" required />
            <Label htmlFor="message">Message:</Label>
            <TextBox name="message" id="message" cols="10" rows="20"></TextBox>
            <SubmitButton
              onClick={this.animateButton}
              id="SubmitButton"
              type="submit"
            >
              Send
              <span>
                <i class="fas fa-long-arrow-alt-right"></i>
              </span>
            </SubmitButton>
          </Form>
        </div>
        <div className="MapSection">
          <div className="map">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d105995.98391436732!2d151.0600925!3d-33.8800077!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2suk!4v1591009699532!5m2!1sen!2suk"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen=""
              aria-hidden="false"
            ></iframe>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
