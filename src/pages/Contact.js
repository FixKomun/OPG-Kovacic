import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
//Images
import facebook from "../img/facebook_dark.svg";
import instagram from "../img/instagram_dark.svg";
import linkedin from "../img/linkedin_dark.svg";
//Animation
import { pageAnimation } from "../animations/pageAnimation";
//Formik and yup
import { useFormik } from "formik";
import * as Yup from "yup";
//Email JS
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  //Formik logic
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    //Validation
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Ime mora biti 20 slova ili manje.")
        .required("Navedite ime."),
      email: Yup.string().email("Netočan email").required("Navedite email."),
      phone: Yup.number()
        .typeError("Netočan broj.")
        .required("Navedite broj mobitela ili telefona"),
      message: Yup.string()
        .max(300, "300 znakova maksimalno.")
        .required("Napišite poruku"),
    }),
    //Submit Form
    onSubmit: () => {
      setIsSubmitting(true);

      emailjs
        .sendForm(
          `${process.env.REACT_APP_YOUR_SERVICE_ID}`,
          `${process.env.REACT_APP_YOUR_TEMPLATE_ID}`,
          form.current,
          `${process.env.REACT_APP_YOUR_PUBLIC_KEY}`
        )
        .then(
          () => {
            setIsSubmitted(true);
            formik.resetForm();
          },
          (error) => {
            console.log(error.text);
          }
        );
      setTimeout(() => {
        setIsSubmitting(false);
      }, 1000);
    },
  });

  return (
    <motion.main
      variants={pageAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ContactStyled className="layout-main">
        <h1 className="h3">Kontakt</h1>
        <div className="thank-you">
          <h2 className="h5">Hvala Vam na interesu</h2>
          <p>Za sve informacije slobodno nas kontaktirajte.</p>
        </div>
        <form ref={form} onSubmit={formik.handleSubmit}>
          <div className="left-side" aria-live="assertive">
            <div
              className={`input input-name ${
                formik.touched.name && formik.errors.name
                  ? "input-error"
                  : "default"
              }`}
            >
              <label htmlFor="name">
                {formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : "Ime"}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div
              className={`input input-email ${
                formik.touched.email && formik.errors.email
                  ? "input-error"
                  : "default"
              }`}
            >
              <label htmlFor="email">
                {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : "Email"}
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div
              className={`input input-phone ${
                formik.touched.phone && formik.errors.phone
                  ? "input-error"
                  : "default"
              }`}
            >
              <label htmlFor="phone">
                {formik.touched.phone && formik.errors.phone
                  ? formik.errors.phone
                  : "Phone"}
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div
              className={`input input-message ${
                formik.touched.message && formik.errors.message
                  ? "input-error"
                  : "default"
              }`}
            >
              <label htmlFor="message">
                {formik.touched.message && formik.errors.message
                  ? formik.errors.message
                  : "Vaša poruka"}
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="button-submit"
            >
              {isSubmitting ? "ŠALJEM..." : "POŠALJI"}
            </button>
            {isSubmitted && (
              <Success>
                <p>
                  Hvala na poslanoj poruci <i>{formik.values.name}</i>.
                  Odgovorit ćemo Vam u najkraćem roku 👋
                </p>
              </Success>
            )}
          </div>
          <div className="right-side">
            <div className="logo-container">
              <Link to="https://facebook.com/pgkovacic/">
                <img src={facebook} alt="facebook" />
              </Link>
              <img src={instagram} alt="instagram" />
              <img src={linkedin} alt="linkedin" />
            </div>
            <h2 className="h4">OPG Kovačić</h2>
            <div className="contact-info-wrapper">
              <div className="contact-info">
                <h3>Adresa</h3>
                <p className="contact-address">
                  Cerovac 42 <br /> 34308 Jakšić
                </p>
                <p className="contact-email">pgkovacic@gmail.com</p>
                <p className="contact-phone"> MOB: +385 91 3360 074</p>
              </div>
            </div>
          </div>
        </form>
        <div className="opg layout-main">
          <h2 className="h4">Naša lokacija</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2803.0603732426453!2d17.808867215711363!3d45.36777674789283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475d9c3b082f1ca9%3A0x6d54e9c7a1b586e0!2zT1BHIEtvdmHEjWnEhw!5e0!3m2!1sen!2shr!4v1676206776432!5m2!1sen!2shr"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="opg-kovacic google maps"
            className="google-map"
          ></iframe>
        </div>
      </ContactStyled>
    </motion.main>
  );
};

const ContactStyled = styled(motion.div)`
  color: ${(props) => props.theme.primaryFontColor};
  .opg.layout-main {
    margin: 0 auto;
    height: 800px;

    padding: 3rem 0rem;
    h2 {
      padding: 2rem 0rem;
    }
    iframe {
      width: 100%;
      height: 80%;
      border: 3px solid ${(props) => props.theme.primaryBackgroundColor};
      border-radius: 1rem;
    }
  }
  h1 {
    padding-top: 3rem;
    padding-bottom: 1rem;
  }
  .thank-you {
    padding-bottom: 3rem;
    h2 {
      font-weight: 500;
    }
  }
  form {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 3rem;
    .left-side {
      padding-right: 1rem;
      width: 60%;
      label {
        display: block;
        padding-bottom: 0.3rem;
        &.default {
          color: ${(props) => props.theme.primaryFontColor};
        }
      }
      .input {
        margin-top: 1rem;
      }
      input {
        outline-color: transparent;
        border: none;
        max-width: 700px;
        width: 100%;
        padding: 0.7rem 1rem;
        border-radius: 5px;
        background-color: ${(props) => props.theme.inputBackgroundColor};
        font-size: 1rem;
        font-weight: 600;
        color: ${(props) => props.theme.primaryFontColor};
      }
      textarea {
        max-width: 700px;
        width: 100%;
        height: 200px;
        outline-color: transparent;
        border: none;
        padding: 0.7rem 1rem;
        background-color: ${(props) => props.theme.inputBackgroundColor};
        border-radius: 5px;
        font-size: 1rem;
        font-weight: 600;
        font-family: "Montserrat", sans-serif;
        color: ${(props) => props.theme.primaryFontColor};
        margin-bottom: 2rem;
        resize: none;
      }
      button {
        padding: 0.8rem 2.5rem;
        color: white;
        background: ${(props) => props.theme.primaryBackgroundColor};
        border-radius: 5px;
        border: none;
        transition: all 0.1s ease-out;
        letter-spacing: 1px;
        cursor: pointer;
        font-weight: 500;
        &:hover {
          background: #599453;
          color: ${(props) => props.theme.primaryFontColor};
        }
        &:active {
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
          transform: translateY(4px);
        }
      }
    }
  }
  .right-side {
    width: 40%;
    float: left;
    padding-top: 2.4rem;
    .logo-container {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
    }
    h2 {
      padding: 1rem 0rem;
    }
    p {
      padding: 0.5rem 0rem;
      font-weight: 500;
    }
    img {
      transition: all 0.2s ease;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  @media (max-width: 900px) {
    h1 {
      text-align: center;
    }
    .thank-you {
      h2,
      p {
        text-align: center;
        font-size: 19px;
        margin-top: 1rem;
      }
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      .left-side {
        width: 75%;
        padding-right: 0;
      }
      .right-side {
        width: 75%;
        padding-top: 7rem;
      }
    }
    .opg.layout-main {
      padding: 1rem 0rem;
      width: 75%;
      h2 {
        text-align: center;
      }
    }
  }
  @media (max-width: 740px) {
  }
  @media (max-width: 550px) {
    h1 {
      font-size: 35px;
    }
    h2 {
      font-size: 26px;
    }
    h3 {
      font-size: 24px;
    }
    p {
      font-size: 18px;
    }
    .thank-you {
      h2 {
        font-size: 20px;
      }
      p {
        text-align: center;
        font-size: 18px;
      }
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: center;

      .left-side {
        width: 85%;
        label {
          font-size: 0.8rem;
        }
        input {
          font-size: 0.8rem;
        }
        textarea {
          font-size: 0.8rem;
        }
        button {
          font-size: 0.7rem;
          padding: 0.8rem 2rem;
        }
      }
      .right-side {
        width: 85%;
        padding-top: 7rem;
      }
    }
    .opg.layout-main {
      width: 85%;
    }
  }
  @media (max-width: 390px) {
    h1 {
      font-size: 30px;
    }
    h2 {
      font-size: 24px;
    }
    h3 {
      font-size: 20px;
    }
    p {
      font-size: 16px;
    }
    .thank-you {
      h2 {
        font-size: 24px;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      .left-side {
        width: 100%;
        label {
        }
        input {
          font-size: 0.7rem;
        }
        textarea {
          font-size: 0.7rem;
        }
        button {
          font-size: 0.5rem;
          padding: 0.5rem 1rem;
        }
      }
      .right-side {
        width: 100%;
        padding-top: 7rem;
      }
    }
    .opg.layout-main {
      width: 100%;
    }
  }
  @media (max-width: 300px) {
    h1 {
      font-size: 25px;
    }
    h2 {
      font-size: 20px;
    }
    h3 {
      font-size: 18px;
    }
    p {
      font-size: 14px;
    }
    .thank-you {
      padding-bottom: 1rem;
      h2 {
        font-size: 20px;
      }
      p {
        font-size: 14px;
      }
    }
  }
`;

const Success = styled(motion.div)`
  margin-top: 2rem;
  padding: 1rem 2rem;
  border-radius: 10px;
  width: 100%;
  background-color: ${(props) => props.theme.inputBackgroundColor};
  p {
    font-size: 1rem;
    font-weight: 500;
  }
  @media (max-width: 900px) {
    p {
      font-size: 1rem;
    }
  }
  @media (max-width: 740px) {
    padding: 1rem 1rem;
    p {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 550px) {
    p {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 390px) {
    padding: 0.5rem 1rem;
    p {
      font-size: 0.6rem;
    }
  }
  @media (max-width: 300px) {
  }
`;

export default Contact;
