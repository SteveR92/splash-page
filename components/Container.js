import Intro from "./intro/Intro";
import Fashion from "./fashion/Fashion";
import Nike from "./nike/Nike";
import Gym from "./gym/Gym";
import Product from "./product/Product";
import Travel from "./travel/Travel";
import Footer from "./footer/Footer";
import { Fade, Slide, Bounce } from "react-awesome-reveal";

const Container = () => {
  return (
    <Fade cascade>
      <div>
        <Intro />
        <Fashion />
        <Nike />
        <Gym />
        <Product />
        <Travel />
        <Footer />
      </div>
    </Fade>
  );
};

export default Container;
