import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
//Translation
import { useTranslation } from "react-i18next";
//Animation
import {
  linksAnimation,
  linksAnimationItem,
} from "../../animations/linksAnimation";
const NavLinks = () => {
  const { t } = useTranslation("common");
  const { pathname } = useLocation();
  return (
    <AnimatePresence>
      <LinksStyled
        className="links-container layout-main"
        variants={linksAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div variants={linksAnimationItem}>
          <Link className={pathname === "/" ? "active" : ""} to="/">
            {t("nav.home")}
          </Link>
        </motion.div>
        <motion.div variants={linksAnimationItem}>
          <Link
            className={pathname.startsWith("/production") ? "active" : ""}
            to="/production"
          >
            {t("nav.production")}
          </Link>
        </motion.div>
        <motion.div variants={linksAnimationItem}>
          <Link
            className={pathname.startsWith("/services") ? "active" : ""}
            to="/services"
          >
            {t("nav.services")}
          </Link>
        </motion.div>
        <motion.div variants={linksAnimationItem}>
          <Link
            className={pathname.startsWith("/contact") ? "active" : ""}
            to="/contact"
          >
            {t("nav.contact")}
          </Link>
        </motion.div>
      </LinksStyled>
    </AnimatePresence>
  );
};

const LinksStyled = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  a {
    color: ${(props) => props.theme.secondaryHoverColor};
    font-weight: semi-bold;
    font-size: 18px;
    transition: all 0.2s ease;
    &:hover {
      color: ${(props) => props.theme.primaryHoverColor};
    }
    &.active {
      color: ${(props) => props.theme.primaryHoverColor};
    }
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: initial;
  }
  @media (max-width: 300px) {
    a {
      font-size: 15px;
    }
  }
`;
export default NavLinks;
