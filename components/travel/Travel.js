import styles from "../../scss/travel/travel.module.scss";
import img from "../../images/travel.png";
import { Fade, Slide, Bounce } from "react-awesome-reveal";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import TabletAndroidIcon from "@material-ui/icons/TabletAndroid";
import mobile from "../../images/screenshots/travelMobile.png";
import tablet from "../../images/screenshots/travelTablet.png";
const Travel = () => {
  return (
    <Fade delay={1000} triggerOnce>
      <div className={styles.travelContainer}>
        <div className={styles.writingContainer}>
          <Slide delay={1000} triggerOnce>
            <div className={styles.writing}>
              <h2>
                <span className={styles.spanUnderline}>
                  Ready to
                  <span className={styles.colorWriting}> Go?</span>
                </span>
              </h2>
              <h3>
                Compare up to
                <span className={styles.spanUnderline}>
                  <span className={styles.colorWriting}> hundreds</span>
                </span>{" "}
                of different prices for your next vacation.
              </h3>
              <div className={styles.button}>
                <button
                  className={`${styles.btn} ${styles.draw_border}`}
                  type="submit"
                >
                  Ready!
                </button>
              </div>
            </div>
          </Slide>
        </div>

        <div className={styles.imageContainer}>
          <img src={img} />
        </div>
        <div className={styles.phoneContainer}>
          <PhoneAndroidIcon id={styles.phoneIcon} />
          <img src={mobile} id={styles.phoneImage} />
        </div>
        <div className={styles.tabletContainer}>
          <TabletAndroidIcon id={styles.tabletIcon} />
          <img src={tablet} id={styles.tabletImage} />
        </div>
      </div>
    </Fade>
  );
};

export default Travel;
