// import React from "react";

import Header from "./sections/Header";
import Hero from "./sections/Hero";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
export default App;
