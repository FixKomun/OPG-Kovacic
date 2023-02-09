import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
//Images
import facebook from "../img/facebook_dark.svg";
import instagram from "../img/instagram_dark.svg";
import linkedin from "../img/linkedin_dark.svg";
//Formik and yup
import { useFormik } from "formik";
import * as Yup from "yup";
//Email JS
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();

  const [isSubmitted, setIsSubmitted] = useState(false);
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
    onSubmit: (values) => {
      console.log(values);

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
          },
          (error) => {
            console.log(error.text);
          }
        );
    },
  });

  return (
    <main>
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
            <button type="submit" className="button-submit">
              POŠALJI
            </button>
          </div>
          <div className="right-side">
            <div className="logo-container">
              <img src={facebook} alt="facebook" />
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
          {isSubmitted && (
            <Success>
              <p>
                Hvala na poslanoj poruci <i>{formik.values.name}</i>. Odgovorit
                ćemo Vam u najkraćem roku 👋
              </p>
            </Success>
          )}
        </form>
      </ContactStyled>
    </main>
  );
};

const ContactStyled = styled(motion.div)`
  color: ${(props) => props.theme.primaryFontColor};

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
`;

export default Contact;
