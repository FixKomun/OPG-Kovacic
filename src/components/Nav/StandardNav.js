import React from "react";
import NavLinks from "./NavLinks";
import styled from "styled-components";
const StandardNav = () => {
  return (
    <StyledNav>
      <NavLinks />
    </StyledNav>
  );
};

const StyledNav = styled.div`
  height: 100%;
  @media (max-width: 900px) {
    display: none;
  }
`;

export default StandardNav;
