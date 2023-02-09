import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

//Cloudinary
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
const Main = () => {
  //Cloudinary init
  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.REACT_APP_CLOUD_NAME,
    },
    //Add the url and doimain
  });

  //Images
  const mainImage = cld.image(
    "v1675789604/opg-kovacic/Main/ravnica_6_2.deff002fdbd76a77792d-min_scca4y.png"
  );
  const misija_1 = cld.image(
    "v1675789464/opg-kovacic/Main/misija_2.ef7db714eb03ea3114f2_hcbb9q.png"
  );
  const misija_2 = cld.image(
    "v1675789463/opg-kovacic/Main/misija_1.64e722474fc50934af1c_dz6e7z.png"
  );
  return (
    <MainStyled>
      <div className="hero-container">
        <div className="image">
          <AdvancedImage cldImg={mainImage} alt="ravnica" />
        </div>
        <div className="gradient-box"></div>

        <div className="hero-wrap">
          <div className="layout-main">
            <h1 className="hero-title">
              <span className="title-1">Suvremena</span>
              <span className="title-2">poljoprivredna</span>
              <span>tehnologija</span>
            </h1>
          </div>
        </div>
      </div>
      <Section className="layout-main-smaller">
        <div className="info-container">
          <ul className="left-info">
            <li className="info-1">
              <span> OPG KOVAČIĆ</span> osnovan je 2011 godine od koje se
              aktivno bavi poljoprivrednom proizvodnjom.
            </li>
            <li className="info-2">
              Radi proširenja poslovanja osim primarne poljoprivredne
              proizvodnje OPG u 2021 godini kreće sa pružanjem usluga s
              poljoprivrednom mehanizacijom, uređajima i alatima koje obuhvaćaju
              rad s traktorima i drugim poljoprivrednim strojevima.{" "}
            </li>
          </ul>
          <ul className="right-info">
            <li className="info-3">
              Na OPG -u se proizvode{" "}
              <span>žitarice, industrijsko bilje i povrće.</span>
            </li>
            <li className="info-4">
              Značajnu ulogu za proširenje djelatnosti imao je prolazak na mjeri{" "}
              <span> 6.2.1. ruralnog razvoja</span>, potpora u pokretanje
              nepoljoprivrednih djelatnosti u ruralnim područjima.
            </li>
          </ul>
        </div>
        <div className="bottom-info">
          <p>
            Nositelj <span>Ivan Kovačić</span> je nakon završetka Poljoprivredne
            škole u Požegi nastavio školovanje na Agronomskom fakultetu u
            Zagrebu i stekao titulu <span>magistar inžejner agronomije </span>
            smjera fitomedicina.
          </p>
        </div>
      </Section>
      <MisVis>
        <div className="layout-main-smaller">
          <div className="mission ">
            <div className="left">
              <h2 className="h4">Misija</h2>
              <p>
                Suvremena poljoprivredna proizvodnja koja prati sve trendove
                održivog gospodarenja. Uz <span> &quot;Know How&quot;</span>{" "}
                postizanje maksimalne proizvodnje po jedinici površine uz bitno
                vođenje brige o <span> održivosti i očuvanju biotopa.</span>
              </p>
            </div>
            <div className="right">
              <AdvancedImage cldImg={misija_1} alt="mission" />
            </div>
          </div>
          <div className="vision">
            <div className="left">
              <AdvancedImage cldImg={misija_2} alt="vision" />
            </div>
            <div className="right">
              <h2 className="h4">Vizija</h2>
              <p>
                Uz primarnu proizvodnju <span>širenje</span> poslovanja u sektor
                pružanja usluga u poljoprivredi. <span>Ulaganje</span> u obradu
                poljoprivrednih proizvoda postizanje finalnog proizvoda i
                prodaja direktno kupcu.
              </p>
            </div>
          </div>
        </div>
      </MisVis>
    </MainStyled>
  );
};

const MainStyled = styled(motion.main)`
  .hero-container {
    position: relative;
    z-index: 1;
    .image {
      width: 100%;
      height: 30rem;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: top;
        opacity: 0.9;
      }
    }
    .gradient-box {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 10rem;
      z-index: 2;
      background: linear-gradient(
        360deg,
        #ffffff 0%,
        rgba(255, 255, 255, 0) 70.42%
      );
    }
    .hero-wrap {
      position: absolute;
      top: 0%;
      left: 0%;
      width: 100%;
      height: 100%;
    }
    .hero-title {
      transform: translate(0%, 50%);
      span {
        display: block;
        color: white;
        font-size: 70px;
        font-style: normal;
        font-weight: 800;
        line-height: 73px;
      }
    }
  }
`;

const Section = styled(motion.section)`
  padding: 0rem 2rem;

  .info-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 10rem;
    padding-top: 5rem;
    padding-bottom: 3rem;

    ul {
      li {
        padding: 1rem 0rem;
      }
    }
  }
  .bottom-info {
    padding-bottom: 5rem;
    p {
      border-radius: 1rem;
      padding: 2rem 2rem;
      z-index: 3;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    }
  }
`;

const MisVis = styled(motion.div)`
  background: rgb(148, 124, 78);
  background: linear-gradient(
    30deg,
    rgba(148, 124, 78, 1) 0%,
    rgba(195, 185, 146, 1) 100%
  );
  color: white;
  padding: 5rem 1rem;
  .mission,
  .vision {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 5rem;
    align-items: center;
    h2 {
      padding-bottom: 1rem;
    }
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .mission {
    margin-bottom: 3rem;
  }
  @media screen and (max-width: 600px) {
    .vision {
      .left {
        order: 1;
      }
    }
  }
`;
export default Main;
