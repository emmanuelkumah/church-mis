import { Link, useLocation } from "react-router";

import {
  Footer,
  Group,
  Hero,
  Main,
  Navbar,
  VisionMisson,
} from "../../components/ui/Landing";
import LayoutWrapper from "../../layout/LayoutWrapper";
import { useEffect } from "react";

const ScrollToSection: React.FC = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [location.hash]);

  return null;
};
const Landing = () => {
  return (
    <>
      <LayoutWrapper>
        <ScrollToSection />
        <Navbar />
        <div className="container mx-auto">
          <section id="home">
            <Hero />
          </section>
          <section id="VisionMission">
            <VisionMisson />
          </section>
          <section id="about">
            <Main />
          </section>
          <section id="groups">
            <Group />
          </section>
        </div>
        <Footer />
      </LayoutWrapper>
    </>
  );
};

export default Landing;
