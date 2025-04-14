import {
  Footer,
  Hero,
  Main,
  Navbar,
  VisionMisson,
} from "../../components/ui/Landing";
import LayoutWrapper from "../../layout/LayoutWrapper";

const Landing = () => {
  return (
    <>
      <LayoutWrapper>
        <div className="container mx-auto">
          <Navbar />
          <Hero />
        </div>
        <VisionMisson />
        <Main />
        <Footer />
      </LayoutWrapper>
    </>
  );
};

export default Landing;
