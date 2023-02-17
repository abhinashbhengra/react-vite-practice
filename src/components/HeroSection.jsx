import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./ButtonStyle";

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="container grid grid-two-colum">
        <div className="hero-section-data">
          <p className="hero-top-data">Hi 👋, I'm</p>
          <h1 className="hero-heading">Abhinash</h1>
          <p className="hero-para">
            I'm a frontend developer who loves to build things for the web.
          </p>
          <Button className="btn hireme-btn">
            <NavLink to="contact">Hire Me</NavLink>
          </Button>
        </div>
        <div className="hero-section-image"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default HeroSection;
