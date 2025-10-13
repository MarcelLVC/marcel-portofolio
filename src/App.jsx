import React from "react";
import Navigation from "./components/Navigation";
import { useUserIntersectionObs } from "./hooks/userInterSectionObs";
import { useUserScrolltoTop } from "./hooks/userScrolltoTop";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/Scrolltotop";

const App =()=>{
  const hasAnimated = useUserIntersectionObs();
  const showScrolltop = useUserScrolltoTop();

  return (
    <div className="min-h-screen bg-white text-black ">
      <Navigation />
      <Hero hasAnimated={hasAnimated}/>
      <About hasAnimated={hasAnimated}/>
      <Projects hasAnimated={hasAnimated}/>
      <Skills hasAnimated={hasAnimated}/>
      <Contact hasAnimated={hasAnimated}/>
      <Footer />
      <ScrollToTop showScrollTop={showScrolltop}/>
    </div>
  );
};

export default App;