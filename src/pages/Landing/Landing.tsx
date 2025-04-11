import { Footer, Hero, Main, Navbar } from "../../components/ui/Landing";
import LayoutWrapper from "../../layout/LayoutWrapper";

const Landing = () => {
  return (
    <>
      <LayoutWrapper>
        <Navbar />
        <div className="container mx-auto">
          <Hero />
          <Main />
          <Footer />
        </div>
      </LayoutWrapper>
    </>
  );
};

export default Landing;
