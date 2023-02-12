import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//Carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
//Images
import usluga1 from "../img/novo/usluga_1.jpg";
import usluga2 from "../img/novo/usluga_2.jpg";
import usluga3 from "../img/novo/usluga_3.jpg";
import usluga4 from "../img/novo/usluga_4.jpg";
import usluga5 from "../img/novo/usluga_5.jpg";
import usluga6 from "../img/novo/usluga_6.png";
import usluga7 from "../img/novo/usluga_7.jpeg";
import usluga8 from "../img/novo/usluga_8.jpg";
import usluga9 from "../img/novo/usluga_9.jpg";
import usluga10 from "../img/novo/usluga_10.jpeg";
import usluga11 from "../img/novo/usluga_11.jpeg";
//Animation

import { pageAnimation } from "./../animations/pageAnimation";
import { pAnimationTop, pAnimationLeft } from "../animations/serviceAnimations";
import { opacityAnimation } from "./../animations/productionAnimation";
const Services = () => {
  return (
    <main>
      <ServicesStyled
        variants={pageAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="service-section layout-main-smaller">
          <h1 className="h3">Usluge u poljoprivredi</h1>
          <div className="service service-one">
            <motion.div
              variants={pAnimationTop}
              initial="hidden"
              animate="visible"
              className="service-title"
              aria-labelledby="title span"
            >
              <h2 className="h5" id="title">
                Usluga pripreme tla rotodrljačom{" "}
                <span id="span">Amazone KG</span>
              </h2>
            </motion.div>
            <div className="list">
              <motion.ul
                variants={pAnimationLeft}
                initial="hidden"
                animate="visible"
                className="service-description"
              >
                <motion.li variants={pAnimationLeft}>
                  Zatvaranje zimske brazde, priprema tla za sjetvu ili sadnju.
                </motion.li>
                <motion.li variants={pAnimationLeft}>
                  Dubina obrade po potrebi efikasan kvalitetan profesionalan
                </motion.li>
              </motion.ul>
            </div>
          </div>
          <div className="service service-two">
            <motion.div
              variants={pAnimationTop}
              initial="hidden"
              animate="visible"
              className="service-title"
              aria-labelledby="usluga-tla amazone-catros"
            >
              <h2 className="h5" id="usluga-tla">
                Usluga pripreme tla kratkom tanjuračom{" "}
                <span id="amazone-catros"> Amazone Catros</span>
              </h2>
            </motion.div>
            <motion.ul
              variants={pAnimationLeft}
              initial="hidden"
              animate="visible"
              className="service-description layout-main-smaller"
            >
              <motion.li variants={pAnimationLeft}>
                Zatvaranje zimske brazde, priprema tla za sjetvu ili sadnju
              </motion.li>
              <motion.li variants={pAnimationLeft}>Prašenje strništa</motion.li>
              <motion.li variants={pAnimationLeft}>
                Tanjurača je opremita rasipačem za sitno sjeme kojim zajedno sa
                tunjuranjem možemo odraditi sjetvu kao na primjer sjetvu zelene
                gnojidbe pokrovnih usjeva.
              </motion.li>
            </motion.ul>
          </div>
          <div className="service service-three">
            <motion.div
              variants={pAnimationTop}
              initial="hidden"
              animate="visible"
              className="service-title"
              aria-labelledby="usluga-gnojidbe amazone-zav"
            >
              <h2 className="h5" id="usluga-gnojidbe">
                Usluga gnojidbe usjeva rasipačem
                <span id="amazone-zav"> Amazone ZAV Profis Tronic.</span>
              </h2>
            </motion.div>
            <motion.ul
              variants={pAnimationLeft}
              initial="hidden"
              animate="visible"
              className="service-description layout-main-smaller"
            >
              <motion.li variants={pAnimationLeft}>Osnovna gnojidba</motion.li>
              <motion.li variants={pAnimationLeft}>
                Meliorativna gnojidba
              </motion.li>
              <motion.li variants={pAnimationLeft}>Prihrana usjeva</motion.li>
              <motion.li variants={pAnimationLeft}>
                Gnojidba svih usjeva i kultura prema zahtjevu
              </motion.li>
              <motion.li variants={pAnimationLeft}>
                Nova moderna tehnologija primjene gnojiva praćena navigacijom,
                sustavom vaganja kako bi se pratila kontinuirana jednolična
                količina razbacanog gnojiva neovisno o brzini kretanja.
              </motion.li>
              <motion.li variants={pAnimationLeft}>
                Kontrola sekcija kojom nemamo duplanja i bacanja gdje ne treba
                nepravilne njive su pokrivene jednolično i kvalitetno razbacanim
                gnojivom.
              </motion.li>
              <motion.li variants={pAnimationLeft}>
                Rasipač je opremljen i bočnim limiterom kojim ravnomjerno i
                pravilno razbacujemo gnojivo uz krajeve polja.
              </motion.li>
            </motion.ul>
          </div>
        </div>
        <Carousel
          emulateTouch={true}
          swipeable={true}
          className="layout-main"
          ariaLabel="carousel"
        >
          <div>
            <img src={usluga1} alt="" />
          </div>
          <div>
            <img src={usluga2} alt="" />
          </div>
          <div>
            <img src={usluga3} alt="" />
          </div>
          <div>
            <img src={usluga4} alt="" />
          </div>
          <div>
            <img src={usluga5} alt="" />
          </div>
          <div>
            <img src={usluga6} alt="" />
          </div>
          <div>
            <img src={usluga7} alt="" />
          </div>
          <div>
            <img src={usluga8} alt="" />
          </div>
          <div>
            <img src={usluga9} alt="" />
          </div>
          <div>
            <img src={usluga10} alt="" />
          </div>
          <div>
            <img src={usluga11} alt="" />
          </div>
        </Carousel>

        <motion.div
          className="extra-info-wrapper layout-main-smaller"
          variants={opacityAnimation}
          initial="hidden"
          whileInView="visible"
        >
          <div className="extra-info-1">
            <p style={{ overflow: "hidden" }}>
              <span> OPG-u Kovačić </span>prolazkom na mjeri 6.2.1. ruralnog
              razvoja omogućen je ostanak u ruralnim područjima odnosno uz
              samozapošljavanje potaknuta je
              <span> diversifikacija OPG-a.</span> Diversifikacijom osim
              primarne proizvodnje ulaže se u pokretanje nepoljoprivredne
              djelatnosti pružanje usluga s poljoprivrednom mehanizacijom,
              opremom, uređajima i alatima koje obuhvaćaju rad s traktorima i
              drugim poljoprivrednim strojevima.
            </p>
          </div>
          <div className="extra-info-2">
            <h3 className="h5">Uz pomoć mjere 6.2.1 kupljeni su:</h3>
            <ol>
              <li>
                <span> Amazone rotodrljača</span> za obradu tla
              </li>
              <li>
                <span> Amazone rasipač</span> sa terminalom <span>Amatron</span>{" "}
                koji omogučuje precizno kontrolirano razbacivanje, radi lakšeg
                transpotra nabavljena su i kolica za rasipač
              </li>
              <li>
                <span>Amazone tanjurača</span> za obradu tla, na koju je
                montiran i kupljen <span> APV mali rasipač</span> sitnog sjemena
                kojim ova tanjurača proširuje svoje mogučnosti i postaje stroj
                za obradu tla i sjetvu sitnog sjemena
              </li>
            </ol>
          </div>
          <div className="extra-info-3">
            <p>
              Osim samozapošljavanja na OPG će se u okviru mjere zaposliti još
              jedan radnik kako bi se omogućilo što uspješnije obavljanje
              dopunskih djelatnosti.
            </p>
          </div>
        </motion.div>
      </ServicesStyled>
    </main>
  );
};

const ServicesStyled = styled(motion.div)`
  color: ${(props) => props.theme.primaryFontColor};
  padding-bottom: 5rem;
  .list {
    overflow: hidden;
  }
  .carousel {
    border-radius: 0.5rem;
    .control-arrow {
      background: #1c120486;
      padding: 1.3rem;
      opacity: 1;
      &:focus {
        background: #1c12044b;
      }
      &:hover {
        background: #1c12044b;
      }
    }
    .control-dots {
      li {
        width: 20px;
        height: 20px;
      }
    }
    .slide div {
      height: 100%;
      img,
      video {
        max-height: 700px;
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 0.5rem;
      }
    }
    .mobile {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
  }
  h1 {
    padding: 3rem 1rem;
  }
  .service-section {
    padding: 1rem 0rem;
    .service {
      margin-bottom: 2rem;
    }
    .service-one {
      border: 3px solid ${(props) => props.theme.secondaryBackgroundColor};
      padding: 1rem 2rem;
      border-radius: 1rem;
    }
    .service-two {
      border: 3px solid ${(props) => props.theme.primaryHoverColor};
      padding: 1rem 2rem;
      border-radius: 1rem;
    }
    .service-three {
      border: 3px solid ${(props) => props.theme.primaryBackgroundColor};
      padding: 1rem 2rem;
      border-radius: 1rem;
    }
    .service-description {
      overflow: hidden;
      padding: 2rem 2rem;
      li {
        padding: 0.5rem 0rem;
      }
    }
  }
  .extra-info-wrapper {
    margin-top: 5rem;

    .extra-info-2 {
      h3 {
        padding: 2rem 0rem;
      }
      ol {
        padding: 0rem 2rem;
        padding-bottom: 2rem;
        li {
          padding: 0.5rem 0rem;
        }
      }
    }
  }

  @media (max-width: 900px) {
    .service-section .layout-main-smaller {
      width: 100%;
    }
    h1 {
      text-align: center;
    }
    .service {
      width: 80%;
      margin: 0 auto;
    }
    .extra-info-wrapper.layout-main-smaller {
      width: 80%;
    }
  }
  @media (max-width: 740px) {
    h1 {
      font-size: 35px;
    }
    .service {
      width: 80%;
      margin: 0 auto;
      h2 {
        font-size: 20px;
      }
      ul.service-description {
        padding: 1rem 1.5rem;
        li {
          font-size: 18px;
        }
      }
    }
    .extra-info-wrapper {
      p {
        font-size: 18px;
      }
      h3 {
        font-size: 22px;
      }
      li {
        font-size: 18px;
      }
    }
  }
  @media (max-width: 550px) {
    .extra-info-wrapper.layout-main-smaller {
      width: 90%;
    }
  }
  @media (max-width: 390px) {
    h1 {
      font-size: 30px;
    }
    .service {
      width: 95%;
      margin: 0 auto;
      padding: 1rem 1rem;
      h2 {
        font-size: 18px;
      }
      ul.service-description {
        padding: 1rem 1.5rem;
        li {
          font-size: 16px;
        }
      }
    }
    .service-section .service {
      padding: 1rem 1rem;
    }
    .extra-info-wrapper.layout-main-smaller {
      width: 95%;
    }
    .extra-info-wrapper {
      margin-top: 0;
      p {
        font-size: 16px;
      }
      h3 {
        font-size: 20px;
      }
      li {
        font-size: 16px;
      }
    }
  }
  @media (max-width: 300px) {
    h1 {
      font-size: 25px;
    }
    .service {
      h2 {
        font-size: 16px;
      }
      ul.service-description {
        li {
          font-size: 14px;
        }
      }
    }
    .extra-info-wrapper {
      margin-top: 0;
      p {
        font-size: 14px;
      }
      h3 {
        font-size: 18px;
      }
      li {
        font-size: 14px;
      }
    }
  }
`;
export default Services;
