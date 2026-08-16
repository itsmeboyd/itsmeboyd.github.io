import Header from "./sections/Header";
import Hero from "./sections/Hero";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import NavProvider from "./contexts/NavProvider";

function App() {
  return (
    <NavProvider>
      <Header />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </NavProvider>
  );
}

export default App;
