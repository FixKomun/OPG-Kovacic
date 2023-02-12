import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import MobileNav from "./MobileNav";
import StandardNav from "./StandardNav";
const Nav = () => {
  return (
    <StyledNav>
      <StandardNav />
      <MobileNav />
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  background-color: ${(props) => props.theme.primaryBackgroundColor};
  min-height: 3rem;
  overflow: hidden;
`;

export default Nav;
