import React from "react";
import Hero from "./Hero";
import Header from "./Header";
import Logincontainers from "./Logincontainers";
import About from "./About";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Logincontainers />
      <div className="h-[1.5px] w-full bg-slate-500"></div>
      <About />
    </>
  );
}

export default Home;
