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

const Services = () => {
  return (
    <main>
      <ServicesStyled>
        <div className="service-section layout-main-smaller">
          <h1 className="h3">Usluge u poljoprivredi</h1>
          <div className="service service-one">
            <div className="service-title" aria-labelledby="title span">
              <h2 className="h5" id="title">
                Usluga pripreme tla rotodrljačom{" "}
                <span id="span">Amazone KG 5</span>
              </h2>
            </div>
            <ul className="service-description">
              <li>
                Zatvaranje zimske brazde, priprema tla za sjetvu ili sadnju.
              </li>
              <li>
                Dubina obrade po potrebi efikasan kvalitetan profesionalan
              </li>
            </ul>
          </div>
          <div className="service service-two">
            <div
              className="service-title"
              aria-labelledby="usluga-tla amazone-catros"
            >
              <h2 className="h5" id="usluga-tla">
                Usluga pripreme tla kratkom tanjuračom{" "}
                <span id="amazone-catros"> Amazone Catros</span>
              </h2>
            </div>
            <ul className="service-description layout-main-smaller">
              <li>
                Zatvaranje zimske brazde, priprema tla za sjetvu ili sadnju
              </li>
              <li>Prašenje strništa</li>
              <li>
                Tanjurača je opremita rasipačem za sitno sjeme kojim zajedno sa
                tunjuranjem možemo odraditi sjetvu kao na primjer sjetvu zelene
                gnojidbe pokrovnih usjeva.
              </li>
            </ul>
          </div>
          <div className="service service-three">
            <div
              className="service-title"
              aria-labelledby="usluga-gnojidbe amazone-zav"
            >
              <h2 className="h5" id="usluga-gnojidbe">
                Usluga gnojidbe usjeva rasipačem
                <span id="amazone-zav"> Amazone ZAV Profis Tronic.</span>
              </h2>
            </div>
            <ul className="service-description layout-main-smaller">
              <li>Osnovna gnojidba</li>
              <li>Meliorativna gnojidba</li>
              <li>Prihrana usjeva</li>
              <li>Gnojidba svih usjeva i kultura prema zahtjevu</li>
              <li>
                Nova moderna tehnologija primjene gnojiva praćena navigacijom,
                sustavom vaganja kako bi se pratila kontinuirana jednolična
                količina razbacanog gnojiva neovisno o brzini kretanja.
              </li>
              <li>
                Kontrola sekcija kojom nemamo duplanja i bacanja gdje ne treba
                nepravilne njive su pokrivene jednolično i kvalitetno razbacanim
                gnojivom.
              </li>
              <li>
                Rasipač je opremljen i bočnim limiterom kojim ravnomjerno i
                pravilno razbacujemo gnojivo uz krajeve polja.
              </li>
            </ul>
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
        <div className="extra-info-wrapper layout-main-smaller">
          <div className="extra-info-1">
            <p>
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
        </div>
      </ServicesStyled>
    </main>
  );
};

const ServicesStyled = styled(motion.div)`
  color: ${(props) => props.theme.primaryFontColor};
  padding-bottom: 5rem;
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
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  .service-section {
    padding: 1rem 0rem;
    .service-title {
    }
    .service-description {
      padding: 2rem 2rem;
      li {
        padding: 0.5rem 0rem;
      }
    }
  }
  .extra-info-wrapper {
    padding-top: 5rem;

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
`;
export default Services;
