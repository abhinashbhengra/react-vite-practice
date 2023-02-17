import React from "react";
import HeroSection from "./components/HeroSection";

const Home = () => {
  const data = {
    name: "Abhinash",
    image: "./images/hero.svg",
  };
  return <HeroSection {...data} />;
};

export default Home;
