import styles from "../../scss/nike/nike.module.scss";
import img from "../../images/nike.jpg";
import { Fade, Slide } from "react-awesome-reveal";
import arrow from "../../images/arrow.png";
const Nike = () => {
  return (
    <Fade delay={1000} triggerOnce>
      <div className={styles.nikeContainer}>
        <div className={styles.sign}>
          <button>Sign In</button>
        </div>
        <Fade delay={1000} triggerOnce>
          <div className={styles.pressContainer}>
            <h3>Press</h3>
            <img src={arrow} />
          </div>
          <input type="checkbox" id="chkbox" />
          <label class="btn" for="chkbox">
            <span className={styles.spanText}>Free The Color</span>
            <span className={styles.hoverColor}></span>
          </label>
          <img src={img} alt="nike shoe" className={styles.nikeImg} />
        </Fade>
      </div>
    </Fade>
  );
};

export default Nike;
