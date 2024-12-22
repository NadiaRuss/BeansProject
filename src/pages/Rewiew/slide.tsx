import styles from "./styles.module.css";
import { RewiewType } from "../../types/index";
import Rewiews from "./data/rewiews.json";

const Slide = () => {
  return (
    <div>
      {Rewiews.rewiews.map((slide: RewiewType) => (
        <div key={slide.id} className={styles.slideContainer}>
          <img
            src={slide.rew}
            alt="rewiew picture"
          />
        </div>
      ))}
    </div>
  );
};

export default Slide;
