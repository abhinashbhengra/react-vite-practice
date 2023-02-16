import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { GlobalStyle } from "./GlobalStyle";
// pages
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Service from "./Service";

const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24, 24, 29)",
      text: "rgb(24, 24, 29)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",
      bg: "rgb(249, 249, 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98, 84, 243)",
      border: "rgba(98, 84, 243, .5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132, 144, 255) 0%, rgb(98, 189, 242) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, .15) 0px 0px 0px 1px",
      shadowSupport: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
