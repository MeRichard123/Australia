import React, { Component } from "react";
import styled from "styled-components";
import globe from "../assets/Icons/globe.svg";
import search from "../assets/Icons/search.svg";

const Navigation = styled.nav`
  display: grid;
  grid-template-columns: 2rem auto 2.5rem;
  justify-content: space-between;
  align-items: center;
  grid-column: 1/-1;
  padding: 0 10px;
  font-weight: 200;
`;
const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: clamp(0.9rem, 2.5vw, 1.5rem);
  margin: 0 10px;
  &:hover {
    opacity: 0.75;
  }
`;

class Nav extends Component {
  render() {
    return (
      <Navigation>
        <img src={globe} alt="" className="globe" />
        <div className="nav-links">
          <NavLink href="#">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#dest">Destinations</NavLink>
          <NavLink href="#">Contact</NavLink>
        </div>
        <img src={search} alt="" className="search" />
      </Navigation>
    );
  }
}

export default Nav;
