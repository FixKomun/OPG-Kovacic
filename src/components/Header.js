import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
//Images
import logo from "../img/logo.svg";
//Translation
import { useTranslation } from "react-i18next";

const Header = () => {
  const { i18n } = useTranslation("common");
  return (
    <StyledHeader>
      <div className="layout-main">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="OPG Kovačić logo" />
          </Link>
          <h1 className="logo-title">OPG Kovačić</h1>
        </div>
        <div className="language-container">
          <button
            aria-label="croatia language"
            className="active"
            onClick={() => {
              i18n.changeLanguage("hr");
              document.documentElement.lang = "hr";
            }}
          >
            HR
          </button>
          <button
            aria-label="english language"
            onClick={() => {
              i18n.changeLanguage("en");
              document.documentElement.lang = "en";
            }}
          >
            EN
          </button>
          <button
            aria-label="deutschland language"
            onClick={() => {
              i18n.changeLanguage("de");
              document.documentElement.lang = "de";
            }}
          >
            DE
          </button>
        </div>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled(motion.header)`
  border-top: 5px solid ${(props) => props.theme.primaryHoverColor};
  .layout-main {
    display: flex;
    justify-content: space-between;
  }
  .logo-container {
    display: flex;
    align-items: flex-end;
    padding: 1rem 0rem;
    gap: 1rem;
    img {
      height: 60px;
      width: 60px;
    }
    .logo-title {
      font-size: 1.4rem;
      color: ${(props) => props.theme.primaryFontColor};
    }
  }
  .language-container {
    margin-bottom: auto;

    button {
      border: none;
      background: transparent;
      padding: 0.5rem 1rem;
      cursor: pointer;
      font-size: 1rem;
      color: ${(props) => props.theme.primaryFontColor};
      font-weight: lighter;
      &.active {
        font-weight: bold;
      }
    }
    @media (max-width: 415px) {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default Header;
