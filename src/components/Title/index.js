import React from "react";
import styled from "styled-components";
import { withAuthor } from "../../Hoc";

const Title = ({ title, author }) => {
  return (
    <StyledTitle>
      {title} - {author}
    </StyledTitle>
  );
};

const StyledTitle = styled.h1`
  font-size: 1.8em;
  text-align: center;
  color: #fff;
  text-transform: capitalize;
`;
Title.defaultProps = {
  title: "Hello from home "
};
export default withAuthor(Title);
