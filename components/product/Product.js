import { Fade, Slide } from "react-awesome-reveal";
import styles from "../../scss/product/product.module.scss";

const Product = () => {
  return (
    <Fade delay={1000} triggerOnce>
      <div className={styles.productContainer}>
        <div className={styles.writingContainer}>
          <div className={styles.titles}>
            <h2 className={styles.firstTitle}>
              <span>Seoul</span>:Care
            </h2>
            <h2 className={styles.secondTitle}>Summer Skin Care</h2>
            <p>
              Be protected from the elements this summer with the best in Korean
              skin care products.
            </p>
          </div>

          <div className={styles.yellowBoxContainer}>
            <div className={styles.yellowBox}></div>
            <Slide delay={1500} direction="left" triggerOnce>
              <h3>
                See Our Latest <span>►</span>
              </h3>
            </Slide>
          </div>
        </div>

        <div className={styles.imageContainer}></div>
      </div>
    </Fade>
  );
};

export default Product;
