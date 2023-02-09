import React from "react";
import GlobalStyle from "./globalStyle";
//import styled from "styled-components";
//import { motion } from "framer-motion";
//Images
//Router
import { Routes, Route } from "react-router-dom";
//Components
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./pages/Main";
import Production from "./pages/Production";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { Navigate } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Nav />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/production" element={<Production />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

/* CREATE BASIC STRUCTURE FOR SCREEN READERS Header,Nav,Main,Footer */
export default App;
