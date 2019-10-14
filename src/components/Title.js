import React from "react";
import styled from "styled-components";
const Title = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>;
};

const StyledTitle = styled.h1`
  font-size: 1.8em;
  text-align: center;
  color: #fff;
  text-transform: capitalize;
`;

export default Title;
