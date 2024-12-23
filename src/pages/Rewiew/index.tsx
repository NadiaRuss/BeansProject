import styles from "./styles.module.css";
import Rewiews from "./data/rewiews.json";
import { RewiewType } from "../../types/index";


const RewiewPage = () => {


  return (
    <div className={styles.container}>
        {Rewiews.RewiewsJ.map((slide: RewiewType) => (
          <div key={slide.id} className={styles.slideContainer}>
            <img src={slide.link} alt="rewiew picture" />
          </div>
        ))}
    </div>
  );
};
export default RewiewPage;
