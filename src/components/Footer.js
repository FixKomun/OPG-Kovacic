import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
//Image
import program_ruralnog from "../img/program_ruralnog.png";
import accessibility from "../img/accessibility.svg";
import facebook from "../img/facebook.svg";
import instagram from "../img/instagram.svg";
import linkedin from "../img/linked_in.svg";
const Footer = () => {
  return (
    <FooterStyled>
      <div className="layout-main-smaller">
        <div className="left-container">
          <p className="description-1">
            <span>OVAJ PROJEKT SUFINANCIRAN JE SREDSTVIMA EUROPSKE UNIJE</span>{" "}
            <br /> Europski poljoprivredni fond za ruralni razvoj
          </p>
          <p className="description-2">
            <span>PROGRAM RURALNOG RAZVOJA 2014. – 2020. </span>
            <br /> Europski poljoprivredni fond za ruralni razvoj: Europa ulaže
            u ruralna područja
          </p>
          <p className="description-3">
            <span> Naziv projekta:</span> Ulaganje u pružanje usluga u
            poljoprivrednim djelatnostima <span>OPG-a Kovačić. </span>{" "}
            <span> Iznos potpore:</span> 371.975,00 HRK. Udio u sufinanciranom
            dijelu: 85% EU, 15% RH Predmet ulaganja OPG-a Kovačić je kupnja nove
            poljoprivredne mehanizacije: rasipač sitnog sjemena, kratka
            tanjurača, rotodrljača i rasipač mineralnog gnojiva sa dodatnom
            opremom. Opći cilj projekta je pokretanje nepoljoprivredne
            djelatnosti uz stvaranje novih radnih mjesta s ciljem smanjenja
            depopulacije i poticanja održivog razvoja ruralnih područja.
            Specifični cilj OPG-a Kovačić je pružanje usluga u poljoprivrednim
            djelatnostima i zapošljavanje čije će ostvarenje dovesti do
            povećanja konkurentnosti i učinkovitosti poslovanja OPG-a: OPG će
            povećati prihode i zaposliti 2 nova djelatnika
          </p>
        </div>
        <div className="right-container">
          <div className="image-eu">
            <img src={program_ruralnog} alt="program ruralnog razvoja" />
          </div>
          <div className="logo-container">
            <div className="accessibility">
              <img src={accessibility} alt="accessibility" />
            </div>
            <div className="socials">
              <Link to="https://facebook.com/pgkovacic/">
                <img src={facebook} alt="facebook" />
              </Link>
              <Link to="/">
                <img src={instagram} alt="instagram" />
              </Link>
              <Link to="/">
                <img src={linkedin} alt="linkedin" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </FooterStyled>
  );
};

const FooterStyled = styled(motion.footer)`
  border-top: 5px solid ${(props) => props.theme.primaryHoverColor};
  background-color: ${(props) => props.theme.primaryBackgroundColor};
  color: white;
  .layout-main-smaller {
    display: flex;
    gap: 5rem;

    .left-container {
      padding: 2rem 0rem;
      p {
        font-size: 14px;
        padding: 1rem 0rem;
      }
    }
    .right-container {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .logo-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 1rem;

        .socials {
          display: flex;
          img {
            width: 30px;
            height: 30px;
            margin: 0rem 1rem;
            cursor: pointer;
            transition: all 0.2s ease;
            &:hover {
              transform: scale(1.1);
            }
          }
        }
      }
    }
    @media (max-width: 550px) {
      .right-container {
        .logo-container {
          .socials {
            img {
              width: 24px;
              height: 24px;
            }
          }
        }
      }
    }
  }
  @media (max-width: 760px) {
    .layout-main-smaller {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 0rem 2rem;
    }
  }
  @media (max-width: 360px) {
    .right-container {
      .image-eu {
        img {
          transform: scale(0.8);
        }
      }
    }
    .left-container {
      p {
        font-size: 12px;
      }
    }
  }
  @media (max-width: 300px) {
    .left-container {
      p {
        font-size: 16px;
      }
    }
  }
`;

export default Footer;
