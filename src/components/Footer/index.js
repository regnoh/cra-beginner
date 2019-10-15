import React from "react";
import styled from "styled-components";
import { withCopyright, withAuthor } from "../../Hoc";

const Footer = ({ copyright, author }) => {
  return (
    <StyledFooter>
      day day up - {author} - {copyright}
    </StyledFooter>
  );
};
const StyledFooter = styled.footer`
  font-size: 1.8em;
  text-align: center;
  color: #fff;
  text-transform: capitalize;
`;
export default withAuthor(withCopyright(Footer));
