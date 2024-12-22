import styles from "./styles.module.css";
import prev from "@/images/prev.svg";
import next from "@/images/next.svg";
import Slide from "./slide";


const RewiewPage = () => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={prev} alt="" />
      <div className={styles.slider}>
        <Slide />
      </div>
      <img className={styles.img} src={next} alt="" />
    </div>
  );
};
export default RewiewPage;
