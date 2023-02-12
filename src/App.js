import React from "react";
import GlobalStyle from "./globalStyle";
//import styled from "styled-components";
//import { motion } from "framer-motion";
//Images
//Router
import { Routes, Route } from "react-router-dom";
//Components
import Nav from "./components/Nav/Nav";
import Header from "./components/Header";
import Main from "./pages/Main";
import Production from "./pages/Production";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/production" element={<Production />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

/* CREATE BASIC STRUCTURE FOR SCREEN READERS Header,Nav,Main,Footer */
export default App;
