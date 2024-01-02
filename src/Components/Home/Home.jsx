import React from "react";
import Profile from "./Profile/Profile";
import { Hero } from "./Hero/Hero";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";

const Home = () => {
  return (
    <main>
      <Hero />
      <Profile />
      <Projects />
      <Skills />
      <Experience />
      <Education />
    </main>
  );
};

export default Home;
