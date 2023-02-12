import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
/*Images*/
//Logos
import corn from "../img/corn.svg";
import barley from "../img/barley.svg";
import wheat from "../img/wheat.svg";
import oat from "../img/oat.svg";
import cabbage from "../img/cabbage.svg";
import soy from "../img/grah.svg";
import potato from "../img/potato.svg";
import duhan from "../img/duhan.svg";
//Animations
import { pageAnimation } from "../animations/pageAnimation";
import {} from "../animations/mainAnimations";
import {
  logoAnimation,
  logoAnimationItem,
  pAnimationLeft,
  pAnimationRight,
  opacityAnimation,
} from "../animations/productionAnimation";
//Carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
//REACT VIDEO
import { DefaultPlayer as Video } from "react-html5video/dist";
import "react-html5video/dist/styles.css";
//Cloudinary
const Production = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.REACT_APP_CLOUD_NAME,
    },
  });

  //Carousel 1 images
  const kukuruz_1 = cld.image(
    "v1675853219/opg-kovacic/Production/kukuruz_1_ah7q0a.jpg"
  );
  const kukuruz_2 = cld.image(
    "v1675853220/opg-kovacic/Production/kukuruz_2_xafd8f.jpg"
  );
  const kukuruz_3 = cld.image(
    "v1675853220/opg-kovacic/Production/kukuruz_3_aphxz9.jpg"
  );
  const psenica_1 = cld.image(
    "v1675853218/opg-kovacic/Production/psenica_1_erewue.jpg"
  );
  const psenica_2 = cld.image(
    "v1675853220/opg-kovacic/Production/psenica_2_lonmry.jpg"
  );
  const zob = cld.image("v1675853219/opg-kovacic/Production/zob_1_ehm3rj.jpg");
  const nesto = cld.image(
    "v1675853220/opg-kovacic/Production/nesto_irwzsr.jpg"
  );
  const ravnica_1 = cld.image(
    "v1675853219/opg-kovacic/Production/ravnica_4_f4c3s7.jpg"
  );
  const ravnica_2 = cld.image(
    "v1675853247/opg-kovacic/Production/ravnica_novo_1_q0etxx.jpg"
  );
  const ravnica_3 = cld.image(
    "v1675853247/opg-kovacic/Production/ravnica_novo_2_ojgglc.jpg"
  );
  const ravnica_4 = cld.image(
    "v1675853247/opg-kovacic/Production/ravnica_novo_3_s6spsl.jpg"
  );
  //Carousel 2 images
  const krumpirMain = cld.image(
    "v1675868644/opg-kovacic/Production/krumpir_jfbnfo.jpg"
  );
  const grah_1 = cld.image(
    "v1675868645/opg-kovacic/Production/grah1_abgsko.jpg"
  );
  const krumpir_1 = cld.image(
    "v1675868667/opg-kovacic/Production/krumpir_1_upmajp.jpg"
  );
  const krumpir_2 = cld.image(
    "v1675868667/opg-kovacic/Production/krumpir_2_lrv2ha.jpg"
  );
  const krumpir_3 = cld.image(
    "v1675868665/opg-kovacic/Production/krumpir_3_mbuias.jpg"
  );
  const krumpir_4 = cld.image(
    "v1675868665/opg-kovacic/Production/krumpir_4_vntokg.jpg"
  );
  //Carousel 3 images
  const duhanMain = cld.image(
    "v1675869094/opg-kovacic/Production/duhan_bb0uql.jpg"
  );
  const duhan_2 = cld.image(
    "v1675869095/opg-kovacic/Production/duhan_2_acjn5y.jpg"
  );
  const duhan_3 = cld.image(
    "v1675869095/opg-kovacic/Production/duhan_3_amp7fb.jpg"
  );
  const duhan_4 = cld.image(
    "v1675869092/opg-kovacic/Production/duhan_4_lsruwy.jpg"
  );
  const duhan_6 = cld.image(
    "v1675869093/opg-kovacic/Production/duhan_6_grnzot.jpg"
  );
  const duhan_7 = cld.image(
    "v1675869092/opg-kovacic/Production/duhan_7_me1nax.jpg"
  );
  const duhan_8 = cld.image(
    "v1675869092/opg-kovacic/Production/duhan_8_cyo9ih.jpg"
  );
  const duhan_9 = cld.image(
    "v1675869092/opg-kovacic/Production/duhan_9_gxvpdm.jpg"
  );
  const duhan_10 = cld.image(
    "v1675869093/opg-kovacic/Production/duhan_10_evf7nk.jpg"
  );
  const duhan_11 = cld.image(
    "v1675869093/opg-kovacic/Production/duhan_11_dn2vur.jpg"
  );

  return (
    <MainStyled
      variants={pageAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ProductionStyled className="layout-main-smaller production-one">
        <h1 className="h3">Ratarska proizvodnja</h1>
        <motion.div
          variants={logoAnimation}
          initial="hidden"
          animate="visible"
          className="product-container"
        >
          <motion.div
            variants={logoAnimationItem}
            className="product-card product-one"
          >
            <img src={corn} alt="" />
            <h2 className="h5">Kukuruz</h2>
          </motion.div>
          <motion.div
            variants={logoAnimationItem}
            className="product-card product-two"
          >
            <img src={wheat} alt="" />
            <h2 className="h5">Pšenica</h2>
          </motion.div>
          <motion.div
            variants={logoAnimationItem}
            className="product-card product-three"
          >
            <img src={barley} alt="" />
            <h2 className="h5">Ječam</h2>
          </motion.div>
          <motion.div
            variants={logoAnimationItem}
            className="product-card product-four"
          >
            <img src={oat} alt="" />
            <h2 className="h5">Zob</h2>
          </motion.div>
        </motion.div>
        <div className="production-one-info">
          <motion.div
            variants={pAnimationLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="product-card"
          >
            <div className="mobile product-card-img">
              <img src={corn} alt="" />
              <h2 className="h5">Kukuruz</h2>
            </div>
            <p>
              Proizvodnja <span>kukuruza</span> ovisno o proizvodnoj godini
              plodoredu se odvija na površini od <span> 25 do 30 hektara.</span>
            </p>
          </motion.div>
          <motion.div
            variants={pAnimationRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="product-card"
          >
            <div className="mobile product-card-img">
              <img src={barley} alt="" />
              <h2 className="h5">Ječam</h2>
            </div>
            <p>
              Proizvodnja <span>ječma</span> ovisno o proizvodnoj godini,
              plodoredu odvija se na površini od <span>15 do 20 hektara.</span>
            </p>
          </motion.div>
          <motion.div
            variants={pAnimationLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="product-card"
          >
            <div className=" mobile product-card-img">
              <img src={wheat} alt="" />
              <h2 className="h5">Pšenica</h2>
            </div>
            <p>
              Proizvodnja <span>pšenice</span> ovisno o proizvodnoj godini,
              plodoredu odvija se na površini od <span>15 do 20 hektara.</span>
            </p>
          </motion.div>
          <motion.div
            variants={pAnimationRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="product-card"
          >
            <div className="mobile product-card-img">
              <img src={oat} alt="" />
              <h2 className="h5">Zob</h2>
            </div>
            <p>
              Proizvodnja <span>zobi</span> ovisno o proizvodnoj godini,
              plodoredu odvija se na površini od <span>5 do 10 hektara.</span>
            </p>
          </motion.div>
        </div>
      </ProductionStyled>

      <Carousel
        emulateTouch={true}
        swipeable={true}
        className="carousel-1 layout-main"
        ariaLabel="carousel"
        showThumbs={false}
        showStatus={false}
      >
        <Video className="carousel-video" muted controls={false}>
          <source
            src="https://res.cloudinary.com/dycpefev6/video/upload/v1675873999/opg-kovacic/Production/Videos/ravnica_v_h.mp4"
            type="video/webm"
          />
        </Video>
        <div>
          <AdvancedImage cldImg={kukuruz_1} alt="kukuruz 1" />
        </div>
        <div>
          <AdvancedImage cldImg={kukuruz_2} alt="kukuruz 2" />
        </div>
        <div>
          <AdvancedImage cldImg={kukuruz_3} alt="kukuruz 3" />
        </div>
        <div>
          <AdvancedImage cldImg={psenica_1} alt="psenica 1" />
        </div>
        <div>
          <AdvancedImage cldImg={psenica_2} alt="psenica 2" />
        </div>
        <div>
          <AdvancedImage cldImg={zob} alt="zob" />
        </div>
        <div>
          <AdvancedImage cldImg={nesto} alt="nesto" />
        </div>
        <div>
          <AdvancedImage cldImg={ravnica_1} alt="ravnica 1" />
        </div>
        <div>
          <AdvancedImage cldImg={ravnica_2} alt="ravnica 2" />
        </div>
        <div>
          <AdvancedImage cldImg={ravnica_3} alt="ravnica 3" />
        </div>
        <div>
          <AdvancedImage cldImg={ravnica_4} alt="ravnica 4" />
        </div>
      </Carousel>
      <div className="line"></div>
      <ProductionStyled className="layout-main-smaller production-two">
        <motion.h1
          variants={opacityAnimation}
          initial="hidden"
          whileInView="visible"
          className="h3"
        >
          Povrtlarske kulture
        </motion.h1>
        <motion.div
          variants={logoAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="product-container"
        >
          <motion.div
            variants={logoAnimationItem}
            className="product-card product-one"
          >
            <img src={cabbage} alt="" />
            <h2 className="h5">Kupus</h2>
          </motion.div>
          <motion.div
            variants={logoAnimationItem}
            className="product-card product-two"
          >
            <img className="logo-grah" src={soy} alt="" />
            <h2 className="h5 ">Grah</h2>
          </motion.div>
          <motion.div
            variants={logoAnimationItem}
            className="product-card product-three"
          >
            <img src={potato} alt="" />
            <h2 className="h5">Krumpir</h2>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="production-two-info"
        >
          <div className="upper">
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
              className="product-card description"
            >
              <div className="mobile product-card-img">
                <div className="card">
                  <img src={cabbage} alt="" />
                  <h2 className="h5">Kupus</h2>
                </div>
                <div className="card">
                  <img src={soy} alt="" />
                  <h2 className="h5">Grah</h2>
                </div>
                <div className="card">
                  <img src={potato} alt="" />
                  <h2 className="h5">Krumpir</h2>
                </div>
              </div>
              <p>
                Proizvodnja povrtlarskih kultura se odvija na površini od 5 do
                10ha ovisno o potrebama tržišta. <span>Grah</span> se uzgaja za
                zrno i kao mladi grah mahunar za <span>svježu upotrebu </span>{" "}
                ili <span>kiseljenje</span> . <span>Krumpir</span> je u ponudi
                kao mladi od 7 mjeseca i imamo ga na stanju do 5 mjeseca
                <span> za prodaju</span> u našem skladištu. <span>Kupus</span>{" "}
                uzgajamo za <span>kiseljenje</span> i svježi mladi za{" "}
                <span>salate</span> .
              </p>
            </motion.div>
            <div className="image">
              <Carousel
                className="mini-carousel"
                infiniteLoop
                autoPlay
                emulateTouch={true}
                swipeable={true}
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
                showArrows={false}
              >
                <div>
                  <AdvancedImage cldImg={grah_1} alt="" />
                </div>
                <div>
                  <AdvancedImage cldImg={krumpir_1} alt="" />
                </div>
                <div>
                  <AdvancedImage cldImg={krumpir_2} alt="" />
                </div>
                <div>
                  <AdvancedImage cldImg={krumpir_3} alt="" />
                </div>
                <div>
                  <AdvancedImage cldImg={krumpir_4} alt="" />
                </div>
                <Video className="carousel-video" muted controls={false}>
                  <source
                    src="https://res.cloudinary.com/dycpefev6/video/upload/v1675881258/opg-kovacic/Production/Videos/mov_4_fulgwo.mov"
                    type="video/webm"
                  />
                </Video>
                <Video className="carousel-video" muted controls={false}>
                  <source
                    src="https://res.cloudinary.com/dycpefev6/video/upload/v1676139487/opg-kovacic/Production/Videos/Salata_yt_xlzimp.mp4"
                    type="video/webm"
                  />
                </Video>
              </Carousel>
            </div>
          </div>
          <div className="image-absolute-box">
            <div className="image-absolute">
              <AdvancedImage cldImg={krumpirMain} alt="krumpir" />
            </div>
          </div>
        </motion.div>
      </ProductionStyled>
      <div className="line"></div>
      <ProductionStyled className="layout-main-smaller production-three">
        <motion.h1
          variants={opacityAnimation}
          initial="hidden"
          whileInView="visible"
          className="h3"
        >
          Industrijske kulture
        </motion.h1>
        <motion.div
          variants={logoAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="product-container"
        >
          <motion.div
            variants={logoAnimationItem}
            className="product-card product-one"
          >
            <img className="logo-duhan" src={duhan} alt="" />
            <h2 className="h5">Duhan</h2>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="production-three-info"
        >
          <div className="upper">
            <div className="image">
              <Carousel
                className="mini-carousel"
                infiniteLoop
                autoPlay
                emulateTouch={true}
                swipeable={true}
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
                showArrows={false}
              >
                <div>
                  <AdvancedImage cldImg={duhan_2} alt="" />
                </div>
                <Video className="carousel-video" muted controls={false}>
                  <source
                    src="https://res.cloudinary.com/dycpefev6/video/upload/v1675881256/opg-kovacic/Production/Videos/mov_2_id2yoj.mov"
                    type="video/webm"
                  />
                </Video>

                <div>
                  <AdvancedImage cldImg={duhan_3} alt="" />
                </div>
                <div>
                  <AdvancedImage cldImg={duhan_4} alt="" />
                </div>
                <Video className="carousel-video" muted controls={false}>
                  <source
                    src="https://res.cloudinary.com/dycpefev6/video/upload/v1675881236/opg-kovacic/Production/Videos/mov_1_wzth7h.mov"
                    type="video/webm"
                  />
                </Video>

                <div>
                  <AdvancedImage cldImg={duhan_6} alt="" />
                </div>
                <div>
                  <AdvancedImage cldImg={duhan_7} alt="" />
                </div>
                <div>
                  <AdvancedImage cldImg={duhan_8} alt="" />
                </div>
                <div>
                  <AdvancedImage cldImg={duhan_9} alt="" />
                </div>
                <div>
                  <AdvancedImage cldImg={duhan_10} alt="" />
                </div>
                <div>
                  <AdvancedImage cldImg={duhan_11} alt="" />
                </div>
                <Video className="carousel-video" muted controls={false}>
                  <source
                    src="https://res.cloudinary.com/dycpefev6/video/upload/v1675941921/opg-kovacic/Production/Videos/duhan_v_v_bs6xyc.mp4"
                    type="video/webm"
                  />
                </Video>
              </Carousel>
            </div>
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
              className="product-card description"
            >
              <div className="mobile product-card-img">
                <img src={duhan} alt="" />
                <h2 className="h5">Duhan</h2>
              </div>
              <p>
                Proizvodnja povrtlarskih kultura se odvija na površini od 5 do
                10ha ovisno o potrebama tržišta. <span>Grah</span> se uzgaja za
                zrno i kao mladi grah mahunar za <span>svježu upotrebu </span>{" "}
                ili <span>kiseljenje</span> . <span>Krumpir</span> je u ponudi
                kao mladi od 7 mjeseca i imamo ga na stanju do 5 mjeseca
                <span> za prodaju</span> u našem skladištu. <span>Kupus</span>{" "}
                uzgajamo za <span>kiseljenje</span> i svježi mladi za{" "}
                <span>salate</span> .
              </p>
            </motion.div>
          </div>
          <div className="image-absolute-box">
            <div className="image-absolute">
              <AdvancedImage cldImg={duhanMain} alt="krumpir" />
            </div>
          </div>
        </motion.div>
      </ProductionStyled>
    </MainStyled>
  );
};

const MainStyled = styled(motion.main)`
  color: ${(props) => props.theme.primaryFontColor};
  .carousel-1 {
    padding-bottom: 10rem;
  }

  .mini-carousel {
    .slider {
      height: 600px;
    }
  }
  .production-one {
    margin-bottom: 5rem;
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
`;

const ProductionStyled = styled(motion.div)`
  margin-bottom: 3rem;
  .mobile {
    display: none;
  }
  h1 {
    padding-top: 3rem;
  }
  .logo-grah,
  .logo-duhan {
    margin-right: 0.6rem;
  }
  .upper {
    overflow: hidden;
  }

  .product-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 3rem 0rem;
    flex-wrap: wrap;
    overflow: hidden;
    .product-card {
      display: flex;
      align-items: center;
      overflow: hidden;
      img {
        width: 86px;
        height: 86px;
        padding-bottom: 1rem;
      }
    }
  }
  .production-one-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 3rem;
    justify-items: center;
    padding-bottom: 5rem;
    overflow: hidden;
    align-items: center;
    p {
      width: 80%;
      padding: 2rem;
      border: 1px solid #adadad;
      border-radius: 1rem;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
      margin: 0 auto;
    }
  }
  .production-two-info {
    position: relative;
    .upper {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
      gap: 3rem;
      z-index: 3;
      p {
        border: 1px solid #adadad;
        border-radius: 1rem;
        padding: 2rem;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
      }
      .image {
        width: 100%;
        z-index: 4;
        img {
          position: relative;
          width: 100%;
          max-height: 600px;
          height: 100%;
          object-fit: cover;
          border-radius: 1rem;
          z-index: 3;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
        }
      }
    }
    .image-absolute-box {
      height: 600px;

      .image-absolute {
        max-height: 600px;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 40%;
        left: 0;
        z-index: 2;
        img {
          width: 100%;
          height: 100%;
          border-radius: 1rem;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
          object-fit: cover;
        }
      }
    }
    .mini-carousel {
      width: 90%;
      border-radius: 1rem;
      .slider-wrapper {
        border-radius: 1rem;
      }
    }
  }
  .production-three-info {
    position: relative;
    .upper {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
      gap: 3rem;
      z-index: 3;
      p {
        border: 1px solid #adadad;
        border-radius: 1rem;
        padding: 2rem;

        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
      }
      .image {
        width: 90%;
        z-index: 4;
        justify-self: end;
        img {
          position: relative;
          width: 100%;
          max-height: 600px;
          height: 100%;
          object-fit: cover;
          border-radius: 1rem;
          z-index: 3;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
        }
      }
    }
    .image-absolute-box {
      height: 600px;

      .image-absolute {
        max-height: 600px;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 40%;
        left: 0;
        z-index: 2;
        img {
          width: 100%;
          height: 100%;
          border-radius: 1rem;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
          object-fit: cover;
        }
      }
    }
    .slider {
      height: 600px;
    }
    .mini-carousel {
      width: 100%;
      border-radius: 1rem;
      .slider-wrapper {
        border-radius: 1rem;
      }
    }
  }
  @media (max-width: 1096px) {
    .production-two-info,
    .production-three-info {
      .upper .image {
        width: 60%;
        height: 800px;
        margin: 0 auto;
      }
      .mini-carousel {
        width: 100%;
        height: 800px;
        img {
          height: 800px;
        }
      }
      .image-absolute-box {
        display: none;
      }
    }
    .production-three-info {
      .upper .image {
        order: 1;
      }
    }
  }
  @media (max-width: 900px) {
    div.product-container {
      display: none !important;
    }

    .h3 {
      padding-bottom: 3rem;
      text-align: center;
    }

    .mobile {
      display: flex;
      padding-top: 1rem;
      img {
        width: 64px;
        height: 64px;
      }
    }
    .product-card {
      width: 70%;
      margin: 0 auto;
      border: 1px solid #adadad;
      border-radius: 1rem;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
      p {
        width: 100%;
        padding: 2rem;
        border: 0;
        box-shadow: none;
      }
    }
    .production-one-info,
    .production-three-info {
      .product-card {
        .product-card-img {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      }
    }
    .production-two-info,
    .production-three-info {
      .upper p {
        width: 100%;
        padding: 2rem;
        border: 0;
        box-shadow: none;
      }
    }
    .product-card-img {
      width: 100%;
      justify-content: space-around;
      .card {
        display: flex;
        align-items: center;
        flex-direction: column;
      }
    }
  }
  .description {
    width: 70%;
    margin: 0 auto;
  }

  @media (min-width: 901px) {
    .product-container {
      display: flex !important;
    }
  }
  @media (max-width: 740px) {
    .production-two-info,
    .production-three-info {
      .upper .image {
        width: 80%;
        height: 800px;
        margin: 0 auto;
      }
    }
  }
  @media (max-width: 550px) {
    h1 {
      font-size: 35px;
    }
    h2 {
      font-size: 20px;
    }
    p {
      font-size: 18px;
    }
    .production-two-info .upper,
    .production-three-info .upper {
      grid-template-columns: 1fr;
    }
    .production-one-info,
    .production-two-info,
    .production-three-info {
      grid-template-columns: 1fr;
      .product-card {
        width: 100%;
        max-width: 350px;
        margin: 0 auto;
      }
      .product-card-img {
        img {
          margin-bottom: 0.5rem;
        }
      }
    }
  }
  @media (max-width: 390px) {
    .production-two-info,
    .production-three-info {
      .upper .image {
        width: 100%;
        height: 800px;
        margin: 0 auto;
      }
    }
    p {
      font-size: 14px;
      line-height: 22px;
    }
    h2 {
      font-size: 24px;
    }
    h1 {
      font-size: 30px;
    }
    .product-card-img {
      img {
        width: 48px;
        height: 48px;
      }
    }
  }
  @media (max-width: 300px) {
    .product-card p {
      padding: 0.8rem;
    }
    .upper .product-card p {
      padding: 0.8rem;
    }
    h2 {
      font-size: 20px;
    }
  }
`;
export default Production;
