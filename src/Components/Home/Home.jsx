import React from "react";
import Profile from "./Profile/Profile";
import { Hero } from "./Hero/Hero";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Experience from "./Experience/Experience";

const Home = () => {
  return (
    <main>
      <Hero />
      <Profile />
      <Projects />
      <Skills />
      <Experience />
    </main>
  );
};

export default Home;
