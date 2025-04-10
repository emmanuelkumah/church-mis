import { Footer, Hero, Main, Navbar } from "../../components/ui/Landing";
import LayoutWrapper from "../../layout/LayoutWrapper";

const Landing = () => {
  return (
    <>
      <LayoutWrapper>
        <div className="container mx-auto">
          <Navbar />
          <Hero />
          <Main />
          <Footer />
        </div>
      </LayoutWrapper>
    </>
  );
};

export default Landing;
