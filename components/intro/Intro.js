import { Fade, Slide, Bounce } from "react-awesome-reveal";
import styles from "../../scss/intro/intro.module.scss";
import img from "../../images/desktopman.png";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import TabletAndroidIcon from "@material-ui/icons/TabletAndroid";
import test from "../../images/test.png";
import upad from "../../images/ipad.png";
const Intro = () => {
  return (
    <Fade cascade>
      <div className={styles.introContainer}>
        <Slide triggerOnce>
          <div className={styles.imgContainer}>
            <img src={img} alt="desktop man" className={styles.img} />
          </div>
        </Slide>
        <Fade delay={1000} triggerOnce>
          <div className={styles.titleContainer}>
            <h2 className={styles.h2}>
              <span className={styles.spanUnderline}>UI</span> and{" "}
              <span className={styles.spanUnderline}>Web</span> Design Concepts
              by <span className={styles.spanUnderline}>Sterling</span>
            </h2>
            <h3 className={styles.h3}>
              Check out on Desktop and Mobile, or hover over the icons on the
              left of the page.
            </h3>
          </div>
        </Fade>
        <div className={styles.buttonContainer}>
          <button>Contact</button>
        </div>
        <div className={styles.phoneContainer}>
          <PhoneAndroidIcon id={styles.phoneIcon} />
          <img src={test} id={styles.phoneImage} />
        </div>
        <div className={styles.tabletContainer}>
          <TabletAndroidIcon id={styles.tabletIcon} />
          <img src={upad} id={styles.tabletImage} />
        </div>
        <div className={styles.arrowContainer}>
          <h4 className={styles.h4}>Scroll</h4>
          <Bounce>
            <p className={styles.p}>&#8595;</p>
          </Bounce>
        </div>
      </div>
    </Fade>
  );
};

export default Intro;
