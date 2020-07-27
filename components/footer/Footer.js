import styles from "../../scss/footer/footer.module.scss";
import img from "../../images/travel.png";
import { Fade, Slide, Bounce } from "react-awesome-reveal";
import cat from "../../images/cat.png";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import TabletAndroidIcon from "@material-ui/icons/TabletAndroid";
import test from "../../images/test.png";
import upad from "../../images/ipad.png";
const Travel = () => {
  return (
    <Fade delay={1000} triggerOnce>
      <div className={styles.travelContainer}>
        <div className={styles.writingContainer}>
          <Slide delay={1000} triggerOnce>
            <div className={styles.writing}>
              <h2>
                Want to Learn{" "}
                <span className={styles.spanUnderline}>More?</span>
              </h2>
              <h3>
                For <span className={styles.spanUnderline}>consultations</span>,{" "}
                <span className={styles.spanUnderline}>pricing</span>, or{" "}
                <span className={styles.spanUnderline}>anything else</span>,
              </h3>
              <div className={styles.button}>
                <button
                  className={`${styles.btn} ${styles.draw_border}`}
                  type="submit"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </Slide>
          <Slide direction="right" delay={1000} triggerOnce>
            <div className={styles.footer}>
              <ul>
                <li>Crafted by, </li>
                <li>Designed by, </li>
                <li>Envisaged by, </li>
              </ul>
              <h3>Sterling</h3>
            </div>
          </Slide>
        </div>
        <img src={cat} id={styles.cat} />
        <div className={styles.phoneContainer}>
          <PhoneAndroidIcon id={styles.phoneIcon} />
          <img src={test} id={styles.phoneImage} />
        </div>
        <div className={styles.tabletContainer}>
          <TabletAndroidIcon id={styles.tabletIcon} />
          <img src={upad} id={styles.tabletImage} />
        </div>
      </div>
    </Fade>
  );
};

export default Travel;
