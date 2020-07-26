import { Fade, Slide, Bounce } from "react-awesome-reveal";
import styles from "../../scss/fashion/fashion.module.scss";

const Fashion = () => {
  return (
    <Fade cascade triggerOnce>
      <div className={styles.fashionContainer}>
        <div className={styles.inputContainer}>
          <input type="text" placeholder="Search" />
        </div>
        <Fade delay={500} triggerOnce>
          <div className={styles.pinkBox}></div>
        </Fade>

        <div className={styles.buttonContainer}>
          <button id={styles.button}>0</button>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.titleContainer}>
            <h2>S/S 2020</h2>
          </div>

          <div className={styles.bottomTextContainer}>
            <p>Our latest collection of womensware currated for you.</p>
            <div className={styles.button}>
              <Fade delay={500} triggerOnce>
                <Slide direction="top" triggerOnce>
                  <button
                    id={styles.viewButton}
                    className={`${styles.btn} ${styles.draw_border}`}
                  >
                    View
                  </button>
                </Slide>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Fashion;
