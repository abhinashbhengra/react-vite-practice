import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
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
    </>
  );
};

export default Home;
