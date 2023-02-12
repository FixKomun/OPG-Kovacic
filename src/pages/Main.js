import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

//Cloudinary
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
//Animation
import {
  pAnimationLeft,
  pAnimationRight,
  pAnimationBottom,
  pAnimationBottom2,
  imgAnimationRight,
  imgAnimationLeft,
} from "../animations/mainAnimations";
import { pageAnimation } from "./../animations/pageAnimation";
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
    <MainStyled
      variants={pageAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="hero-container">
        <div className="image">
          <AdvancedImage cldImg={mainImage} alt="ravnica" />
        </div>
        <div className="gradient-box"></div>

        <div className="hero-wrap">
          <div className="layout-main">
            <h1 className="hero-title">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="title-1"
              >
                Suvremena
              </motion.span>
              <motion.span
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="title-2"
              >
                poljoprivredna
              </motion.span>
              <motion.span
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 1 }}
                className="title-3"
              >
                tehnologija
              </motion.span>
            </h1>
          </div>
        </div>
      </div>
      <Section className="layout-main-smaller">
        <div className="info-container">
          <motion.ul
            variants={pAnimationLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="left-info"
          >
            <motion.li variants={pAnimationLeft} className="info-1">
              <span> OPG KOVAČIĆ</span> osnovan je 2011 godine od koje se
              aktivno bavi poljoprivrednom proizvodnjom.
            </motion.li>
            <motion.li variants={pAnimationLeft} className="info-2">
              Radi proširenja poslovanja osim primarne poljoprivredne
              proizvodnje OPG u 2021 godini kreće sa pružanjem usluga s
              poljoprivrednom mehanizacijom, uređajima i alatima koje obuhvaćaju
              rad s traktorima i drugim poljoprivrednim strojevima.{" "}
            </motion.li>
          </motion.ul>
          <motion.ul
            variants={pAnimationRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="right-info"
          >
            <motion.li variants={pAnimationRight} className="info-3">
              Na OPG -u se proizvode{" "}
              <span>žitarice, industrijsko bilje i povrće.</span>
            </motion.li>
            <motion.li variants={pAnimationRight} className="info-4">
              Značajnu ulogu za proširenje djelatnosti imao je prolazak na mjeri{" "}
              <span> 6.2.1. ruralnog razvoja</span>, potpora u pokretanje
              nepoljoprivrednih djelatnosti u ruralnim područjima.
            </motion.li>
          </motion.ul>
        </div>
        <div className="bottom-info">
          <motion.p
            variants={pAnimationBottom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Nositelj <span>Ivan Kovačić</span> je nakon završetka Poljoprivredne
            škole u Požegi nastavio školovanje na Agronomskom fakultetu u
            Zagrebu i stekao titulu <span>magistar inžejner agronomije </span>
            smjera fitomedicina.
          </motion.p>
        </div>
      </Section>
      <MisVis>
        <div className="layout-main-smaller">
          <div className="mission ">
            <motion.div
              variants={pAnimationBottom2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              className="left"
            >
              <motion.h2
                variants={pAnimationBottom2}
                viewport={{ once: true, amount: 0.7 }}
                className="h4"
              >
                Misija
              </motion.h2>
              <motion.p variants={pAnimationBottom2}>
                Suvremena poljoprivredna proizvodnja koja prati sve trendove
                održivog gospodarenja. Uz <span> &quot;Know How&quot;</span>{" "}
                postizanje maksimalne proizvodnje po jedinici površine uz bitno
                vođenje brige o <span> održivosti i očuvanju biotopa.</span>
              </motion.p>
            </motion.div>
            <motion.div
              variants={imgAnimationRight}
              initial="hidden"
              whileInView="visible"
              className="right"
              viewport={{ once: true, amount: 0.3 }}
            >
              <AdvancedImage cldImg={misija_1} alt="mission" />
            </motion.div>
          </div>
          <div className="vision">
            <motion.div
              variants={imgAnimationLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="left"
            >
              <AdvancedImage cldImg={misija_2} alt="vision" />
            </motion.div>
            <motion.div
              variants={pAnimationBottom2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="right"
            >
              <motion.h2 variants={pAnimationBottom2} className="h4">
                Vizija
              </motion.h2>
              <motion.p variants={pAnimationBottom2}>
                Uz primarnu proizvodnju <span>širenje</span> poslovanja u sektor
                pružanja usluga u poljoprivredi. <span>Ulaganje</span> u obradu
                poljoprivrednih proizvoda postizanje finalnog proizvoda i
                prodaja direktno kupcu.
              </motion.p>
            </motion.div>
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
      height: 50rem;
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
      display: inline-block;
      overflow: hidden;
      span {
        display: block;
        color: white;
        font-size: 80px;
        font-style: normal;
        font-weight: 800;
        line-height: 100px;
        padding: 0rem 1rem;
      }
    }
  }
  @media (max-width: 900px) {
    .hero-container {
      .hero-title {
        span {
          font-size: 60px;
          line-height: 80px;
        }
      }
      .image {
        height: 40rem;
      }
    }
  }
  @media (max-width: 740px) {
    .hero-container {
      .hero-title {
        span {
          font-size: 60px;
          line-height: 80px;
        }
      }
    }
  }
  @media (max-width: 550px) {
    .hero-container {
      .hero-title {
        span {
          font-size: 40px;
          line-height: 60px;
        }
      }
      .image {
        height: 33rem;
      }
    }
  }
  @media (max-width: 390px) {
    .hero-container {
      .hero-title {
        span {
          font-size: 30px;
          line-height: 40px;
        }
      }
      .image {
        height: 24rem;
      }
    }
  }
  @media (max-width: 300px) {
    .hero-container {
      .hero-title {
        span {
          font-size: 24px;
          line-height: 40px;
        }
      }
      .image {
        height: 22rem;
      }
    }
  }
`;

const Section = styled(motion.section)`
  padding: 2rem 2rem;

  .info-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 10rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
    overflow: hidden;
    ul {
      li {
        padding: 1rem 0rem;
      }
    }
    .left-info,
    .right-info {
      padding-left: 2rem;
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
  @media (max-width: 900px) {
    .info-container {
      grid-template-columns: none;
      grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
    }
  }
  @media (max-width: 740px) {
  }
  @media (max-width: 550px) {
    .info-container {
      ul {
        li {
          font-size: 18px;
        }
      }
    }
    .bottom-info {
      p {
        font-size: 18px;
      }
    }
  }
  @media (max-width: 390px) {
    padding: 0rem 0.7rem;
    .info-container {
      padding-top: 2rem;
      padding-bottom: 2rem;
      .left-info,
      .right-info {
        padding-left: 1rem;
      }
      ul {
        li {
          font-size: 14px;
        }
      }
    }
    .bottom-info {
      padding-bottom: 2rem;
      p {
        font-size: 14px;
        padding: 1rem 1rem;
      }
    }
  }
  @media (max-width: 300px) {
    .info-container {
      ul {
        li {
          font-size: 12px;
        }
      }
    }
    .bottom-info {
      p {
        font-size: 12px;
      }
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
  overflow: hidden;
  .mission,
  .vision {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 5rem;
    align-items: center;
    .left,
    .right {
      overflow: hidden;
    }
    h2 {
      padding-bottom: 1rem;
    }
    img {
      width: 100%;
      object-fit: cover;
    }
    p {
      line-height: 30px;
    }
  }
  .mission {
    margin-bottom: 3rem;
  }
  @media screen and (max-width: 760px) {
    .vision {
      .left {
        order: 1;
      }
    }
  }
  @media (max-width: 900px) {
    .mission,
    .vision {
      p {
        line-height: 25px;
        font-size: 19px;
      }
    }
  }
  @media (max-width: 740px) {
  }
  @media (max-width: 550px) {
    .mission,
    .vision {
      p {
        font-size: 18px;
      }
      h2 {
        font-size: 30px;
      }
    }
  }
  @media (max-width: 390px) {
    .mission,
    .vision {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 5rem;
      p {
        font-size: 14px;
        line-height: 22px;
      }
      h2 {
        font-size: 24px;
      }
    }
  }
  @media (max-width: 300px) {
    .mission,
    .vision {
      p {
        font-size: 14px;
      }
      h2 {
        font-size: 20px;
      }
    }
  }
`;
export default Main;
