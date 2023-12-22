import React from "react";
import Profile from "./Profile/Profile";
import { Hero } from "./Hero/Hero";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

const Home = () => {
  return (
    <main>
      <Hero />
      <Profile />
      <Projects />
      <Skills />
    </main>
  );
};

export default Home;
