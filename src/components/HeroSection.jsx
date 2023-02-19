import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./ButtonStyle";
import { useGlobalContext } from "../context";

const HeroSection = () => {
  const { name, image, role } = useGlobalContext();
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="hero-section-data">
          <p className="hero-top-data">Hi 👋, I'm</p>
          <h1 className="hero-heading">{name}</h1>
          <p className="hero-para">
            A {role} who loves to build things for the web.
          </p>
          <Button className="btn hireme-btn">
            <NavLink to="contact">Hire Me</NavLink>
          </Button>
        </div>
        <div className="hero-section-image">
          <picture>
            <img className="hero-img" src={image} alt="hero" />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* border: 2px solid red; */
  padding: 9rem 0;
  .hero-section-data {
    /* border: 2px solid green; */
    display: flex;
    flex-direction: column;
    justify-content: center;

    .hero-top-data {
      text-transform: uppercase;
      font-size: 1.5rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.helper};
    }

    .hero-heading {
      text-transform: uppercase;
      font-size: 6.4rem;
    }
    .hero-para {
      margin-top: 1.5rem;
      margin-bottom: 3.4rem;
      max-width: 60rem;
    }

    .btn {
      max-width: 16rem;
    }
  }

  picture {
    /* border: 2px solid violet; */
    text-align: center;

    .hero-img {
      max-width: 80%;
    }
  }
`;

export default HeroSection;
