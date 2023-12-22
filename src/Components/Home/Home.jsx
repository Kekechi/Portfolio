import React from "react";
import Profile from "./Profile/Profile";
import { Hero } from "./Hero/Hero";
import Projects from "./Projects/Projects";

const Home = () => {
  return (
    <main>
      <Hero />
      <Profile />
      <Projects />
    </main>
  );
};

export default Home;
