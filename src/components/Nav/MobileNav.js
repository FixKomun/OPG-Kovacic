import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import NavLinks from "./NavLinks";

import { linksAnimation } from "./../../animations/linksAnimation";
const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const openIcon = (
    <IoMdMenu
      className="hamburger"
      size={"30px"}
      color="#FEFFCB"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <MdOutlineClose
      className="close"
      size={"30px"}
      color="white"
      onClick={() => setOpen(!open)}
    />
  );
  return (
    <AnimatePresence mode="wait">
      <StyledNav
        key={open}
        variants={linksAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {open ? closeIcon : openIcon}
        {open && <NavLinks />}
      </StyledNav>
    </AnimatePresence>
  );
};

const StyledNav = styled(motion.div)`
  position: relative;
  height: 100%;
  .hamburger,
  .close {
    position: absolute;
    top: 5%;
    right: 7%;
    transform: translate(-5%, -5%);
    cursor: pointer;
  }
  .hamburger {
    margin-top: 5px;
  }
  display: none;
  @media (max-width: 900px) {
    display: flex;
  }
`;

export default MobileNav;
