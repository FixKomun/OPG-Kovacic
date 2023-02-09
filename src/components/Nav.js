import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
//Translation
import { useTranslation } from "react-i18next";

const Nav = () => {
  const { t } = useTranslation("common");
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <div className="links-container layout-main">
        <Link className={pathname === "/" ? "active" : ""} to="/">
          {t("nav.home")}
        </Link>
        <Link
          className={pathname.startsWith("/production") ? "active" : ""}
          to="/production"
        >
          {t("nav.production")}
        </Link>
        <Link
          className={pathname.startsWith("/services") ? "active" : ""}
          to="/services"
        >
          {t("nav.services")}
        </Link>
        <Link
          className={pathname.startsWith("/contact") ? "active" : ""}
          to="/contact"
        >
          {t("nav.contact")}
        </Link>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  background-color: ${(props) => props.theme.primaryBackgroundColor};

  .links-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
    a {
      color: ${(props) => props.theme.secondaryHoverColor};
      font-weight: semi-bold;
      font-size: 20px;
      transition: all 0.2s ease;
      &:hover {
        color: ${(props) => props.theme.primaryHoverColor};
      }
      &.active {
        color: ${(props) => props.theme.primaryHoverColor};
      }
    }
  }
`;

export default Nav;
