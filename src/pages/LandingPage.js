import React, { Component } from "react";
import styled from "styled-components";
import "../App.css";
import Nav from "../components/Nav";
import { Link, BrowserRouter as Router } from "react-router-dom";
import instagram from "../assets/Icons/instagram.svg";
import twitter from "../assets/Icons/twitter.svg";
import linkedin from "../assets/Icons/Linkedin.svg";

const ExploreButton = styled.button`
  color: white;
  padding: 1rem 3.5rem;
  text-transform: uppercase;
  background: #a3431a;
  outline: none;
  border: 0;
  font-size: 1.1rem;
  letter-spacing: 2px;
  span {
    position: absolute;
    transition: all 250ms cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }
  &:hover span {
    transform: translateX(20px);
  }
`;
const FollowBadge = styled.h3`
  color: #a3431a;
  margin: 0;
  margin-bottom: 20px;
  padding: 5px;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: none;
  @supports (writing-mode: sideways-lr) {
    display: block;
    -webkit-writing-mode: sideways-lr;
    -ms-writing-mode: sideways-lr;
    writing-mode: sideways-lr;
    -webkit-text-orientation: sideways;
    text-orientation: sideways;
  }
`;

class LandingPage extends Component {
  Movescroll() {
    const Section = document.getElementById("dest");
    Section.scrollIntoView();
  }
  render() {
    return (
      <Router>
        <section className="landing">
          <Nav />
          <Link to="#dest" className="cta-button">
            <ExploreButton className="cta" onClick={this.Movescroll}>
              explore
              <span>
                <i class="fas fa-long-arrow-alt-right"></i>
              </span>
            </ExploreButton>
          </Link>

          <div className="social-links">
            <FollowBadge>folow us</FollowBadge>
            <img src={linkedin} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
          </div>
        </section>
      </Router>
    );
  }
}

export default LandingPage;
