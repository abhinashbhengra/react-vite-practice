import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./context";

const Service = () => {
  const { services } = useGlobalContext();
  console.log(services);
  return (
    <Wrapper className="section">
      <h2 className="common-heading">Our Services</h2>
      <div className="container grid grid-three-column">
        {services.map((service) => {
          const { id, name } = service;
          return (
            <div key={id} className="card">
              <p>{name}</p>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Service;
