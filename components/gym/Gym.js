import styles from "../../scss/gym/gym.module.scss";
import img from "../../images/strong_man.png";
import { Fade, Slide } from "react-awesome-reveal";

const Gym = () => {
  return (
    <Fade delay={1000} triggerOnce>
      <div className={styles.gymContainer}>
        <div className={styles.imgContainer}>
          <div className={styles.circle}></div>
          <Fade delay={1000} triggerOnce>
            <img src={img} alt="crossfit" />
          </Fade>
        </div>
        <Fade delay={1200} triggerOnce>
          <div className={styles.textContainer}>
            <h2>Personal Training and Therapy Sessions</h2>
            <h3>Book and Manage your sessions with your new trainer here.</h3>
            <p>I need a:</p>
          </div>
        </Fade>
        <Fade delay={1500} triggerOnce>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>Personal Trainer</button>
            <button className={styles.button}>Physiotherapist</button>
          </div>
        </Fade>
      </div>
    </Fade>
  );
};

export default Gym;
