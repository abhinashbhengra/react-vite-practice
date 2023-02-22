import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./components/ButtonStyle";

const Error = () => {
  return (
    <Wrapper>
      <img src="./images/error.svg" alt="error" />
      <NavLink to="/">
        <Button className="btn">Go Back</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 9rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .btn {
    font-size: 1.8rem;
    margin-top: 3rem;
  }
`;
export default Error;
