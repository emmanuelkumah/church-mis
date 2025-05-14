import {
  Footer,
  Group,
  Hero,
  Main,
  VisionMisson,
} from "../../components/ui/Landing";
import LayoutWrapper from "../../layout/LayoutWrapper";
import { useScrollAnchor } from "../../hooks/useScrollAnchor";

const Landing = () => {
  useScrollAnchor({
    behavior: "smooth",
    block: "start",
  });
  return (
    <>
      <LayoutWrapper>
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
