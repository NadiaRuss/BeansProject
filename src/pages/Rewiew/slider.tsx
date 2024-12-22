import styles from "./styles.module.css";
import { RewiewType } from "../../types/index";
import Rewiews from "./data/rewiews.json";


const Slider = () => {
  return (
    <div>
      {Rewiews.RewiewsJ.map((slide: RewiewType) => (
        <div key={slide.id} className={styles.slideContainer}>
          <img src={slide.link} alt="rewiew picture" />
        </div>
                 
      ))}
    </div>
  );
};

export default Slider;
