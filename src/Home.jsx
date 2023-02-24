import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import Contact from "./Contact";
import { useGlobalContext } from "./context";
import Service from "./Service";

const Home = () => {
  const { updateHomePage } = useGlobalContext();

  useEffect(() => {
    updateHomePage();
  }, []);
  return (
    <>
      <HeroSection />
      <Service />
      <Contact />
    </>
  );
};

export default Home;
