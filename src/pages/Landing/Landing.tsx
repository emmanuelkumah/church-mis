import { Footer, Hero, Main, Navbar } from "../../components/ui/Landing";
import LayoutWrapper from "../../layout/LayoutWrapper";

const Landing = () => {
  return (
    <>
      <LayoutWrapper>
        <Navbar />
        <Hero />
        <Main />
        <Footer />
      </LayoutWrapper>
    </>
  );
};

export default Landing;
